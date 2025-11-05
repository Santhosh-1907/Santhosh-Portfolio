import React from "react";

export default function ScrollProgress() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      el.style.setProperty("--p", `${p}%`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-black/10"
    >
      <div
        ref={ref}
        className="h-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-200"
        style={{ width: "var(--p, 0%)" }}
      />
    </div>
  );
}
