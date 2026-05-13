"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { blogPosts } from "@/data/blog"
import { ArrowRight, Clock, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Casos de uso
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          El coste real de{" "}
          <span className="text-gold">no automatizar</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Análisis concretos de cuánto tiempo y dinero pierde cada sector haciendo manualmente
          lo que un sistema puede hacer solo. Sin jerga técnica, solo números reales.
        </p>
      </motion.div>

      <div className="mt-12 space-y-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-8 transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 sm:flex-row sm:items-start"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold">
                    <Tag className="h-2.5 w-2.5" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock className="h-3 w-3" />
                    {post.readTime} lectura
                  </span>
                  <span className="text-xs text-muted/50">
                    {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
              <div className="flex shrink-0 items-center self-end sm:self-center">
                <span className="flex items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-gold">
                  Leer
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
