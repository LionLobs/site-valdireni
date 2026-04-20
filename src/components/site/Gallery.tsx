import p1 from "@/assets/palestra-1.jpg";
import p2 from "@/assets/palestra-2.jpg";
import p3 from "@/assets/palestra-3.jpg";
import p4 from "@/assets/palestra-4.jpg";
import p5 from "@/assets/palestra-5.jpg";

const photos = [
  { src: p1, label: "Palco Principal", span: "lg:col-span-5 lg:row-span-2" },
  { src: p2, label: "Auditório Lotado", span: "lg:col-span-7" },
  { src: p4, label: "Conferência", span: "lg:col-span-4" },
  { src: p3, label: "Identidade Visual", span: "lg:col-span-3" },
  { src: p5, label: "Inovação Tecnológica", span: "lg:col-span-5" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 lg:py-32">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-coral" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Alguns Trabalhos
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Em palco, no estúdio, na liderança.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            Mais de três décadas em palcos corporativos, congressos, governos e auditórios pelo Brasil e Portugal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[260px] gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden bg-muted group ${p.span} h-[320px] lg:h-auto`}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 text-cream text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
