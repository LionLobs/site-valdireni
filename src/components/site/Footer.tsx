import logo from "@/assets/logo-valdireni.png";

const Footer = () => {
  return (
    <footer className="bg-ink text-cream/70 border-t border-cream/10 py-12">
      <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Valdireni Alves" className="h-12 w-auto invert brightness-0 opacity-90" />
          <div className="text-xs tracking-wider uppercase text-cream/50">
            Especialista em comunicação e oratória
          </div>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wider uppercase">
          <a href="#sobre" className="hover:text-coral transition-colors">Sobre</a>
          <a href="#palestras" className="hover:text-coral transition-colors">Palestras</a>
          <a href="#contato" className="hover:text-coral transition-colors">Contato</a>
        </div>
        <div className="text-xs text-cream/50 text-center md:text-right">
          © {new Date().getFullYear()} Valdireni Alves
          <span className="block md:inline md:ml-2 text-cream/40">
            · Criado por <a href="https://www.instagram.com/lionlobs" target="_blank" rel="noopener noreferrer" className="text-coral hover:text-coral-deep transition-colors">@lionlobs</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
