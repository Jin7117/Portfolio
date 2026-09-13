import { motion } from "framer-motion";
import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-content px-6 pb-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t rule-line pt-14"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-bronze">13 / Contact</p>
        <h2 className="mt-2 font-display text-3xl text-ink">Let's build something interesting.</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          Have an interesting idea, project, research topic, or technology you'd like to discuss? I'm always open to conversations around AI, software, engineering, science, and new ideas.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 text-ink/80 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${profile.contact.email}`}
            className="underline decoration-bronze/50 decoration-2 underline-offset-4 transition-colors hover:text-bronze"
          >
            {profile.contact.email}
          </a>
          <a
            href={`tel:${profile.contact.phone}`}
            className="underline decoration-bronze/50 decoration-2 underline-offset-4 transition-colors hover:text-bronze"
          >
            {profile.contact.phone}
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-bronze/50 decoration-2 underline-offset-4 transition-colors hover:text-bronze"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            className="underline decoration-bronze/50 decoration-2 underline-offset-4 transition-colors hover:text-bronze"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
