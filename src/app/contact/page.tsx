import { Code, Globe, Mail, CalendarClock } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight">Hablemos de tu negocio</h1>
      <p className="mt-3 text-muted">
        Cuéntame qué procesos te quitan más tiempo o cuáles crees que podrían automatizarse.
        Sin compromiso: la primera sesión es gratuita y sin jerga técnica.
      </p>

      {/* Free audit highlight */}
      <div className="mt-6 flex items-start gap-4 rounded-xl border border-gold/20 bg-gold/5 p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15">
          <CalendarClock className="h-5 w-5 text-gold" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Auditoría de Procesos Gratuita — 30 min</p>
          <p className="mt-1 text-sm text-muted">
            Analizamos juntos los 2-3 procesos más costosos de tu operativa diaria y te propongo
            qué se puede automatizar, cómo funcionaría y cuánto tiempo recuperarías. Sin coste.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <ContactForm />
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">Encuéntrame en</h2>
            <div className="mt-4 space-y-4">
              <Link
                href="https://github.com/sradrii5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <Code className="h-5 w-5" />
                github.com/sradrii5
              </Link>
              <Link
                href="https://www.linkedin.com/in/adri%C3%A1n-castro-meneses-b95a19214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <Globe className="h-5 w-5" />
                Adrián Castro Meneses
              </Link>
              <Link
                href="mailto:adrianmelupy@gmail.com"
                className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                adrianmelupy@gmail.com
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-5">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Tiempo de respuesta
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              Respondo en menos de 24h
            </p>
            <p className="mt-1 text-xs text-muted">
              Normalmente mucho antes. Si el asunto es urgente, indícalo en el mensaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
