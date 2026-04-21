import { useEffect, useRef, useState } from "react";

const items = [
  {
    quote: "Evento com ela é certeza de sucesso. Conduz o palco com leveza e profundidade.",
    author: "Diretora de RH",
    org: "Grupo Empresarial · Curitiba",
  },
  {
    quote: "Comunicação clara, prática e transformadora. Saímos da palestra com ações concretas.",
    author: "Líder de Equipe",
    org: "Multinacional do setor automotivo",
  },
  {
    quote: "Profissional que entrega muito além do esperado. Conexão imediata com a plateia.",
    author: "Organizador",
    org: "Congresso Nacional de Liderança",
  },
  {
    quote: "Uma das melhores palestras que já tivemos. Impacto real na cultura da empresa.",
    author: "CEO",
    org: "Startup de tecnologia · Lisboa",
  },
  {
    quote: "Valdireni transforma qualquer ambiente. Energia, conteúdo e resultado na mesma medida.",
    author: "Coordenadora de Eventos",
    org: "Federação das Indústrias · São Paulo",
  },
];

const duplicated = [...items, ...items];

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-coral text-cream">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-cream" />
            <span className="text-xs tracking-[0.3em] uppercase text-cream/80 font-medium">
              Depoimentos
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-cream">
            O que dizem sobre o trabalho de Valdireni.
          </h2>
        </div>

        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              animation: `scroll-left 45s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {duplicated.map((t, i) => (
              <figure
                key={i}
                className="flex-shrink-0 w-[340px] lg:w-[400px] p-8 lg:p-10 bg-cream text-ink rounded-lg flex flex-col justify-between min-h-[280px] hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              >
                <div>
                  <div className="font-serif text-coral text-5xl leading-none mb-3">"</div>
                  <blockquote className="font-serif text-lg lg:text-xl leading-snug text-pretty">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="font-medium text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                    {t.org}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
