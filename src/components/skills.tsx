"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Supabase", category: "Database" },
  { name: "Groq / OpenAI", category: "AI" },
  { name: "Tailwind CSS", category: "Design" },
  { name: "Automation", category: "Specialty" },
]

export default function Skills() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight">Tecnologías & Skills</h2>
          <p className="mt-2 text-muted text-sm">Herramientas que utilizo para dar vida a los proyectos.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, borderColor: "var(--color-gold)" }}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-gold mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
