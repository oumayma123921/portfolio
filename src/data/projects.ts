export interface Project {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: string[];
  readonly featured?: boolean;
  readonly github?: string;
  readonly demo?: string;
}

export const projects: Project[] = [
  {
    title: "Gesture-Controlled Game",
    category: "Computer Vision • Gaming",
    description:
      "Interactive game controlled through real-time hand gestures using computer vision and hand tracking. The project explores the integration of AI-based vision with interactive gameplay.",
    technologies: [
      "Python",
      "Computer Vision",
      "Hand Tracking",
      "AI",
      "Game Development",
    ],
    featured: true,
    github: "#",
  },

  {
    title: "BrainPath",
    category: "AI • Educational Application",
    description:
      "Interactive educational application combining game-based learning, user management and data analytics. The application connects a Flutter frontend with a Python backend and PostgreSQL database.",
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
    ],
    featured: true,
    github: "#",
  },

  {
    title: "Health Prediction using Machine Learning",
    category: "Machine Learning • Data Science",
    description:
      "Machine learning project for predicting health-related outcomes from structured medical data. Several classification algorithms were implemented and evaluated using standard performance metrics.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Google Colab",
    ],
    featured: true,
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
      "Psychological horror puzzle game developed with Unreal Engine 5. The project focuses on immersive environment design, level design, exploration and puzzle-based gameplay.",
    technologies: [
      "Unreal Engine 5",
      "Blender",
      "Game Design",
      "Level Design",
      "Environment Design",
    ],
    featured: true,
    github: "#",
  },
];