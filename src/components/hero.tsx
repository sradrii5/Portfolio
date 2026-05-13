"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold"
        >
          <Zap className="h-3 w-3" />
          Arquitecto de Soluciones · Integrador de IA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Tus procesos manuales{" "}
          <span className="text-gold">convertidos en sistemas automáticos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          Analizo los cuellos de botella de tu negocio y los elimino con código e Inteligencia Artificial.
          Construyo sistemas que trabajan por ti: capturan leads, generan contenido y gestionan operaciones
          sin intervención humana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 hover:opacity-90 active:scale-95"
          >
            Analicemos tu proceso
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:bg-gold/5 active:scale-95"
          >
            Ver casos de estudio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
