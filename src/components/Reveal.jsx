import React from "react";

export default function Reveal({
  as: Tag = "div",
  effect = "up",
  delay = 0,
  once = true,
  className = "",
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: 0.14 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, once]);

  const base = "will-change-transform will-change-opacity";
  const hidden = "opacity-0";
  const variants = {
    up: "translate-y-4",
    down: "-translate-y-4",
    left: "translate-x-4",
    right: "-translate-x-4",
    zoom: "scale-[.98]",
    fade: "",
  };
  const shown = "opacity-100 translate-x-0 translate-y-0 scale-100";

  const classes = [
    className,
    base,
    "transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
    show ? shown : `${hidden} ${variants[effect]}`
  ].join(" ");

  return React.createElement(Tag, { ref, className: classes, ...rest }, children);
}
