import React, { useEffect, useRef } from "react";

/** Full-page, pointer-activated ripple bursts */
export default function BackgroundRipples({
  maxRipples = 40,        // soft cap to avoid DOM bloat
  burst = 3,              // blobs per tap
  radiusScale = 16,       // how far each blob expands
  durationMs = 900,       // animation duration
}) {
  const layerRef = useRef(null);
  const liveCount = useRef(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  useEffect(() => {
    if (reduced) return;
    const layer = layerRef.current;
    if (!layer) return;

    const onTap = (e) => {
      // ignore taps on interactive elements to avoid visual noise while typing/selecting
      const t = e.target;
      if (t.closest("input, textarea, select, button, a, [role='button']")) return;

      const x = e.clientX ?? (e.touches?.[0]?.clientX || 0);
      const y = e.clientY ?? (e.touches?.[0]?.clientY || 0);

      for (let n = 0; n < burst; n++) {
        if (liveCount.current >= maxRipples) break;
        spawnRipple(layer, x, y, { radiusScale, durationMs, liveRef: liveCount });
      }
    };

    window.addEventListener("pointerdown", onTap, { passive: true });
    return () => window.removeEventListener("pointerdown", onTap);
  }, [burst, durationMs, maxRipples, radiusScale, reduced]);

  return (
    <>
      {/* scoped styles so you don't touch global CSS if you don't want to */}
      <style>{`
        @keyframes _rippleScale {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: .85; }
          70%  { opacity: .35; }
          100% { transform: translate(-50%, -50%) scale(var(--r-scale, 14)); opacity: 0; }
        }
        .bg-ripples-layer {
          position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 1;
          mix-blend-mode: screen;
        }
        .bg-ripple {
          position: absolute; width: 24px; height: 24px; border-radius: 9999px;
          transform: translate(-50%, -50%) scale(0);
          animation: _rippleScale var(--r-ms, 900ms) cubic-bezier(.22,1,.36,1) forwards;
          will-change: transform, opacity, background;
          filter: blur(0.2px);
        }
      `}</style>

      <div ref={layerRef} className="bg-ripples-layer" />
    </>
  );
}

/* ---------- helpers ---------- */
function spawnRipple(layer, x, y, { radiusScale, durationMs, liveRef }) {
  const el = document.createElement("span");
  el.className = "bg-ripple";

  // slight random offset per blob for a 'burst' feel
  const jitter = 12;
  const dx = (Math.random() * 2 - 1) * jitter;
  const dy = (Math.random() * 2 - 1) * jitter;

  // soft random hues around your accent (#AA74FF / #F05BD9)
  const hue = Math.random() < 0.5 ? 275 : 315; // purple/pink bands
  const vary = (v) => Math.max(0, Math.min(100, v + (Math.random() * 10 - 5)));

  // gradient bubble that looks nice on dark + light backgrounds
  el.style.left = `${x + dx}px`;
  el.style.top = `${y + dy}px`;
  el.style.setProperty("--r-scale", String(radiusScale + Math.random() * 4));
  el.style.setProperty("--r-ms", `${durationMs + Math.floor(Math.random() * 200)}ms`);
  el.style.background = `radial-gradient(circle at 30% 30%,
      hsl(${hue} ${vary(85)}% ${vary(70)}% / .95),
      hsl(${hue} ${vary(90)}% ${vary(55)}% / .65) 45%,
      transparent 70%)`;

  // housekeeping
  const onDone = () => {
    el.removeEventListener("animationend", onDone);
    el.remove();
    liveRef.current--;
  };

  // mount
  layer.appendChild(el);
  el.addEventListener("animationend", onDone);
  liveRef.current++;
}
