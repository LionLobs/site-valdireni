const VideoIntro = () => {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/valdireni-bg-poster.jpg"
        aria-hidden
      >
        <source src="/media/valdireni-bg.webm" type="video/webm" />
        <source src="/media/valdireni-bg.mp4" type="video/mp4" />
      </video>

      {/* Color + darkening overlay using brand tokens */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--ink) / 0.55) 0%, hsl(var(--ink) / 0.35) 45%, hsl(var(--ink) / 0.75) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-60"
        style={{ background: "var(--gradient-radial-coral)" }}
        aria-hidden
      />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-coral" />
            <span className="text-xs tracking-[0.3em] uppercase text-cream/80 font-medium">
              No palco · ao vivo
            </span>
          </div>
          <h2 className="font-serif text-cream text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Comunicação que <em className="text-coral not-italic italic font-medium">move</em> pessoas
            e <em className="text-coral not-italic italic font-medium">posiciona</em> líderes.
          </h2>
          <p className="mt-6 text-cream/80 text-lg max-w-xl leading-relaxed">
            Um recorte de uma palestra de Valdireni Alves — presença, palavra e propósito em cena.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;