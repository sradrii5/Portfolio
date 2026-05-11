export interface Experience {
  role: string
  company: string
  period: string
  type: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    role: "Web Application Developer",
    company: "dBelectronics",
    period: "Actualidad",
    type: "Prácticas",
    points: [
      "Desarrollo de aplicaciones web internas",
      "Mantenimiento y mejora de plataformas existentes",
      "Colaboración en proyectos full-stack",
    ],
  },
]
