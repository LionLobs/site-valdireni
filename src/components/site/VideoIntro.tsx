import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [ytOn, setYtOn] = useState(false);

  // Start downloading/playing the clip only when it scrolls near the screen
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { v.preload = "auto"; v.play().catch(() => {}); }
      else v.pause();
    }, { rootMargin: "200px" });
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.volume = 1;
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Blurred background fill (same video) so the frame is never cropped */}
      <img src="/media/valdireni-bg-poster.jpg" alt="" aria-hidden loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50" />

      {/* Brand color wash on top of the blurred bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--ink) / 0.7) 0%, hsl(var(--ink) / 0.55) 50%, hsl(var(--ink) / 0.85) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-50"
        style={{ background: "var(--gradient-radial-coral)" }}
        aria-hidden
      />

      <div className="relative z-10 container-editorial section-y grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
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
          <button
            type="button"
            onClick={toggleSound}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-cream/30 text-cream text-sm tracking-wide hover:border-coral hover:text-coral transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            {muted ? "Ativar som" : "Silenciar"}
          </button>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-3 bg-coral -z-10 translate-x-3 translate-y-3" aria-hidden />
            <div className="absolute inset-0 bg-cream -z-10 -translate-x-2 -translate-y-2" aria-hidden />
            <div className="relative aspect-square overflow-hidden shadow-elegant bg-ink">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={muted}
                loop
                playsInline
                preload="none"
                poster="/media/valdireni-bg-poster.jpg"
                onClick={toggleSound}
              >
                <source src="/media/valdireni-bg.webm" type="video/webm" />
                <source src="/media/valdireni-bg.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container-editorial pb-16 lg:pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-coral" />
          <span className="text-xs tracking-[0.3em] uppercase text-cream/80 font-medium">
            Mais um momento
          </span>
        </div>
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="absolute -inset-3 bg-coral -z-10 translate-x-3 translate-y-3" aria-hidden />
          <div className="absolute inset-0 bg-cream -z-10 -translate-x-2 -translate-y-2" aria-hidden />
          <div className="relative aspect-video overflow-hidden shadow-elegant bg-ink">
            {ytOn ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1vwKdEtOzMw?autoplay=1"
                title="Valdireni Alves — palestra"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setYtOn(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label="Assistir palestra de Valdireni Alves no YouTube"
              >
                <img
                  src="https://i.ytimg.com/vi/1vwKdEtOzMw/hqdefault.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-coral text-cream shadow-coral transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;