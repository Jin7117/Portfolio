import { motion } from "framer-motion";
import { profile } from "../data/profile.js";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
        className="text-sm uppercase tracking-[0.2em] text-bronze"
      >
        {profile.name} · {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.55, ease: "easeOut" }}
        className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl"
      >
        {profile.tagline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
        className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.9 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-ink/60"
      >
        <span className="h-px w-10 bg-bronze/60" />
        <span>{profile.status}</span>
        <span className="h-px w-10 bg-bronze/60" />
      </motion.div>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <a href="#projects" className="border border-bronze bg-bronze px-5 py-3 text-sm text-paper transition hover:bg-transparent hover:text-bronze">Explore my work</a>
        <a href={profile.resume} download className="border rule-line bg-paper px-5 py-3 text-sm text-ink/80 transition hover:border-bronze hover:text-bronze">Download resume</a>
      </div>

      <div className="mt-8 flex gap-5 text-sm text-ink/60">
        <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-bronze">LinkedIn</a>
        <a href={profile.contact.github} className="transition hover:text-bronze">GitHub</a>
        <a href={`mailto:${profile.contact.email}`} className="transition hover:text-bronze">Email</a>
      </div>
    </section>
  );
}
