import { Code, Globe, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
      <p className="mt-2 text-muted">
        Estoy abierto a oportunidades, colaboraciones y nuevos proyectos.
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Encuéntrame en</h2>
          <div className="space-y-4">
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
      </div>
    </section>
  )
}
