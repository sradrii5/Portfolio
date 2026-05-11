import type { Experience } from "@/data/experience"

interface TimelineProps {
  experiences: Experience[]
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-border" />
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-12">
            <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-background" />
            <span className="inline-block rounded-full border border-gold px-3 py-1 text-xs text-gold">
              {exp.type}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm text-gold">
              {exp.company} &middot; {exp.period}
            </p>
            <ul className="mt-3 space-y-1">
              {exp.points.map((point, j) => (
                <li key={j} className="text-sm text-muted">
                  &mdash; {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
