"use client"

import { useState } from "react"
import type { ProjectCategory } from "@/data/projects"
import { projects } from "@/data/projects"
import ProjectFilters from "@/components/project-filters"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
      <p className="mt-2 text-muted">
        Una selección de mi trabajo en desarrollo web, automatización e inteligencia
        artificial.
      </p>
      <div className="mt-8">
        <ProjectFilters selected={filter} onSelect={setFilter} />
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filtered.map((project, index) => (
          <ProjectCard key={project.title} project={project} priority={index < 2} />
        ))}
      </div>
    </section>
  )
}
