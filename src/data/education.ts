export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly detail: string;
}

export const education: Education[] = [
  {
    degree:
      "Master — Ingénierie & Analytique des Données appliquées à l’Industrie du Gaming",
    institution:
      "École Normale Supérieure de Fès — Université Sidi Mohamed Ben Abdellah",
    period: "2025 — Présent",
    detail:
      "Data Science • Artificial Intelligence • Computer Vision • Gaming",
  },
  {
    degree: "Licence Professionnelle — Informatique Décisionnelle",
    institution: "École Supérieure de Technologie de Fès",
    period: "2024 — 2025",
    detail:
      "Business Intelligence • Data Analytics • Decision Support Systems",
  },
  {
    degree:
      "Brevet de Technicien Supérieur (BTS) — Développement des Systèmes d’Information",
    institution: "École Supérieure de BTS, Fès",
    period: "2022 — 2024",
    detail:
      "Software Development • Information Systems • Application Development",
  },
  {
    degree: "Baccalauréat — Sciences Physiques",
    institution: "Lycée Abd El Karim Daoudi, Fès",
    period: "2021 — 2022",
    detail: "Scientific Studies",
  },
];