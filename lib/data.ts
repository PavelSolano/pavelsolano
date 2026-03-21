export const siteData = {
  name: "Pavel Solano García",
  tagline: "Systems Scientist · Complex Systems Designer",
  email: "pavelsg210394@gmail.com",
  linkedin: "https://www.linkedin.com/in/pavel-solano-880489112/",
  orcid: "https://orcid.org/0009-0007-5970-5944",
  github: "https://github.com/pavelsolano",
};

export const stats = [
  { value: "PhD", suffix: ".", label: "Systems Engineering · IPN" },
  { value: "3", suffix: "+", label: "Publications · MDPI / Scopus" },
  { value: "5", suffix: "yr", label: "Complex Systems Projects" },
  { value: "Industry", suffix: " 5.0", label: "Industry Automation & AI" },
];

export const services = [
  {
    icon: "⬡",
    title: "Viable System Design",
    description:
      "Diagnóstico y diseño organizacional basado en el VSM de Stafford Beer. Identifico dónde tu organización pierde variedad y viabilidad sistémica.",
    tag: "VSM · Cybernetics",
  },
  {
    icon: "◈",
    title: "AI System Architecture",
    description:
      "Diseño de agentes de IA distribuidos con ontologías propias. Cada agente opera con clausura operacional y comunicación sistémica precisa.",
    tag: "LLMs · Docker · Microservices",
  },
  {
    icon: "◎",
    title: "Digital Transformation",
    description:
      "Adopción de Industria 4.0 / 5.0 integrando cambio humano y arquitectura técnica sostenible desde el primer día.",
    tag: "Industry 5.0 · Sustainability",
  },
];

export const projects = [
  {
    num: "01",
    year: "2024",
    client: "Chelita Software",
    title: "VSM-Distributed Agent System",
    description:
      "El Modelo de Sistema Viable de Beer implementado como microservicios. Cada sistema S1–S5 en su propio contenedor Docker con ontología propia y comunicación vía Redis.",
    tags: ["Docker", "FastAPI", "Redis", "VSM", "2nd-Order Cybernetics"],
    slug: "vsm-distributed-agent-system",
  },
  {
    num: "02",
    year: "2023",
    client: "Chelita Software",
    title: "LLM Context Optimization — 40% Latency Reduction",
    description:
      "Estrategia de particionamiento JSON para optimizar context windows en LLMs. Aplicado en producción para campañas de marketing a gran escala.",
    tags: ["LLMs", "Context Engineering", "JSON", "AI Ops"],
    slug: "llm-context-optimization",
  },
  {
    num: "03",
    year: "2022",
    client: "Manufactura Industrial",
    title: "Industrial Automation Roadmap · Computer Vision",
    description:
      "Hoja de ruta holística para automatización industrial integrando visión por computadora con infraestructura física existente en planta de manufactura.",
    tags: ["Computer Vision", "Industry 4.0", "Systems Thinking"],
    slug: "industrial-automation-roadmap",
  },
];

export const publications = [
  {
    journal: "Applied System Innovation · MDPI · 2025",
    title:
      "Viable and Sustainable Model for Adoption of New Technologies in Industry 4.0 and 5.0",
    subtitle: "Case Study on Pellet Manufacturing. Journal Article.",
    tags: ["Industry 5.0", "VSM", "Sustainability"],
    url: "https://orcid.org/0009-0007-5970-5944",
  },
  {
    journal: "Systems · MDPI · 2023",
    title:
      "Systems Approach for the Adoption of New Technologies in Enterprises",
    subtitle: "Journal Article — MDPI Systems.",
    tags: ["Systems Thinking", "Technology Adoption"],
    url: "https://orcid.org/0009-0007-5970-5944",
  },
];

export const articles = [
  {
    date: "Próximamente · 2026",
    title: "De la Filosofía al Silicio: Cómo la Ontología define a la IA",
    excerpt:
      "Desde el ser de Heidegger hasta el embedding vectorial de un LLM — y por qué el diseño ontológico es la habilidad más valiosa de este siglo.",
    slug: "filosofia-al-silicio",
  },
  {
    date: "Próximamente · 2026",
    title: "El VSM de Beer como arquitectura de microservicios",
    excerpt:
      "Cómo implementé el Modelo de Sistema Viable en Docker, FastAPI y Redis — cibernética aplicada en código real.",
    slug: "vsm-microservicios",
  },
  {
    date: "Próximamente · 2026",
    title: "Por qué la IA no automatiza sistemas, los diseña",
    excerpt:
      "El rol del Observador de Segundo Orden en la era de los agentes de IA. La soberanía de la decisión como ventaja humana.",
    slug: "ia-disenadora",
  },
  {
    date: "Próximamente · 2026",
    title: "Industria 5.0: La sustentabilidad como condición de existencia",
    excerpt:
      "No es una certificación — es una condición ontológica: el sistema que no regenera lo que consume, deja de ser viable.",
    slug: "industria-50-sustentabilidad",
  },
];
