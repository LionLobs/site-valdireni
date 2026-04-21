import { useState, useRef, useEffect } from "react";

const talks = [
  {
    n: "01",
    title: "Você é do Tamanho da Sua Comunicação",
    desc: "A comunicação como ferramenta de posicionamento, crescimento e influência pessoal e profissional.",
    tags: ["Posicionamento", "Influência", "Marca Pessoal"],
    audience: "Profissionais, empreendedores e líderes",
    duration: "60–90 min",
  },
  {
    n: "02",
    title: "Comunicação é Poder",
    desc: "Como líderes impactam cultura, clima organizacional e performance através da comunicação estratégica.",
    tags: ["Liderança", "Cultura", "Performance"],
    audience: "Gestores e C-Level",
    duration: "60–90 min",
  },
  {
    n: "03",
    title: "Comunicação Estratégica no Dia a Dia",
    desc: "Do operacional ao estratégico: como sair da comunicação automática e ganhar clareza, segurança e propósito.",
    tags: ["Estratégia", "Clareza", "Propósito"],
    audience: "Equipes e colaboradores",
    duration: "45–60 min",
  },
  {
    n: "04",
    title: "A Menina que Aprendeu a Voar e Cruzou Oceanos",
    desc: "A história real de uma empreendedora que nasceu numa casa de chão batido e conquistou palcos internacionais.",
    tags: ["Inspiração", "Superação", "Empreendedorismo"],
    audience: "Todos os públicos",
    duration: "60–90 min",
  },
];

const Talks = () => {
   const [active, setActive] = useState<number | null>(null);
   const sectionRef = useRef<HTMLDivElement>(null);
   const [visible, setVisible] = useState<boolean[]>(new Array(talks.length).fill(false));

   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             const idx = Number(entry.target.getAttribute("data-idx"));
             if (!isNaN(idx)) {
               setTimeout(() => {
                 setVisible((prev) => {
                   const next = [...prev];
                   next[idx] = true;
                   return next;
                 });
               }, idx * 150);
             }
             observer.unobserve(entry.target);
           }
         });
       },
       { threshold: 0.15 }
     );

     const cards = sectionRef.current?.querySelectorAll("[data-idx]");
     cards?.forEach((el) => observer.observe(el));
     return () => observer.disconnect();
   }, []);

  return (
      <section id="palestras" ref={sectionRef} className="section-y bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[radial-gradient(circle_at_80%_20%,hsl(var(--coral)/0.06),transparent_60%)] pointer-events-none transition-opacity duration-1000" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[radial-gradient(circle_at_20%_80%,hsl(var(--coral)/0.04),transparent_60%)] pointer-events-none transition-opacity duration-1000" />

      <div className="container-editorial">
         <div className="max-w-3xl mb-12 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Temas de Palestras
            </span>
          </div>
           <h2 className="font-serif leading-[1.05] tracking-tight text-balance">
            Palestras que conectam <em className="text-coral italic">comunicação</em>, liderança e resultado.
          </h2>
           <p className="mt-5 text-muted-foreground max-w-xl text-pretty">
             Cada palestra é adaptada ao público e ao contexto da sua organização. Clique para explorar os temas.
           </p>
        </div>

         <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
           {talks.map((t, i) => {
             const isActive = active === i;
             const isVisible = visible[i];
             return (
               <article
                 key={t.n}
                 data-idx={i}
                 onClick={() => setActive(isActive ? null : i)}
                 className={`
                   group relative rounded-lg border cursor-pointer
                   transition-all duration-700 ease-[var(--ease-elegant)]
                   ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                   ${isActive
                     ? "bg-ink text-cream border-ink shadow-[var(--shadow-elegant)] scale-[1.02] z-10"
                     : "bg-card border-border hover:border-coral/40 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
                   }
                 `}
               >
                 {/* Coral accent line */}
                 <div className={`absolute top-0 left-0 h-[3px] bg-coral rounded-t-lg transition-all duration-700 ease-[var(--ease-elegant)] ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />

                 <div className="p-6 lg:p-8 pb-0 lg:pb-0">
                   <div className="flex items-start justify-between mb-5">
                     <span className={`font-serif text-4xl lg:text-5xl transition-all duration-500 ${isActive ? "text-coral scale-110 origin-left" : "text-coral/60 group-hover:text-coral"}`}>
                       {t.n}
                     </span>
                     <div className={`
                       w-8 h-8 rounded-full flex items-center justify-center text-sm font-light
                       transition-all duration-500
                       ${isActive
                         ? "bg-coral text-accent-foreground rotate-45 scale-110"
                         : "bg-secondary text-muted-foreground group-hover:bg-coral/15 group-hover:text-coral group-hover:scale-110"
                       }
                     `}>
                       +
                     </div>
                   </div>

                   <h3 className="font-serif text-xl lg:text-2xl leading-tight mb-3 text-balance transition-transform duration-300 group-hover:translate-x-1">
                     {t.title}
                   </h3>

                   <div className="flex flex-wrap gap-2 mb-4">
                     {t.tags.map((tag, ti) => (
                       <span
                         key={tag}
                         className={`
                           text-[0.65rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full
                           transition-all duration-500
                           ${isActive
                             ? "bg-cream/10 text-cream/80"
                             : "bg-secondary text-muted-foreground"
                           }
                         `}
                         style={{ transitionDelay: isActive ? `${ti * 80}ms` : "0ms" }}
                       >
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Expandable content */}
                 <div
                   className="overflow-hidden transition-all duration-600 ease-[var(--ease-elegant)]"
                   style={{
                     maxHeight: isActive ? "300px" : "0",
                     opacity: isActive ? 1 : 0,
                   }}
                 >
                   <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-2">
                     <div className={`h-px w-full bg-cream/15 mb-5 transition-all duration-700 origin-left ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                     <p className="text-sm text-cream/75 leading-relaxed mb-5 text-pretty">
                       {t.desc}
                     </p>
                     <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-cream/50">
                       <span className="flex items-center gap-1.5">
                         <span className="w-1 h-1 rounded-full bg-coral" />
                         {t.audience}
                       </span>
                       <span className="flex items-center gap-1.5">
                         <span className="w-1 h-1 rounded-full bg-coral" />
                         {t.duration}
                       </span>
                     </div>
                     <a
                       href="#contato"
                       onClick={(e) => e.stopPropagation()}
                       className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-coral hover:gap-3 transition-all duration-300"
                     >
                       Solicitar essa palestra
                       <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                     </a>
                   </div>
                 </div>

                 {/* Collapsed desc */}
                 {!isActive && (
                   <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-2">
                     <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 line-clamp-2 text-pretty">
                       {t.desc}
                     </p>
                   </div>
                 )}
               </article>
             );
           })}
        </div>
      </div>
    </section>
  );
};

export default Talks;
