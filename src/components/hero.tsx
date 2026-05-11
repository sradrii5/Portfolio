"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Web Developer &<br />
          <span className="text-gold">Automation Engineer</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          Construyo aplicaciones web y sistemas automatizados con inteligencia artificial.
          Combino desarrollo web con bots e IA para crear soluciones eficientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-md bg-gold px-8 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:opacity-90 active:scale-95"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:bg-gold/5 active:scale-95"
          >
            Contactar
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
