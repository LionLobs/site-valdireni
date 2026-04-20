const talks = [
  {
    n: "01",
    title: "Você é do Tamanho da Sua Comunicação",
    desc: "A comunicação como ferramenta de posicionamento, crescimento e influência pessoal e profissional.",
  },
  {
    n: "02",
    title: "Comunicação é Poder",
    desc: "Como líderes impactam cultura, clima organizacional e performance através da comunicação estratégica.",
  },
  {
    n: "03",
    title: "Comunicação Estratégica no Dia a Dia",
    desc: "Do operacional ao estratégico: como sair da comunicação automática e ganhar clareza, segurança e propósito.",
  },
  {
    n: "04",
    title: "A Menina que Aprendeu a Voar e Cruzou Oceanos",
    desc: "A história real de uma empreendedora que nasceu numa casa de chão batido e conquistou palcos internacionais.",
  },
];

const Talks = () => {
  return (
    <section id="palestras" className="py-24 lg:py-32 bg-cream">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Temas de Palestras
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Palestras que conectam <em className="text-coral italic">comunicação</em>, liderança e resultado.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {talks.map((t) => (
            <article
              key={t.n}
              className="group bg-cream p-8 lg:p-12 hover:bg-ink hover:text-cream transition-all duration-500 cursor-default"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-serif text-5xl lg:text-6xl text-coral group-hover:text-coral transition-colors">
                  {t.n}
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground group-hover:text-cream/60">
                  Palestra
                </span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl leading-tight mb-4 text-balance">
                {t.title}
              </h3>
              <p className="text-base text-foreground/70 group-hover:text-cream/80 leading-relaxed text-pretty">
                {t.desc}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-coral">
                <span>Solicitar essa palestra</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talks;
