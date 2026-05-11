"use client"

import type { Project } from "@/data/projects"
import { ExternalLink, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  priority?: boolean
}

export default function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/5"
    >
      {project.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-[10px] font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-gold">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-auto pt-6 flex items-center gap-4">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
            >
              <Code className="h-4 w-4" />
              Código
            </Link>
          )}
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-gold"
            >
              <ExternalLink className="h-4 w-4" />
              Demo en vivo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
