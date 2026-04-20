import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  /** 0–1 viewport intersection ratio that triggers the reveal */
  threshold?: number;
}

/**
 * Scroll-reveal wrapper. Uses IntersectionObserver to add a `is-visible`
 * class once. Respects `prefers-reduced-motion` automatically.
 */
const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
  threshold = 0.15,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      className={cn("reveal", `reveal-${variant}`, visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
