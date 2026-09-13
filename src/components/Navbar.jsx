import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-20 border-b rule-line bg-limestone/80 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          Abhi Dahiya
        </a>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-bronze/40 text-ink md:hidden"
        >
          <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
        <ul
          id="site-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-6 top-full flex-col gap-0 border-x border-b rule-line bg-limestone/95 text-sm text-ink/70 backdrop-blur-sm md:static md:flex md:flex-row md:gap-5 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative block border-b rule-line px-5 py-4 transition-colors hover:text-ink after:absolute after:bottom-3 after:left-5 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full md:border-0 md:px-0 md:py-0 md:after:bottom-[-0.25rem] md:after:left-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="block border-b rule-line px-5 py-4 text-bronze transition hover:text-ink md:border-0 md:px-0 md:py-0"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
