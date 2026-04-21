import heroImg from "@/assets/valdireni-hero.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative pt-28 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
      {/* radial coral wash */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-coral)" }} />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] rounded-full bg-coral/10 blur-3xl -z-10" />

      <div className="container-editorial flex flex-row gap-5 sm:gap-8 lg:gap-16 items-start lg:items-center">
        {/* Foto — sempre à esquerda do texto, em mobile e desktop */}
        <div className="shrink-0 w-[110px] sm:w-[180px] md:w-[260px] lg:w-[42%] lg:max-w-md relative animate-fade-in mt-2 lg:mt-0">
          <div className="relative w-full">
            <div className="absolute -inset-3 sm:-inset-4 bg-coral/25 -z-10 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" aria-hidden />
            <div className="absolute inset-0 bg-ink -z-10 -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3" aria-hidden />

            <div className="relative aspect-[4/5] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Valdireni Alves, palestrante e jornalista, especialista em comunicação estratégica"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                loading="eager"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 55%, hsl(var(--ink) / 0.35) 100%)" }}
                aria-hidden
              />
            </div>

            <div className="hidden md:block absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-cream px-4 py-3 sm:px-5 sm:py-4 shadow-soft border border-border max-w-[200px] sm:max-w-[220px]">
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-coral font-semibold">Autora</div>
              <div className="font-serif text-sm sm:text-base mt-1 leading-snug">Você é do Tamanho da Sua Comunicação</div>
            </div>
          </div>
        </div>

        {/* Texto — sempre à direita */}
        <div className="flex-1 min-w-0 animate-fade-up">
          <div className="flex items-center gap-3 mb-4 sm:mb-8">
            <span className="h-px w-6 sm:w-12 bg-coral" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-warm-gray font-medium" style={{ color: "hsl(var(--warm-gray))" }}>
              Palestrante · Brasil & Portugal
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tight text-balance">
            Você é do <em className="text-coral not-italic font-medium italic">tamanho</em> da sua{" "}
            <span className="relative inline-block">
              comunicação
              <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                <path d="M2 9 Q 75 2, 150 7 T 298 5" stroke="hsl(var(--coral))" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Jornalista e especialista em <strong className="text-foreground font-medium">comunicação estratégica e oratória</strong> para líderes,
            com mais de 30 anos transformando palavras em resultados — em palcos do Brasil e de Portugal.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream text-sm font-medium tracking-wide hover:bg-coral transition-all duration-300"
            >
              Levar Valdireni ao seu evento
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#palestras"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 text-foreground text-sm font-medium tracking-wide hover:border-coral hover:text-coral transition-colors duration-300"
            >
              Conhecer palestras
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "30+", l: "anos de experiência" },
              { n: "2.500", l: "pessoas por palco" },
              { n: "2", l: "países: Brasil & Portugal" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl lg:text-4xl text-foreground">{s.n}</div>
                <div className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
