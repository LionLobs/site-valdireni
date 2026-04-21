import { useState } from "react";

const talks = [
   {
     n: "01",
     title: "Você é do Tamanho da Sua Comunicação",
     desc: "A comunicação como ferramenta de posicionamento, crescimento e influência pessoal e profissional.",
     icon: "🎯",
     tags: ["Posicionamento", "Influência", "Marca Pessoal"],
     audience: "Profissionais, empreendedores e líderes",
     duration: "60–90 min",
   },
   {
     n: "02",
     title: "Comunicação é Poder",
     desc: "Como líderes impactam cultura, clima organizacional e performance através da comunicação estratégica.",
     icon: "⚡",
     tags: ["Liderança", "Cultura", "Performance"],
     audience: "Gestores e C-Level",
     duration: "60–90 min",
   },
   {
     n: "03",
     title: "Comunicação Estratégica no Dia a Dia",
     desc: "Do operacional ao estratégico: como sair da comunicação automática e ganhar clareza, segurança e propósito.",
     icon: "🧭",
     tags: ["Estratégia", "Clareza", "Propósito"],
     audience: "Equipes e colaboradores",
     duration: "45–60 min",
   },
   {
     n: "04",
     title: "A Menina que Aprendeu a Voar e Cruzou Oceanos",
     desc: "A história real de uma empreendedora que nasceu numa casa de chão batido e conquistou palcos internacionais.",
     icon: "✈️",
     tags: ["Inspiração", "Superação", "Empreendedorismo"],
     audience: "Todos os públicos",
     duration: "60–90 min",
   },
];

const Talks = () => {
   const [active, setActive] = useState<number | null>(null);

  return (
     <section id="palestras" className="section-y bg-background relative overflow-hidden">
       {/* Decorative background elements */}
       <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[radial-gradient(circle_at_80%_20%,hsl(var(--coral)/0.06),transparent_60%)] pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[radial-gradient(circle_at_20%_80%,hsl(var(--coral)/0.04),transparent_60%)] pointer-events-none" />

      <div className="container-editorial">
         {/* Header */}
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

         {/* Interactive Cards */}
         <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
           {talks.map((t, i) => {
             const isActive = active === i;
             return (
               <article
                 key={t.n}
                 onClick={() => setActive(isActive ? null : i)}
                 className={`
                   group relative rounded-lg border cursor-pointer
                   transition-all duration-500 ease-[var(--ease-elegant)]
                   ${isActive
                     ? "bg-ink text-cream border-ink shadow-[var(--shadow-elegant)] scale-[1.01] z-10"
                     : "bg-card border-border hover:border-coral/40 hover:shadow-[var(--shadow-soft)]"
                   }
                 `}
               >
                 {/* Top bar */}
                 <div className="p-6 lg:p-8 pb-0 lg:pb-0">
                   <div className="flex items-start justify-between mb-5">
                     <div className="flex items-center gap-3">
                       <span className="text-2xl">{t.icon}</span>
                       <span className={`font-serif text-4xl lg:text-5xl transition-colors duration-500 ${isActive ? "text-coral" : "text-coral/70"}`}>
                         {t.n}
                       </span>
                     </div>
                     <div className={`
                       w-8 h-8 rounded-full flex items-center justify-center text-sm
                       transition-all duration-500
                       ${isActive
                         ? "bg-coral text-accent-foreground rotate-45"
                         : "bg-secondary text-muted-foreground group-hover:bg-coral/20 group-hover:text-coral"
                       }
                     `}>
                       +
                     </div>
                   </div>
 
                   <h3 className="font-serif text-xl lg:text-2xl leading-tight mb-3 text-balance">
                     {t.title}
                   </h3>
 
                   {/* Tags */}
                   <div className="flex flex-wrap gap-2 mb-4">
                     {t.tags.map((tag) => (
                       <span
                         key={tag}
                         className={`
                           text-[0.65rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full
                           transition-colors duration-500
                           ${isActive
                             ? "bg-cream/10 text-cream/80"
                             : "bg-secondary text-muted-foreground"
                           }
                         `}
                       >
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
 
                 {/* Expandable content */}
                 <div
                   className="overflow-hidden transition-all duration-500 ease-[var(--ease-elegant)]"
                   style={{
                     maxHeight: isActive ? "300px" : "0",
                     opacity: isActive ? 1 : 0,
                   }}
                 >
                   <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-2">
                     <div className="h-px w-full bg-cream/15 mb-5" />
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
                       <span>→</span>
                     </a>
                   </div>
                 </div>
 
                 {/* Collapsed CTA hint */}
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
