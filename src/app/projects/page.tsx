"use client"

import { useState } from "react"
import type { ProjectCategory, Project } from "@/data/projects"
import { projects } from "@/data/projects"
import ProjectFilters from "@/components/project-filters"
import ProjectCard from "@/components/project-card"
import ProjectModal from "@/components/project-modal"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight">Casos de Estudio</h1>
        <p className="mt-2 text-muted">
          Sistemas reales resolviendo problemas reales. Haz clic en cualquier proyecto para ver todos los detalles.
        </p>
        <div className="mt-8">
          <ProjectFilters selected={filter} onSelect={setFilter} />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              priority={index < 2}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
