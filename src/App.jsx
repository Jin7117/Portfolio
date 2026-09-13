import { useEffect, useState } from "react";
import Pillars from "./components/Pillars.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {
  BeyondCode,
  Journey,
  Learning,
  PersonalSections,
  Projects,
  ResearchAndAchievements,
  Skills,
} from "./components/PortfolioSections.jsx";

function ThemeToggle({ dark }) {
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => {
        const nextTheme = !dark;
        document.documentElement.classList.toggle("dark", nextTheme);
        localStorage.setItem("theme", nextTheme ? "dark" : "light");
        window.dispatchEvent(new CustomEvent("themechange", { detail: { dark: nextTheme } }));
      }}
      className="fixed bottom-5 left-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-bronze/50 bg-paper/90 text-ink shadow-lg backdrop-blur-sm transition hover:border-bronze hover:bg-paper dark:border-bronze-light/50 dark:bg-charcoal/90 dark:text-limestone dark:hover:bg-charcoal"
    >
      <span aria-hidden="true" className="text-lg">{dark ? "☼" : "☾"}</span>
    </button>
  );
}

export default function App() {
  const [themeTransition, setThemeTransition] = useState(null);
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    const syncTheme = (event) => {
      const nextDark = event.detail.dark;
      setDark(nextDark);
      setThemeTransition(nextDark);
    };
    window.addEventListener("themechange", syncTheme);
    return () => window.removeEventListener("themechange", syncTheme);
  }, [dark]);

  useEffect(() => {
    if (themeTransition === null) return undefined;

    const timeout = window.setTimeout(() => setThemeTransition(null), 700);
    return () => window.clearTimeout(timeout);
  }, [themeTransition]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Pillars />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Journey />
        <Skills />
        <Learning />
        <ResearchAndAchievements />
        <BeyondCode />
        <PersonalSections />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle dark={dark} />
      {themeTransition !== null && (
        <div
          aria-hidden="true"
          className={`theme-transition ${themeTransition ? "theme-transition-dark" : "theme-transition-light"}`}
        />
      )}
    </div>
  );
}
