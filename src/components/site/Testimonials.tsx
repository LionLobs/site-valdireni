import { useEffect, useRef, useState } from "react";

const items = [
  {
    quote: "Comunicação clara, prática e transformadora. Saímos da palestra com ações concretas.",
    author: "Líder de Equipe",
    org: "Indústria paranaense",
  },
  {
    quote: "Evento com ela é certeza de sucesso. Conduz o palco com leveza e profundidade.",
    author: "Diretor de RH",
    org: "Grupo Empresarial · Curitiba",
  },
  {
    quote: "Profissional que entrega muito além do esperado. Conexão imediata com a plateia.",
    author: "Organizador de evento",
    org: "RS",
  },
  {
    quote: "Uma das melhores palestras que já tivemos. Você entregou A PALESTRA.",
    author: "Organizador de evento",
    org: "Nacional",
  },
  {
    quote: "A Valdireni Alves é a profissional de comunicação mais completa que eu conheço. Ela entrega muito. No palco ou nos treinamentos.",
    author: "Diretora/fundadora",
    org: "Empresa de Comunicação Corporativa",
  },
  {
    quote: "Profissional de extrema inteligência, agilidade e competência. Evento com ela é sinal de sucesso.",
    author: "Estrategista de Neuromarketing e eventos",
    org: "",
  },
  {
    quote: "A melhor palestra de comunicação que eu já participei. Transformou a minha empresa e a minha forma de ver a vida.",
    author: "Empresária",
    org: "Setor da beleza",
  },
  {
    quote: "Conheci a Val há muitos anos, quando ela ainda atuava como executiva de comunicação. Ela sempre foi diferenciada e comprometida. Hoje, no palco, ela mostra e ensina o que vive.",
    author: "Executiva",
    org: "Setor de comunicação",
  },
  {
    quote: "A Valdireni Alves trouxe para o nosso evento o que estávamos precisando: conhecimento, técnica, motivação e algo que não vou esquecer — chova ou faça sol, comunicação é poder.",
    author: "Produtora",
    org: "Setor do agronegócio",
  },
  {
    quote: "Valdireni Alves, a Vla, é a profissional ideal para falar de comunicação, no seu evento ou na sua equipe. Conheço o trabalho dela há 10 anos.",
    author: "CEO",
    org: "Empresa de tecnologia",
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
            O que dizem sobre o trabalho de Valdireni Alves.
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
