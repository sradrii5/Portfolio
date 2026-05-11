"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Send, Loader2 } from "lucide-react"
import { sendEmail } from "@/app/actions"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setStatus("loading")
    setErrorMessage("")

    const result = await sendEmail(formData)

    if (result.error) {
      setErrorMessage(result.error)
      setStatus("error")
    } else {
      setStatus("success")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-gold/20 bg-card p-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <CheckCircle2 className="h-8 w-8 text-gold" />
        </div>
        <h2 className="text-2xl font-bold">¡Mensaje enviado!</h2>
        <p className="text-muted">
          Gracias por contactar. Te responderé lo antes posible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-gold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      action={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={status === "loading"}
          className="block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-50"
          placeholder="Tu nombre"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={status === "loading"}
          className="block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-50"
          placeholder="tu@email.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === "loading"}
          className="block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-50"
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-500"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gold px-6 py-3 text-sm font-bold text-black transition-all hover:bg-gold/90 disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <span>Enviar mensaje</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
    </motion.form>
  )
}
