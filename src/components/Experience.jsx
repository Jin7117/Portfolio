import { motion } from "framer-motion";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-content px-6 py-28">
      <div className="border-t rule-line pt-10">
        <p className="text-sm uppercase tracking-[0.2em] text-bronze">04 / Work and practice</p>
        <h2 className="mt-2 font-display text-3xl text-ink">Experience</h2>
        <p className="mt-3 text-ink/60">
          Each role as a floor of the building — newest at the top.
        </p>

        <div className="mt-10 flex flex-col">
          {/* experience data is ordered newest-first, so rendering top-to-bottom
              naturally puts the newest role at the top floor of the stack */}
          {experience.map((role, i) => (
            <motion.article
              key={role.floor}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="group relative border-x border-t rule-line bg-paper px-6 py-6 transition-shadow duration-300 last:border-b hover:shadow-[0_10px_24px_-16px_rgba(35,34,32,0.35)] sm:px-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <h3 className="font-display text-xl text-ink">{role.org}</h3>
                <span className="font-display text-2xl text-bronze/70">
                  {role.floor}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-verdigris">{role.role}</p>
              <p className="mt-1 text-sm text-ink/55">
                {role.period} · {role.place}
              </p>
              <p className="mt-4 max-w-content text-[0.98rem] leading-relaxed text-ink/75">
                {role.description}
              </p>
              {role.focus && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.focus.map((item) => <span key={item} className="text-xs text-verdigris">{item}</span>)}
                </div>
              )}
              {role.org.includes("Institute") && (
                <p className="mt-5 border-l-2 border-bronze pl-3 text-sm font-medium text-bronze">Selected for further counselling & mentorship</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
