import livro from "@/assets/valdireni-book.jpeg";

const Book = () => {
  return (
    <section id="livro" className="py-24 lg:py-32 bg-gradient-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-coral/10 rounded-full blur-3xl" />

      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Livro · Autora
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            <em className="italic text-coral">"Você é do Tamanho da Sua Comunicação"</em>
          </h2>

          <p className="mt-8 text-lg text-foreground/80 leading-relaxed text-pretty max-w-xl">
            A obra que consolida a metodologia prática de Valdireni Alves sobre comunicação como
            ferramenta de crescimento pessoal e profissional. Coautora também de
            <em> Entre Drones e Dinossauros</em> e <em>Mulheres que Cruzaram Oceanos</em>, lançado em Portugal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://greatpeoplebooks.com.br/produtos/voce-e-do-tamanho-da-sua-comunicacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream text-sm font-medium tracking-wide hover:bg-coral transition-colors duration-300"
            >
              Adquirir o livro
              <span>→</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 max-w-xs">
            <div className="border border-border p-4 bg-cream">
              <div className="font-serif text-sm leading-tight text-pretty">Você é do Tamanho da Sua Comunicação</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-8 bg-coral/20 -z-10 rotate-3" />
            <img
              src={livro}
              alt="Valdireni Alves segurando seu livro Você é do Tamanho da Sua Comunicação"
              className="w-full shadow-elegant"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
