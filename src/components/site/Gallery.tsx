import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import { useState } from "react";

const row1 = [
  { src: g1, label: "Evento Corporativo" },
  { src: g2, label: "Feira do Empreendedor" },
  { src: g3, label: "Palestra Intimista" },
  { src: g4, label: "Grande Auditório" },
];

const row2 = [
  { src: g4, label: "Grande Auditório" },
  { src: g3, label: "Palestra Intimista" },
  { src: g1, label: "Evento Corporativo" },
  { src: g2, label: "Feira do Empreendedor" },
];

const Gallery = () => {
  const [paused, setPaused] = useState(false);

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
      </div>

      {/* Scrolling rows */}
      <div
        className="space-y-4 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)",
        }}
      >
        {/* Row 1 - scroll left */}
        <div
          className="flex gap-4"
          style={{
            animation: "scroll-left 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {[...row1, ...row1].map((p, i) => (
            <GalleryCard key={`r1-${i}`} photo={p} />
          ))}
        </div>

        {/* Row 2 - scroll right */}
        <div
          className="flex gap-4"
          style={{
            animation: "scroll-right 40s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {[...row2, ...row2].map((p, i) => (
            <GalleryCard key={`r2-${i}`} photo={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryCard = ({ photo }: { photo: { src: string; label: string } }) => (
  <figure className="relative overflow-hidden bg-muted group flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[220px] sm:h-[280px] lg:h-[320px] rounded-lg">
    <img
      src={photo.src}
      alt={photo.label}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <figcaption className="absolute bottom-4 left-4 text-cream text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {photo.label}
    </figcaption>
  </figure>
);

export default Gallery;
