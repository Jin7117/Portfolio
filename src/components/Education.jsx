import { motion } from "framer-motion";
import { education } from "../data/profile.js";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-content px-6 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border rule-line bg-charcoal px-6 py-10 text-limestone sm:px-10"
      >
        <h2 className="font-display text-3xl">Education</h2>
        <p className="mt-2 text-limestone/60">The foundation everything else stands on.</p>

        <div className="mt-8 divide-y divide-limestone/15">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-display text-lg">{item.school}</p>
                {item.detail && (
                  <p className="text-sm text-limestone/65">{item.detail}</p>
                )}
              </div>
              <p className="text-sm text-bronze-light">{item.period}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
