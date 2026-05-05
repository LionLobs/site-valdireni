import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

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
      <video
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/media/valdireni-bg.webm" type="video/webm" />
        <source src="/media/valdireni-bg.mp4" type="video/mp4" />
      </video>

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
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="metadata"
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
    </section>
  );
};

export default VideoIntro;