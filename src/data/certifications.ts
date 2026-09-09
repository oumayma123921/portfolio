export interface Certification {
  readonly title: string;
  readonly issuer: string;
  readonly date: string;
  readonly description: string;
  readonly credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Les fondamentaux de l’intelligence artificielle",
    issuer: "IBM SkillsBuild",
    date: "2026",
    description:
      "Fundamentals of Artificial Intelligence, including AI concepts, applications, machine learning basics and responsible AI.",
    credentialUrl: "#",
  },
  {
    title: "AWS Data Lakehouse démontré",
    issuer: "AWS Skill Builder",
    date: "2026",
    description:
      "Microcertification focused on modern data lakehouse concepts and AWS data architecture.",
    credentialUrl: "#",
  },
];