import React from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

const list = [
  {
    id: "p1",
    title: "YaKart",
    desc: "A clean, responsive product booking website featuring elegant UI design and category-based browsing built with React and Tailwind CSS.",
    tag: "Web App",
    link: "https://develop.d551u3p9aznp3.amplifyapp.com/",
  },
  {
    id: "p2",
    title: "VellTech Website",
    desc: "A modern e-learning platform offering professional software courses, built with React and Tailwind on the front end and powered by a Java backend for seamless enquiries and management.",
    tag: "Web App",
    link: "https://www.vellinfotech.com/",
  },
  {
    id: "p3",
    title: "YawayTech Portal",
    desc: "A modern employee monitoring and attendance-tracking platform built with React + Tailwind and a Python backend, delivering real-time check-ins, productivity insights, and admin reporting.",
    tag: "Web App",
    link: "https://yawaytech-portal-frontend.onrender.com/",
  },
];

export default function Projects() {
  const delays = ["", "delay-200", "delay-400"]; // stagger like other sections

  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="animate-reveal-up">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          subtitle="A few highlights from recent full-stack work."
        />
      </div>

      <div className="container-grid grid gap-6 md:grid-cols-3">
        {list.map((p, i) => (
          <article
            key={p.id}
            className={`group relative glass rounded-2xl p-5
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

            <div className="text-xs mb-2 text-white/70">{p.tag}</div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-white/70">{p.desc}</p>

            <Button href={p.link} variant="ghost" className="mt-4 ring-glow">
              View project →
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
