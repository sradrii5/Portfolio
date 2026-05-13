"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, CalendarClock } from "lucide-react"

const services = [
  {
    id: "agent",
    tier: "Starter",
    name: "Agente de Atención Inteligente",
    tagline: "Tu negocio responde y agenda 24/7",
    description:
      "Un bot entrenado con la información de tu negocio que responde dudas frecuentes, califica el interés del visitante y agenda citas automáticamente. Despliega en WhatsApp, tu web o ambos.",
    price: "desde 1.500€",
    recurring: "+ 200€/mes mantenimiento",
    includes: [
      "Entrenamiento con tus datos (FAQs, servicios, precios)",
      "Integración Web o WhatsApp Business",
      "Panel de control de conversaciones",
      "Alertas de leads cualificados por email",
      "1 mes de soporte incluido",
    ],
    ideal: "Clínicas, academias, inmobiliarias, restaurantes",
    highlighted: false,
  },
  {
    id: "leads",
    tier: "Growth",
    name: "Pipeline de Captación de Leads",
    tagline: "Solo hablas con quien quiere comprarte",
    description:
      "Sistema completo de captación, calificación y nurturing automático. Cada lead que entra es analizado, puntuado y enrutado al canal correcto: CRM, email o notificación directa a tu equipo de ventas.",
    price: "desde 2.500€",
    recurring: "+ 300€/mes mantenimiento",
    includes: [
      "Formularios y landing pages de alta conversión",
      "Scoring automático de leads con IA",
      "Integración con tu CRM (o configuramos uno)",
      "Secuencias de email automatizadas",
      "Dashboard de métricas en tiempo real",
      "2 meses de soporte incluidos",
    ],
    ideal: "Agencias inmobiliarias, formación online, consultoría",
    highlighted: true,
  },
  {
    id: "content",
    tier: "Authority",
    name: "Motor Autónomo de Contenidos",
    tagline: "Presencia digital constante sin dedicar horas",
    description:
      "Un sistema que monitoriza fuentes de datos de tu sector, genera contenido experto adaptado a tu marca y lo publica automáticamente en tu blog, redes sociales o newsletter. Sin redactores, sin briefings.",
    price: "desde 3.000€",
    recurring: "+ 400€/mes mantenimiento",
    includes: [
      "Configuración del pipeline de fuentes de datos",
      "Generación de contenido con IA ajustada a tu voz",
      "Publicación automática multicanal",
      "Newsletter automatizada mensual o semanal",
      "Informe mensual de rendimiento de contenidos",
      "3 meses de soporte incluidos",
    ],
    ideal: "E-commerce, medios digitales, marcas personales, SaaS",
    highlighted: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Servicios
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Sistemas que generan valor{" "}
          <span className="text-gold">de forma continua</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
          No vendo horas de desarrollo. Construyo activos digitales que trabajan por tu negocio
          todos los días, a cualquier hora, sin intervención humana.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              service.highlighted
                ? "border-gold/50 bg-gold/5 shadow-xl shadow-gold/10"
                : "border-border bg-card/50"
            }`}
          >
            {service.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-gold px-4 py-1 text-xs font-bold text-black">
                  Más solicitado
                </span>
              </div>
            )}

            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                {service.tier}
              </span>
              <h2 className={`mt-2 text-xl font-bold ${service.highlighted ? "text-gold" : "text-foreground"}`}>
                {service.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-muted">{service.tagline}</p>
            </div>

            <div className="my-6 border-t border-border" />

            <p className="text-sm leading-relaxed text-muted">{service.description}</p>

            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-background/50 p-4">
              <p className="text-xs text-muted/60 uppercase tracking-wider">Ideal para</p>
              <p className="mt-1 text-sm font-medium text-foreground">{service.ideal}</p>
            </div>

            <div className="mt-auto pt-8">
              <p className="text-2xl font-bold text-foreground">{service.price}</p>
              <p className="text-xs text-muted">{service.recurring}</p>
              <Link
                href="/contact"
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all ${
                  service.highlighted
                    ? "bg-gold text-black hover:opacity-90"
                    : "border border-border text-foreground hover:border-gold hover:bg-gold/5"
                }`}
              >
                Solicitar auditoría gratuita
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-2xl border border-gold/20 bg-gold/5 p-10 text-center"
      >
        <CalendarClock className="mx-auto h-8 w-8 text-gold" />
        <h3 className="mt-4 text-2xl font-bold">¿No sabes por dónde empezar?</h3>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          Reserva una sesión gratuita de 30 minutos. Analizamos juntos tus procesos actuales,
          identificamos los 2-3 cuellos de botella más costosos y te propongo un plan de acción concreto.
          Sin compromiso, sin jerga técnica.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-bold text-black transition-all hover:opacity-90"
        >
          Reservar auditoría gratuita
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
}
