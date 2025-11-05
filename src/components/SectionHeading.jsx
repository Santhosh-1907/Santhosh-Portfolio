import React from "react";

export default function SectionHeading({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="container-grid mb-10">
      <div className="flex flex-col gap-2">
        {eyebrow && <span className="badge w-fit">{eyebrow}</span>}
        <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
        {subtitle && <p className="text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
