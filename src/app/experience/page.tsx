import { experiences } from "@/data/experience"
import Timeline from "@/components/timeline"

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold tracking-tight">Experiencia</h1>
      <p className="mt-2 text-muted">Mi trayectoria profesional como desarrollador.</p>
      <div className="mt-12">
        <Timeline experiences={experiences} />
      </div>
    </section>
  )
}
