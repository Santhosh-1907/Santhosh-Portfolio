import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Reveal from "./components/Reveal";
import BackgroundRipples from "./components/BackgroundRipples";

export default function App() {
  return (
    <>
      <BackgroundRipples />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Wrap sections with Reveal to add entry animations */}
        <Reveal as="section"><Hero /></Reveal>
        <Reveal as="section" effect="up"  delay={100}><About /></Reveal>
        <Reveal as="section" effect="up"  delay={150}><Projects /></Reveal>
        <Reveal as="section" effect="up"  delay={200}><Reviews /></Reveal>
        <Reveal as="section" effect="up"  delay={250}><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
