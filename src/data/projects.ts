export type ProjectCategory = "web" | "bots" | "ia"

export interface Project {
  title: string
  category: ProjectCategory
  description: string
  tech: string[]
  image?: string
  links: {
    github?: string
    live?: string
  }
}

export const projects: Project[] = [
  {
    title: "Toscanapizzeria.es",
    category: "web",
    description:
      "Web corporativa para restaurante italiano con carta interactiva, menú completo, integración WhatsApp y diseño responsive.",
    tech: ["PHP", "HTML/CSS", "JavaScript", "Apache"],
    image: "/projects/toscana.png",
    links: {
      live: "https://toscanapizzeria.es",
    },
  },
  {
    title: "BioHacking",
    category: "ia",
    description:
      "Plataforma de divulgación sobre biohacking y longevidad con generación de contenido automatizada mediante IA.",
    tech: ["Next.js", "TypeScript", "Groq AI", "Supabase", "Tailwind CSS"],
    image: "/projects/biohacking.png",
    links: {
      github: "https://github.com/sradrii5/BioHacking",
      live: "https://biohackerage.com",
    },
  },
  {
    title: "BioHacking Bot",
    category: "bots",
    description:
      "Bot automatizado que busca artículos científicos (PubMed) y noticias, los procesa con IA (Groq LLaMA 3.3) y publica contenido bilingüe ES/EN en Supabase.",
    tech: ["TypeScript", "Groq AI", "PubMed API", "RSS", "Supabase"],
    image: "/projects/bot.png",
    links: {
      github: "https://github.com/sradrii5/BioHacking/tree/main/src/scripts/bot",
    },
  },
]
