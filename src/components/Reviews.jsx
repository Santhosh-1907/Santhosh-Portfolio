import React from "react";
import SectionHeading from "./SectionHeading";

const reviews = [
  { name: "Sathish", role: "YaCart", text: "Rebuilt our website with clean UX—loads 2x faster and drives more product views." },
  { name: "Kalki", role: "Vel InfoTech", text: "Modern, responsive website with solid SEO—organic traffic is climbing already." },
  { name: "Praveen", role: "YawayTech Portal", text: "Clear design system and pages that feel polished across mobile and desktop." },
];


export default function Reviews() {
  const delays = ["", "delay-200", "delay-400"]; // stagger like other sections

  return (
    <section id="reviews" className="py-14 md:py-20">
      <div className="animate-reveal-up">
        <SectionHeading eyebrow="What clients say" title="Reviews" />
      </div>

      <div className="container-grid grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            className={`group relative glass rounded-2xl p-6
                        animate-reveal-up ${delays[i]}
                        transition-transform duration-300
                        hover:-translate-y-1 hover:shadow-glow`}
          >
            {/* shine sweep */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
            >
              <div
                className="absolute top-0 -left-1/3 h-full w-1/3 skew-x-12
                           bg-gradient-to-r from-white/5 via-white/15 to-white/5
                           blur-[2px] opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 animate-nav-shine"
              />
            </div>

            <blockquote className="relative text-white/85">“{r.text}”</blockquote>
            <figcaption className="relative mt-4 text-sm text-white/60">
              {r.name} • {r.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
