import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import PageViewTracker from "@/components/PageViewTracker";
import { trackEvent, trackPageView } from "@/lib/analytics";

type Entry = unknown[];

const entries = (): Entry[] =>
  ((window as any).dataLayer as Entry[] | undefined)?.slice() ?? [];

const pageViews = () =>
  entries().filter((e) => e && Array.isArray(e) && e[0] === "event" && e[1] === "page_view");

const Navigator = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/contato")}>ir para contato</button>;
};

describe("Google Tag Manager / Analytics", () => {
  beforeEach(() => {
    (window as any).dataLayer = [];
  });

  it("registra a visualização de página no formato do gtag", () => {
    trackPageView("/");
    const e = entries()[0];
    expect(e[0]).toBe("event");
    expect(e[1]).toBe("page_view");
    expect(e[2]).toMatchObject({ page_path: "/" });
  });

  it("envia page_view com o caminho da página", () => {
    trackPageView("/palestras");
    const views = pageViews();
    expect(views).toHaveLength(1);
    expect(views[0][2]).toMatchObject({ page_path: "/palestras" });
  });

  it("envia eventos personalizados", () => {
    trackEvent("click_whatsapp", { local: "botao_flutuante" });
    const e = entries()[0];
    expect(e[1]).toBe("click_whatsapp");
    expect(e[2]).toMatchObject({ local: "botao_flutuante" });
  });

  it("não envia page_view na primeira renderização", () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <PageViewTracker />
        </MemoryRouter>,
      );
    });
    expect(pageViews()).toHaveLength(0);
  });

  it("envia page_view quando a rota muda", () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <PageViewTracker />
          <Navigator />
        </MemoryRouter>,
      );
    });
    fireEvent.click(screen.getByRole("button", { name: "ir para contato" }));
    const views = pageViews();
    expect(views).toHaveLength(1);
    expect(views[0][2]).toMatchObject({ page_path: "/contato" });
  });
});
