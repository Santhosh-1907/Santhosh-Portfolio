import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-14 md:pt-20 pb-14">
      {/* Subtle grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-70" />

      {/* CTA card */}
      <div className="container-grid">
        <div className="relative my-8 md:my-12 animate-reveal-up">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 blur-[6px] opacity-70" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Let’s build a fast, beautiful website.
                </h3>
                <p className="mt-1 text-sm md:text-base text-white/70">
                  Modern UI, strong SEO, and smooth interactions—tailored to your brand.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold
                           bg-accent text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 animate-reveal-up delay-150">
        {/* Brand */}
        <div className="space-y-3">
          <div className="text-2xl font-extrabold tracking-tight">
            Santhosh<span className="text-accent">.</span>
          </div>
          <p className="text-sm text-white/70 max-w-xs">
            Crafting performant, responsive websites with thoughtful micro-interactions.
          </p>

          <div className="mt-3 flex items-center gap-3">
            <a href="mailto:santhosh@example.com" className="footer-icon" aria-label="Email">
              <Mail className="size-4" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub">
              <Github className="size-4" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-6">
          <nav className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-white/40">Site</div>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#reviews">Reviews</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </nav>
          <nav className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-white/40">Services</div>
            <FooterLink href="#services">Website Design</FooterLink>
            <FooterLink href="#services">Frontend Dev</FooterLink>
            <FooterLink href="#services">Design Systems</FooterLink>
            <FooterLink href="#services">SEO & Performance</FooterLink>
          </nav>
        </div>

        {/* Mini note */}
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-white/40">Now booking</div>
          <a href="#contact" className="inline-block text-sm link-underline">
            Check availability
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-grid mt-10 flex flex-col md:flex-row items-center justify-between gap-3 animate-reveal-up delay-200">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Santhosh. All rights reserved.</p>
        <p className="text-sm text-white/60">
          Made by <span className="font-semibold text-white">Santhosh</span>
          
          
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="group block text-sm text-white/70 hover:text-white transition-colors">
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white/70 transition-all group-hover:w-full" />
      </span>
    </a>
  );
}
