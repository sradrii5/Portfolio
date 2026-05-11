"use client"

import type { FormEvent } from "react"

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")
    window.location.href = `mailto:hello@adriancastro.dev?subject=Contacto desde portfolio - ${name}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-gold focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-gold focus:outline-none"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-gold focus:outline-none"
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
      >
        Enviar mensaje
      </button>
    </form>
  )
}
