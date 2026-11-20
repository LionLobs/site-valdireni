type GtagArgs = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: GtagArgs[];
    gtag?: (...args: GtagArgs) => void;
  }
}

function push(...args: GtagArgs) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Envia uma visualização de página para o Google Tag Manager / Analytics. */
export function trackPageView(path: string) {
  push("event", "page_view", {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
}

/** Envia um evento personalizado (clique em CTA, envio de formulário etc.). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  push("event", name, params);
}
