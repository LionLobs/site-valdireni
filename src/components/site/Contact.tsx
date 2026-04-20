import { useState } from "react";
import { toast } from "sonner";
import { Phone, Instagram, Globe, Mail } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const text = encodeURIComponent(
      `Olá Valdireni! Sou ${name} da ${company}.\n\n${message}`
    );
    window.open(`https://wa.me/5541992885787?text=${text}`, "_blank");
    toast.success("Redirecionando para o WhatsApp…");
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-coral/20 rounded-full blur-3xl" />

      <div className="container-editorial relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-cream/60 font-medium">
              Vamos conversar
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Comunicação não é detalhe. <em className="text-coral italic">É o que define o resultado.</em>
          </h2>

          <p className="mt-8 text-lg text-cream/75 leading-relaxed max-w-lg text-pretty">
            Vamos construir juntos uma palestra ou treinamento para sua empresa. Líderes mais claros,
            equipes mais alinhadas, menos ruído e mais resultado.
          </p>

          <div className="mt-12 space-y-5">
            {[
              { icon: Phone, label: "(41) 99288-5787", href: "https://wa.me/5541992885787" },
              { icon: Instagram, label: "@valdirenialvesjornalista", href: "https://instagram.com/valdirenialvesjornalista" },
              { icon: Globe, label: "valdirenialves.com.br", href: "https://valdirenialves.com.br" },
              { icon: Mail, label: "contato@valdirenialves.com.br", href: "mailto:contato@valdirenialves.com.br" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 border border-cream/20 flex items-center justify-center group-hover:bg-coral group-hover:border-coral transition-all">
                  <c.icon size={16} />
                </span>
                <span className="text-cream/85 group-hover:text-coral transition-colors">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="bg-cream/5 backdrop-blur border border-cream/10 p-8 lg:p-10 space-y-5"
          >
            <h3 className="font-serif text-2xl mb-2">Solicitar proposta</h3>
            <p className="text-sm text-cream/60 mb-6">
              Conte sobre seu evento e Valdireni retornará em breve.
            </p>

            <div>
              <label className="text-xs tracking-wider uppercase text-cream/60 block mb-2">Nome</label>
              <input
                name="name"
                required
                className="w-full bg-transparent border-b border-cream/20 focus:border-coral outline-none py-3 text-cream placeholder-cream/30"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="text-xs tracking-wider uppercase text-cream/60 block mb-2">Empresa / Evento</label>
              <input
                name="company"
                required
                className="w-full bg-transparent border-b border-cream/20 focus:border-coral outline-none py-3 text-cream placeholder-cream/30"
                placeholder="Nome da organização"
              />
            </div>
            <div>
              <label className="text-xs tracking-wider uppercase text-cream/60 block mb-2">Mensagem</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-cream/20 focus:border-coral outline-none py-3 text-cream placeholder-cream/30 resize-none"
                placeholder="Tipo de evento, data, formato, público estimado…"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-coral text-cream py-4 text-sm font-medium tracking-wide hover:bg-coral-deep transition-colors duration-300 disabled:opacity-60"
            >
              {loading ? "Enviando…" : "Enviar via WhatsApp →"}
            </button>

            <div className="pt-6 mt-2 border-t border-cream/10">
              <p className="text-xs tracking-[0.25em] uppercase text-cream/50 mb-4 text-center">
                Ou fale direto
              </p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://wa.me/5541992885787"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex flex-col items-center gap-2 py-3 border border-cream/15 hover:bg-coral hover:border-coral transition-all group"
                >
                  <Phone size={18} className="text-cream group-hover:text-cream" />
                  <span className="text-[10px] tracking-wider uppercase text-cream/70 group-hover:text-cream">WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/valdirenialvesjornalista"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex flex-col items-center gap-2 py-3 border border-cream/15 hover:bg-coral hover:border-coral transition-all group"
                >
                  <Instagram size={18} className="text-cream group-hover:text-cream" />
                  <span className="text-[10px] tracking-wider uppercase text-cream/70 group-hover:text-cream">Instagram</span>
                </a>
                <a
                  href="mailto:contato@valdirenialves.com.br"
                  aria-label="E-mail"
                  className="flex flex-col items-center gap-2 py-3 border border-cream/15 hover:bg-coral hover:border-coral transition-all group"
                >
                  <Mail size={18} className="text-cream group-hover:text-cream" />
                  <span className="text-[10px] tracking-wider uppercase text-cream/70 group-hover:text-cream">E-mail</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
