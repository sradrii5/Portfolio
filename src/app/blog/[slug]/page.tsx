import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog"
import Link from "next/link"
import { ArrowLeft, Clock, Tag, CalendarClock, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

// Simple markdown-ish renderer: bold, lists, links
function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    // Bold headings: **text**
    const parseInline = (text: string) =>
      text.split(/(\*\*[^*]+\*\*)/).map((chunk, j) => {
        if (chunk.startsWith("**") && chunk.endsWith("**")) {
          return <strong key={j} className="font-bold text-foreground">{chunk.slice(2, -2)}</strong>
        }
        // Inline link [text](href)
        const linkMatch = chunk.match(/\[([^\]]+)\]\(([^)]+)\)/)
        if (linkMatch) {
          return (
            <Link key={j} href={linkMatch[2]} className="font-medium text-gold underline underline-offset-2 hover:opacity-80">
              {linkMatch[1]}
            </Link>
          )
        }
        return chunk
      })

    // Numbered list
    if (/^\d+\./.test(block.trim())) {
      const items = block.split("\n").filter(Boolean)
      return (
        <ol key={i} className="mt-4 list-decimal list-inside space-y-2 text-muted text-base leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{parseInline(item.replace(/^\d+\.\s*/, ""))}</li>
          ))}
        </ol>
      )
    }

    // Bullet list
    if (block.trim().startsWith("-")) {
      const items = block.split("\n").filter((l) => l.trim().startsWith("-"))
      return (
        <ul key={i} className="mt-4 list-disc list-inside space-y-2 text-muted text-base leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{parseInline(item.replace(/^-\s*/, ""))}</li>
          ))}
        </ul>
      )
    }

    // Bold heading paragraph
    if (block.trim().startsWith("**") && block.trim().endsWith("**")) {
      return (
        <h2 key={i} className="mt-8 text-xl font-bold text-foreground">
          {block.trim().slice(2, -2)}
        </h2>
      )
    }

    // Regular paragraph
    return (
      <p key={i} className="mt-5 text-base leading-relaxed text-muted">
        {parseInline(block)}
      </p>
    )
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <div className="mx-auto max-w-2xl px-6 pt-32 pb-24">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al blog
      </Link>

      {/* Meta */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
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

      <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight">{post.title}</h1>
      <p className="mt-3 text-lg text-muted">{post.excerpt}</p>

      <div className="my-8 border-t border-border" />

      {/* Content */}
      <article>{renderContent(post.content)}</article>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
        <CalendarClock className="mx-auto h-7 w-7 text-gold" />
        <h2 className="mt-3 text-xl font-bold">¿Lo aplico a tu negocio?</h2>
        <p className="mt-2 text-sm text-muted">
          Reserva 30 minutos gratuitos. Analizamos tus procesos y te digo qué se puede automatizar y cuánto tiempo recuperarías.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-black transition-all hover:opacity-90"
        >
          Reservar auditoría gratuita
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
