interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  variant?: "ink" | "cream" | "coral";
  speedSeconds?: number;
}

const Marquee = ({ items, reverse = false, variant = "ink", speedSeconds }: MarqueeProps) => {
  const variants = {
    ink: "bg-ink text-cream border-y border-cream/10",
    cream: "bg-cream text-ink border-y border-border",
    coral: "bg-coral text-cream",
  };

  return (
    <div className={`${variants[variant]} py-3 md:py-4 overflow-hidden`}>
      <div className="marquee">
        <div
          className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
          style={speedSeconds ? { animationDuration: `${speedSeconds}s` } : undefined}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className="font-serif italic text-xl md:text-2xl lg:text-3xl whitespace-nowrap flex items-center gap-12"
            >
              {item}
              <span className="text-coral text-2xl md:text-3xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
