import portrait from "@/assets/valdireni-portrait.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="relative aspect-[4/5] w-full">
            <img
              src={portrait}
              alt="Retrato profissional de Valdireni Alves"
              className="w-full h-full object-cover grayscale transition-all duration-700 shadow-elegant"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-coral text-cream p-6 max-w-[260px]">
              <div className="font-serif italic text-2xl leading-tight">
                "Comunicação não é dom. É habilidade."
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Sobre Valdireni
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Uma trajetória que conecta <em className="text-coral italic">comunicação</em> e resultado.
          </h2>

          <div className="mt-10 space-y-6 text-lg text-foreground/85 leading-relaxed text-pretty">
            <p>
              Valdireni Alves é palestrante no <strong>Brasil e em Portugal</strong>, especialista em
              comunicação estratégica e oratória para líderes. Construiu sua trajetória no jornalismo,
              na comunicação corporativa e na formação de líderes — atuando em grandes emissoras de
              TV, multinacionais e instituições públicas.
            </p>
            <p>
              Autora do livro <em>"Você é do Tamanho da Sua Comunicação"</em> e coautora de
              <em> Entre Drones e Dinossauros</em> e <em>Mulheres que Cruzaram Oceanos</em> (lançado em Portugal),
              consolidou uma metodologia prática que transforma comunicação em ferramenta de crescimento.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-5 border-t border-border pt-10">
            {[
              "Principais emissoras de TV do Paraná",
              "Comunicação corporativa em grandes empresas",
              "Direção de comunicação no setor público",
              "Formação de líderes e equipes",
              "Treinamentos in company e mentorias",
              "Palcos para até 2.500 pessoas",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-coral mt-1.5 text-xl leading-none">✦</span>
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
