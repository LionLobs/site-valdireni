import sofa from "@/assets/valdireni-sofa.jpg";

const reasons = [
  { t: "Conteúdo Prático", d: "Aplicável de imediato — não apenas teoria de palco." },
  { t: "Experiência Real", d: "Mais de 30 anos no mercado, da TV à liderança corporativa." },
  { t: "Conexão Imediata", d: "Diálogo real com o público, do operacional à diretoria." },
  { t: "Clareza & Profundidade", d: "Mensagens objetivas que se sustentam após o evento." },
  { t: "Resultado Mensurável", d: "Comunicação que gera transformação visível em pessoas e times." },
];

const WhyHire = () => {
  return (
    <section className="py-24 lg:py-32 bg-ink text-cream relative overflow-hidden grain">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/15 rounded-full blur-3xl -z-0" />

      <div className="container-editorial relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-md">
            <img
              src={sofa}
              alt="Valdireni Alves em ambiente de leitura"
              className="reveal-color-photo w-full h-full object-cover shadow-elegant"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-cream/10" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-cream/60 font-medium">
              Por que contratar
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            A experiência da vivência que traz <em className="text-coral italic">clareza</em> para o resultado.
          </h2>

          <div className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
            {reasons.map((r, i) => (
              <div key={r.t} className="grid grid-cols-12 gap-6 py-6 group hover:pl-2 transition-all duration-300">
                <div className="col-span-1 font-serif text-coral text-xl">0{i + 1}</div>
                <div className="col-span-11 lg:col-span-4 font-serif text-2xl lg:text-3xl">{r.t}</div>
                <div className="col-span-12 lg:col-span-7 text-cream/70 lg:text-right text-pretty leading-relaxed">
                  {r.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
