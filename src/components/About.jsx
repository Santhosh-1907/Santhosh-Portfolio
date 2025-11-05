import React from "react";
import SectionHeading from "./SectionHeading";

export default function About() {
  const cards = [
    {
      t: "Frontend Engineering",
      d: "React • Redux • Vite • Tailwind • Bootstrap • Framer Motion • Accessibility • Design systems • Performance budgets",
    },
    {
      t: "Backend & APIs",
      d: "Node/Express & FastAPI • REST/GraphQL • Auth • Caching • Queues • Testing (Jest/Pytest)",
    },
    {
      t: "DevOps & Cloud",
      d: "Docker • CI/CD • Nginx • Linux • Supabase/Postgres • MongoDB • Render/Vercel • Observability",
    },
  ];
  const delays = ["", "delay-200", "delay-400"];

  return (
    <section id="services" className="py-14 md:py-20">
      <div className="animate-reveal-up">
        <SectionHeading
          id="about"
          eyebrow="About me"
          title="Full-Stack developer who ships from design to deployment"
          subtitle="I build accessible, high-performance web apps end-to-end—clean UIs, robust APIs, and cloud-ready infra."
        />
      </div>

      <div className="container-grid grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <article
            key={card.t}
            className={`group relative glass rounded-2xl p-6 animate-reveal-up ${delays[i]}
                        transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow`}
          >
            {/* shimmer overlay on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
                         group-hover:opacity-100 transition
                         bg-gradient-to-r from-accent/10 via-accent2/10 to-accent/10
                         animate-gradient"
            />
            <h3 className="relative text-lg font-semibold">{card.t}</h3>
            <p className="relative mt-2 text-white/70">{card.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
