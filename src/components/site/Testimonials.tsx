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
];

const Testimonials = () => {
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

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={i}
              className="p-8 lg:p-10 bg-cream text-ink border border-cream/20 flex flex-col justify-between min-h-[320px] hover:shadow-elegant transition-shadow duration-500"
            >
              <div>
                <div className="font-serif text-coral text-6xl leading-none mb-4">"</div>
                <blockquote className="font-serif text-xl lg:text-2xl leading-snug text-pretty">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                  {t.org}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
