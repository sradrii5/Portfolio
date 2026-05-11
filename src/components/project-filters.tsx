import type { ProjectCategory } from "@/data/projects"
import { cn } from "@/lib/utils"

const labels: Record<ProjectCategory | "all", string> = {
  all: "Todos",
  web: "Web",
  bots: "Bots & Automatización",
  ia: "IA",
}

interface ProjectFiltersProps {
  selected: ProjectCategory | "all"
  onSelect: (category: ProjectCategory | "all") => void
}

export default function ProjectFilters({ selected, onSelect }: ProjectFiltersProps) {
  const categories: (ProjectCategory | "all")[] = ["all", "web", "bots", "ia"]

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "rounded-md border px-4 py-2 text-sm transition-colors",
            selected === cat
              ? "border-gold bg-gold text-black"
              : "border-border text-muted hover:border-gold hover:text-foreground"
          )}
        >
          {labels[cat]}
        </button>
      ))}
    </div>
  )
}
