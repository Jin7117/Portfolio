import { motion } from "framer-motion";
import {
  achievements,
  interests,
  journey,
  learning,
  projects,
  skillGroups,
} from "../data/profile.js";

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="border-t rule-line pt-10">
      {eyebrow && <p className="text-sm uppercase tracking-[0.2em] text-bronze">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">{children}</p>}
    </div>
  );
}

function TagList({ items, muted = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`border px-3 py-1.5 text-xs ${muted ? "border-limestone/20 text-limestone/70" : "rule-line bg-paper text-ink/70"}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="03 / What I build" title="Projects with a pulse">
        I like projects that are part experiment, part tool, and part question. These are the ideas I am actively shaping.
      </SectionHeading>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="flex min-h-[27rem] flex-col border border-bronze/25 bg-paper p-6 transition-colors hover:border-bronze/70 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-display text-4xl text-bronze/60">{project.number}</p>
              <span className="border border-verdigris/40 px-3 py-1 text-xs uppercase tracking-wider text-verdigris">{project.status}</span>
            </div>
            <h3 className="mt-8 font-display text-3xl text-ink">{project.name}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.14em] text-bronze">{project.type}</p>
            <p className="mt-5 leading-relaxed text-ink/75">{project.description}</p>
            <div className="mt-auto space-y-5 pt-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-ink/50">Exploring</p>
                <TagList items={project.tags} />
              </div>
              {project.technologies.length > 0 && (
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-ink/50">Technologies</p>
                  <TagList items={project.technologies} />
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="05 / The story" title="The journey so far" />
      <div className="mt-12 border-l border-bronze/40">
        {journey.map(([year, title, description], index) => (
          <motion.article
            key={`${year}-${title}`}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="relative grid gap-3 pb-10 pl-8 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8"
          >
            <span className="absolute -left-[0.35rem] top-1 h-2.5 w-2.5 rounded-full bg-bronze" />
            <p className="font-display text-2xl text-bronze">{year}</p>
            <div>
              <h3 className="font-display text-2xl text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="06 / The toolkit" title="Technical skills" />
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(([group, skills]) => (
          <div key={group}>
            <h3 className="font-display text-xl text-ink">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => <span key={skill} className="text-sm text-ink/65">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Learning() {
  return (
    <section id="learning" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="07 / In progress" title="Currently in the lab">
        I'm constantly experimenting with new technologies and strengthening my fundamentals.
      </SectionHeading>
      <div className="mt-12 grid gap-px border border-verdigris/30 bg-verdigris/30 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map(([title, description], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="bg-paper p-6"
          >
            <span className="text-sm text-verdigris">0{index + 1}</span>
            <h3 className="mt-8 font-display text-2xl text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ResearchAndAchievements() {
  return (
    <section id="research" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="08 / Curiosity in practice" title="Curiosity → Research → Prototype → Presentation">
        My early experiences with engineering introduced me to a process I continue to enjoy: starting with a question, researching the problem, developing an idea, and communicating the result.
      </SectionHeading>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-bronze/40 bg-charcoal p-7 text-limestone sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-bronze-light">Featured experience</p>
          <h3 className="mt-5 font-display text-3xl">IIT Delhi Innovation Initiative</h3>
          <p className="mt-4 leading-relaxed text-limestone/70">An original engineering idea, developed through research and presented to a panel of experts, was selected for further counselling and mentorship.</p>
          <div className="mt-7"><TagList items={["Engineering", "Research", "Innovation", "Presentation"]} muted /></div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-bronze">Achievements</p>
          <div className="mt-5 divide-y rule-line">
            {achievements.map(([title, description]) => (
              <div key={title} className="py-5 first:pt-0">
                <h3 className="font-display text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BeyondCode() {
  return (
    <section id="beyond" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="09 / Beyond code" title="Beyond the screen">
        Technology is only one part of what I'm curious about.
      </SectionHeading>
      <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map(([title, description]) => (
          <div key={title} className="border-t rule-line pt-4">
            <h3 className="font-display text-xl text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PersonalSections() {
  return (
    <>
      <section id="philosophy" className="relative mx-auto max-w-5xl px-6 pb-16 pt-28">
        <div className="border-y border-bronze/40 py-12 text-center sm:py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-bronze">10 / Philosophy</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">Understand it. Break it. Build it. Improve it.</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">I learn best by turning ideas into experiments. Instead of stopping at understanding how something works, I try to build a smaller version of it, break it, figure out why it failed, and improve it.</p>
        </div>
      </section>
      <section id="direction" className="relative mx-auto max-w-5xl px-6 pb-28 pt-0">
        <SectionHeading eyebrow="11 / Future direction" title="Where I'm heading">
          I'm currently building my foundation in Computer Science while exploring Artificial Intelligence, software engineering, and emerging technologies. In the long term, I want to work on ambitious technology that combines software, intelligence, and real-world systems.
        </SectionHeading>
      </section>
      <section id="lab" className="relative mx-auto max-w-5xl px-6 py-28">
        <SectionHeading eyebrow="12 / The digital lab" title="A place for unfinished ideas" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[["Experiments", "Small technical experiments and prototypes."], ["Ideas", "Interesting concepts that aren't projects yet."], ["Research", "Things I'm currently investigating."], ["Build Logs", "What I'm building and what went wrong."], ["Learning", "Technical concepts I've recently understood."]].map(([title, description]) => (
            <div key={title} className="border rule-line p-5">
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
