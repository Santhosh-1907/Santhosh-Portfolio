import React from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";


const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="link-underline text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  React.useEffect(() => {
    // lock scroll when mobile menu open
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 animate-reveal-down">
      <div className="container-grid">
        <nav className="relative mt-4 mb-3 flex items-center justify-between rounded-2xl glass px-3 py-2">
          {/* SHINE overlay (subtle) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div
              className="absolute top-0 -left-1/3 h-full w-1/3 skew-x-12
                         bg-gradient-to-r from-white/5 via-white/15 to-white/5
                         blur-[2px] animate-nav-shine"
            />
          </div>

          {/* Brand */}
          <a href="#home" className="relative z-10 flex items-center gap-2 px-2">
            
            <span className="text-sm font-semibold text-white/90">Santhosh</span>
          </a>

          {/* Desktop links */}
          <div className="relative z-10 hidden items-center md:flex">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Right actions */}
          <div className="relative z-10 flex items-center gap-2">
            <a href="mailto:santhoshabi683@gmail.com" className="p-2 rounded-xl hover:bg-white/10" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/Santhosh-1907" target="_blank" className="p-2 rounded-xl hover:bg-white/10" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/santhosh-kumar-selvamani-ba8b72214" target="_blank" className="p-2 rounded-xl hover:bg-white/10" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>

            {/* Contact button (md+) */}
            <a href="#contact" className="ml-1 hidden sm:inline-flex btn-primary">Contact</a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/10"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* thin gradient underline to separate header */}
        <div className="nav-gradient-underline rounded-full" />

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mt-2 rounded-2xl glass p-2">
            <div className="flex flex-col">
              <NavLink href="#home" onClick={close}>Home</NavLink>
              <NavLink href="#services" onClick={close}>Services</NavLink>
              <NavLink href="#projects" onClick={close}>My Projects</NavLink>
              <NavLink href="#reviews" onClick={close}>Reviews</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>

              {/* Contact CTA for mobile */}
              <a
                href="#contact"
                onClick={close}
                className="mt-1 inline-flex w-full justify-center btn-primary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
