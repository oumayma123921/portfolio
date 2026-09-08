export interface Certification {
  readonly title: string;
  readonly issuer: string;
  readonly date?: string;
  readonly description?: string;
  readonly credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Les fondamentaux de l’intelligence artificielle",
    issuer: "IBM SkillsBuild",
    date: "2026",
    description:
      "Certification focused on fundamental concepts of Artificial Intelligence, including AI concepts, applications, machine learning basics and responsible AI.",
    credentialUrl: "#",
  },

  {
    title: "AWS Data Lakehouse démontré",
    issuer: "AWS Skill Builder",
    date: "2026",
    description:
      "Microcertification covering the fundamentals and architecture of modern data lakehouse solutions on AWS.",
    credentialUrl: "#",
  },

  {
    title: "Machine Learning & Data Science",
    issuer: "Online Certification",
    date: "2026",
    description:
      "Training focused on machine learning fundamentals, data preprocessing, model development and evaluation.",
    credentialUrl: "#",
  },
];