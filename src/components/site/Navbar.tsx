import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-valdireni.png";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#palestras", label: "Palestras" },
  { href: "#livro", label: "Livro" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Valdireni Alves">
          <img src={logo} alt="Valdireni Alves" className="h-12 w-auto md:h-14" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-coral transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-cream text-sm font-medium tracking-wide hover:bg-coral transition-colors duration-300"
          >
            Contratar Palestra
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="container-editorial py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80 hover:text-coral border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center px-5 py-3 bg-ink text-cream text-sm font-medium"
            >
              Contratar Palestra →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
