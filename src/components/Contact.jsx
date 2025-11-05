import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function Contact() {
  const [phone, setPhone] = useState("");

  // keep only digits in phone
  const handlePhone = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    setPhone(digits);
  };

  // recipient in international format (India: +91)
  const WA_PHONE = "917092704551";

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString().trim() || "";
    const email = fd.get("email")?.toString().trim() || "";
    const userPhone = (fd.get("phone")?.toString().trim() || "").replace(/\D/g, "");
    const subject = fd.get("subject")?.toString().trim() || "New enquiry";
    const message = fd.get("message")?.toString().trim() || "";

    // Build a neat multiline message
    const lines = [
      `*${subject}*`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      userPhone ? `Phone: ${userPhone}` : null,
      "",
      message || "—",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    // Works on both mobile & desktop
    const url = `https://wa.me/${WA_PHONE}?text=${text}`;

    // Open WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="animate-reveal-up">
        <SectionHeading eyebrow="Let’s work together" title="Contact" />
      </div>

      <div className="container-grid">
        <form
          className="group relative glass rounded-2xl p-6 grid md:grid-cols-2 gap-4 animate-reveal-up delay-200"
          onSubmit={handleSubmit}
        >
          {/* shine sweep on the card */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <div
              className="absolute top-0 -left-1/3 h-full w-1/3 skew-x-12
                         bg-gradient-to-r from-white/5 via-white/15 to-white/5
                         blur-[2px] opacity-0 group-hover:opacity-100
                         transition-opacity duration-300 animate-nav-shine"
            />
          </div>

          {/* Name — letters only */}
          <input
            name="name"
            placeholder="Your name"
            autoComplete="name"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:shadow-glow"
            required
            pattern="[A-Za-z][A-Za-z\s'.-]{1,}"
            title="Use letters, spaces, and . ' - only"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:shadow-glow"
            required
          />

          {/* Phone — digits only */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            inputMode="numeric"
            autoComplete="tel"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:shadow-glow"
            value={phone}
            onChange={handlePhone}
            pattern="\d{7,15}"
            title="Enter 7–15 digits"
          />

          {/* Subject */}
          <input
            name="subject"
            placeholder="Subject"
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:shadow-glow"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:shadow-glow"
            required
          />

          {/* Submit */}
          <div className="md:col-span-2 flex items-center gap-3">
            <Button as="button" type="submit" className="ring-glow">
              Send via WhatsApp
            </Button>
           
          </div>
        </form>
      </div>
    </section>
  );
}
