import React from "react";
import Button from "./Button";
import avatar from "../assets/avatar.png";
// Hero.jsx
import {
  ArrowRight,
  Download,
  Dribbble,   // <-- use this
  Github,
  Linkedin,
  Mail,
} from "lucide-react";


export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* purple background beams */}
      <div className="absolute inset-0 bg-hero-radial" />
      {/* fade to page bg (bottom vignette) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper" />

      <div className="container-grid relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        {/* LEFT */}
        <div className="max-w-xl">
         

         <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
  <span className="flex flex-wrap items-baseline gap-2">
    <span>Hi, I’m</span>
    <span className="animate-typing pr-1 align-baseline">Santhosh</span>
  </span>

  <span className="block h-2" aria-hidden />
  <span className="bg-gradient-to-r from-accent via-accent2 to-accent
                   bg-clip-text text-transparent animate-gradient">
    Full Stack Developer
  </span>
</h1>



          <p className="mt-4 text-white/80">
  Full-stack developer specializing in React, Node, and cloud.
  I architect APIs, model data, and deliver accessible, responsive interfaces that scale.
</p>


          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              My Projects <ArrowRight size={16} />
            </Button>
            <Button href="/Santhosh-CV.pdf" variant="ghost">
              Download CV <Download size={16} />
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-2 text-white/70">
            <span className="text-sm">Find me on</span>
            <a className="p-2 rounded-xl hover:bg-white/10" href="mailto:santhoshabi683@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a className="p-2 rounded-xl hover:bg-white/10" href="https://github.com/Santhosh-1907" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="p-2 rounded-xl hover:bg-white/10" href="https://www.linkedin.com/in/santhosh-kumar-selvamani-ba8b72214" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

       {/* RIGHT – avatar card */}
<div className="relative">
  {/* glowing rotated frame behind */}
  <div className="absolute -inset-6 -z-10 rotate-6 rounded-[40px] bg-gradient-to-br from-accent/40 to-accent2/30 blur-xl" />

  <div className="glass rounded-[32px] p-6">
    {/* The visual frame that clips the image */}
    <div className="relative max-w-sm w-full aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
      <img
        src={avatar}
        alt="Portrait"
        className="absolute inset-0 h-full w-full object-cover"  // <— fills the box
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
