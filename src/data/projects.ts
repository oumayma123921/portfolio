export interface Project {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: string[];
  readonly github?: string;
  readonly demo?: string;
}

export const projects: Project[] = [
  {
    title: "Gesture-Controlled Game",
    category: "Computer Vision • Gaming",
    description:
      "Interactive game controlled through real-time hand gestures using computer vision and hand tracking.",
    technologies: [
      "Python",
      "Computer Vision",
      "Hand Tracking",
      "AI",
      "Game Development",
    ],
    github: "#",
  },
  {
    title: "BrainPath",
    category: "AI • Educational Application",
    description:
      "Interactive educational application combining game-based learning, user management and data analytics with a Flutter frontend and Python backend.",
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
    ],
    github: "#",
  },
  {
    title: "Health Prediction using Machine Learning",
    category: "Machine Learning • Data Science",
    description:
      "Machine learning project for predicting health-related outcomes from structured datasets using classification algorithms and performance evaluation.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Google Colab",
    ],
    github: "#",
  },
  {
    title: "In-Game Purchase Recommendation System",
    category: "Recommendation Systems • Gaming",
    description:
      "Recommendation system designed to suggest relevant in-game purchases using user behavior and collaborative filtering techniques.",
    technologies: [
      "Python",
      "Machine Learning",
      "Collaborative Filtering",
      "SVD",
      "ALS",
      "Recommendation Systems",
    ],
    github: "#",
  },
  {
    title: "WHISHPER",
    category: "Game Design • Unreal Engine",
    description:
      "Psychological horror puzzle game developed with Unreal Engine 5, focusing on immersive environment design, level design and puzzle-based gameplay.",
    technologies: [
      "Unreal Engine 5",
      "Blender",
      "Game Design",
      "Level Design",
      "Environment Design",
    ],
    github: "#",
  },
  {
    title: "School Archives Management",
    category: "Web • Desktop Application",
    description:
      "Web and desktop application developed as a final year project for managing and organizing school archives.",
    technologies: [
      "Application Development",
      "Database",
      "Web Development",
      "Desktop Development",
    ],
    github: "#",
  },
];