import { motion } from "framer-motion";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-content px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border-t rule-line pt-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-bronze">02 / Who I am</p>
        <h2 className="mt-2 font-display text-3xl text-ink">A little about me</h2>

        <ul className="mt-6 space-y-3 text-[1.05rem] leading-relaxed text-ink/80">
          {profile.summary.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex gap-3"
            >
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-verdigris" />
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 grid gap-4 border-t rule-line pt-6 sm:grid-cols-2">
          {profile.facts.map(([label, value]) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-[0.16em] text-bronze">{label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
