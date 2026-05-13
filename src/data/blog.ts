export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "coste-real-gestion-manual-reservas",
    title: "El coste real de gestionar reservas por WhatsApp en un restaurante",
    excerpt:
      "Calculamos cuánto tiempo y dinero pierde realmente un restaurante respondiendo mensajes manualmente. Las cifras sorprenden.",
    category: "Hostelería",
    readTime: "4 min",
    date: "2025-05-10",
    content: `
La mayoría de propietarios de restaurantes subestiman el tiempo que dedican sus empleados a gestionar reservas por WhatsApp o teléfono. Hicimos el cálculo con un restaurante de 60 cubiertos y el resultado fue revelador.

**El problema en números**

Un restaurante medio recibe entre 15 y 25 consultas de reserva al día, entre WhatsApp, teléfono e Instagram. Cada conversación requiere, de media, 4-6 minutos de atención: confirmar disponibilidad, tomar datos, enviar recordatorio y, a veces, gestionar cancelaciones de última hora.

Eso son entre **60 y 150 minutos diarios** de trabajo reactivo que interrumpe constantemente al equipo durante el servicio.

A un coste de 12€/h de camarero, hablamos de entre **360€ y 900€ al mes** en tiempo dedicado exclusivamente a responder mensajes. Dinero invisible porque nadie lo contabiliza como un gasto, pero está ahí.

**Lo que un sistema automatizado cambia**

Un agente de IA entrenado con el horario, disponibilidad y política del restaurante puede:
- Responder al instante en WhatsApp o la web, a cualquier hora
- Confirmar o proponer alternativas de forma autónoma
- Enviar recordatorios automáticos (que reducen los no-shows un 30-40%)
- Registrar cada reserva en un panel centralizado

El sistema no duerme, no se equivoca al anotar un nombre y nunca está en el medio de servir una mesa cuando llega un mensaje.

**¿Vale la pena la inversión?**

Un sistema de este tipo tiene un coste de setup de aproximadamente 1.500€ y un mantenimiento mensual de 200€. Con el ahorro en tiempo recuperado, el break-even se alcanza en 2-3 meses para un restaurante con actividad media.

El resto es beneficio puro: más tiempo del equipo para lo que importa, mejor experiencia del cliente y cero reservas perdidas por no contestar a tiempo.

Si tienes un restaurante y quieres ver cómo funcionaría esto en tu caso concreto, puedes [solicitar una sesión gratuita de análisis aquí](/contact).
    `.trim(),
  },
  {
    slug: "inmobiliaria-leads-con-ia",
    title: "Cómo una inmobiliaria puede generar 20 fichas de pisos al mes sin contratar a nadie",
    excerpt:
      "Un pipeline de IA puede tomar un anuncio de portal, enriquecerlo con contexto de zona, generarle una descripción atractiva y publicarlo en múltiples canales. Automáticamente.",
    category: "Inmobiliario",
    readTime: "5 min",
    date: "2025-05-06",
    content: `
El trabajo más repetitivo de una agencia inmobiliaria no es cerrar ventas. Es redactar fichas de pisos, publicarlas en 4 portales diferentes y actualizarlas cuando cambia el precio o el estado. 

**El ciclo de trabajo actual**

Para cada inmueble nuevo, un agente dedica entre 45 y 90 minutos a: fotografiar o revisar fotos, redactar la descripción, adaptar el texto para cada portal (Idealista, Fotocasa, Habitaclia...), publicarlo manualmente y hacer seguimiento de los leads que entran.

Con 20 nuevos pisos al mes, estamos hablando de entre **15 y 30 horas mensuales** de trabajo puramente administrativo que cualquier agente preferiría dedicar a atender clientes.

**El sistema automatizado**

Un pipeline con IA puede hacer lo siguiente en menos de 5 minutos por inmueble:
1. Tomar los datos básicos del inmueble (metráje, habitaciones, ubicación, precio)
2. Consultar datos de la zona (precio medio por m², servicios cercanos, transporte)
3. Generar una descripción atractiva y optimizada para SEO
4. Adaptar el formato para cada portal
5. Publicar automáticamente mediante las APIs disponibles
6. Crear una ficha en el CRM con el inmueble activo

El agente solo revisa y aprueba. En la mayoría de casos, en menos de 2 minutos.

**El impacto en números**

Si recuperas 20 horas al mes por agente, y tienes 3 agentes, son 60 horas que ahora pueden dedicarse a visitas, negociaciones y cierre de operaciones. Con una comisión media de 3.000€ por venta, ¿cuántas operaciones adicionales pueden cerrar en esas 60 horas?

Si quieres ver cómo se implementaría esto en tu agencia, [agenda una sesión gratuita](/contact) y lo analizamos juntos.
    `.trim(),
  },
  {
    slug: "contenido-automatizado-sector-salud",
    title: "Por qué las clínicas y centros de salud deberían automatizar su contenido en redes",
    excerpt:
      "El contenido educativo es el mejor captador de nuevos pacientes. El problema es que nadie en una clínica tiene tiempo de escribirlo. La IA lo resuelve.",
    category: "Salud",
    readTime: "4 min",
    date: "2025-04-28",
    content: `
Las clínicas dentales, de fisioterapia, psicología y medicina estética comparten un problema: saben que publicar contenido educativo en redes sociales les trae pacientes, pero nadie en el equipo tiene tiempo ni ganas de hacerlo de forma consistente.

**Por qué el contenido importa en salud**

El 72% de los pacientes busca información sobre síntomas o tratamientos online antes de pedir cita. Si tu clínica aparece con contenido útil cuando alguien busca "qué es la fisioterapia online" o "cuánto cuesta un implante dental en [ciudad]", tienes una ventaja enorme sobre la competencia que no publica nada.

El problema no es que no haya información que compartir. Es que el médico o fisioterapeuta está todo el día con pacientes, y escribir posts para Instagram es la última prioridad de cualquier tarde de martes.

**Cómo funciona la automatización**

Un sistema de generación de contenido configurado para una clínica puede:
- Monitorizar las preguntas más frecuentes de los pacientes (extraídas de sus propias consultas)
- Generar posts educativos con lenguaje accesible, validados por el equipo médico
- Adaptar el formato para Instagram, Facebook y el blog de la web
- Programar la publicación en los mejores horarios de cada plataforma
- Generar la newsletter mensual con las novedades del centro

El equipo revisa y aprueba el contenido en 10 minutos a la semana. El sistema hace el resto.

**Resultado esperado**

Clínicas que publican 3-4 veces por semana contenido educativo de calidad ven un aumento de entre un 15% y un 35% en las solicitudes de primera cita a los 3 meses de consistencia.

No es magia. Es estar presente cuando alguien tiene una duda y tú tienes la respuesta.

¿Quieres ver cómo montaríamos este sistema para tu centro? [Contáctame aquí](/contact).
    `.trim(),
  },
]
