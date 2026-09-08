export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly description: string;
  readonly field?: string;
}

export const education: Education[] = [
  {
    degree: "Master — Ingénierie & Analytique des Données appliquées à l’Industrie du Gaming",
    institution: "École Normale Supérieure de Fès — Université Sidi Mohamed Ben Abdellah",
    period: "2025 — Présent",
    field: "Data Science • Artificial Intelligence • Gaming",
    description:
      "Formation spécialisée en Data Science, Intelligence Artificielle, analyse de données, systèmes adaptatifs, optimisation, Game Design et technologies appliquées à l’industrie du gaming.",
  },

  {
    degree: "Licence Professionnelle — Informatique Décisionnelle",
    institution: "École Supérieure de Technologie",
    period: "2023 — 2025",
    field: "Business Intelligence • Data • Software Engineering",
    description:
      "Formation orientée vers l’analyse de données, les systèmes décisionnels, les bases de données, le développement logiciel et les technologies informatiques.",
  },

  {
    degree: "BTS — Développement des Systèmes d’Information",
    institution: "Brevet de Technicien Supérieur",
    period: "2021 — 2023",
    field: "Software Development • Information Systems",
    description:
      "Formation en développement d’applications, bases de données, programmation, systèmes d’information et conception de solutions logicielles.",
  },

  {
    degree: "Baccalauréat",
    institution: "Lycée",
    period: "2021",
    field: "Sciences",
    description:
      "Formation secondaire avec une orientation scientifique.",
  },
];