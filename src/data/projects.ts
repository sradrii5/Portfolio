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
      "Sistema de gestión operativa a medida para negocio de hostelería. Panel de control con Filament v3 para gestionar el catálogo de productos de forma dinámica, automatización del proceso de reservas y una vitrina digital que convierte visitas en clientes. Eficiencia operativa sin necesidad de intermediarios.",
    tech: ["PHP", "Laravel", "Filament v3", "HTML/CSS", "JavaScript"],
    image: "/projects/toscana.png",
    links: {
      live: "https://toscanapizzeria.es",
    },
  },
  {
    title: "BioHackerAge",
    category: "ia",
    description:
      "Motor autónomo de curación y generación de contenido experto. Un pipeline de datos con IA (Gemini & Groq) que procesa fuentes científicas de PubMed, genera activos de marketing (artículos, newsletters) y los distribuye de forma multicanal sin intervención humana. El sistema produce contenido experto para una audiencia global a escala industrial.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Groq AI", "Supabase", "Resend"],
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
      "Agente de procesamiento autónomo de información científica. Monitoriza en tiempo real la API de PubMed y feeds RSS, aplica modelos de lenguaje (LLaMA 3.3 vía Groq) para sintetizar y traducir contenido técnico complejo, y lo publica de forma bilingüe ES/EN de manera autónoma. Un trabajador digital que opera 24/7 sin coste operativo.",
    tech: ["TypeScript", "Groq AI", "PubMed API", "RSS", "Supabase"],
    image: "/projects/bot.png",
    links: {
      github: "https://github.com/sradrii5/BioHacking/tree/main/src/scripts/bot",
    },
  },
]
