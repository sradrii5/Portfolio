"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, ExternalLink, Code } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const categoryLabel: Record<string, string> = {
  web: "Desarrollo Web",
  ia: "Inteligencia Artificial",
  bots: "Automatización & Bots",
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            // Stop click from propagating to backdrop
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl shadow-black/50">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted backdrop-blur-sm transition-colors hover:border-gold hover:text-foreground"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Project image */}
              {project.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                {/* Category badge */}
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold">
                  {categoryLabel[project.category] ?? project.category}
                </span>

                {/* Title */}
                <h2 className="mt-3 text-2xl font-bold text-foreground">{project.title}</h2>

                {/* Full description */}
                <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>

                {/* Tech stack */}
                <div className="mt-6">
                  <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground/50">
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs font-medium text-gold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.links.github || project.links.live) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-black transition-all hover:opacity-90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver demo en vivo
                      </Link>
                    )}
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-gold hover:text-foreground"
                      >
                        <Code className="h-4 w-4" />
                        Ver código
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
