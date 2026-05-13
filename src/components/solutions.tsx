"use client"

import { motion } from "framer-motion"
import { Bot, Filter, Newspaper } from "lucide-react"

const solutions = [
  {
    icon: Bot,
    title: "Agentes de Atención Inteligente",
    description:
      "Bots entrenados con tus datos propios que resuelven dudas frecuentes, califican el interés del visitante y agendan citas automáticamente. Tu negocio atiende y convierte las 24 horas del día, 7 días a la semana, sin que nadie tenga que estar detrás.",
    highlight: "24/7 sin intervención humana",
  },
  {
    icon: Filter,
    title: "Calificación y Optimización de Leads",
    description:
      "Filtros inteligentes que analizan el comportamiento y las respuestas de cada contacto para separar a los curiosos de los compradores reales. Tu equipo de ventas solo habla con personas listas para cerrar, multiplicando su eficiencia.",
    highlight: "Más cierres, menos tiempo perdido",
  },
  {
    icon: Newspaper,
    title: "Automatización de Contenidos",
    description:
      "Sistemas autónomos que monitorizan fuentes de datos, noticias o tendencias de tu sector y los transforman automáticamente en artículos, posts para redes sociales y newsletters. Presencia digital constante sin dedicar horas a crear contenido.",
    highlight: "Contenido experto a escala industrial",
  },
]

export default function Solutions() {
  return (
    <section className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            Lo que construyo
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Sistemas que trabajan por ti
          </h2>
          <p className="mt-3 text-muted">
            No vendo horas de desarrollo. Construyo activos digitales que generan valor de forma continua.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-gold/40"
            >
              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gold/0 transition-all duration-500 group-hover:bg-gold/[0.03]" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                <solution.icon className="h-5 w-5 text-gold" />
              </div>

              <h3 className="mb-3 text-lg font-bold">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{solution.description}</p>

              <div className="mt-6 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                {solution.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
