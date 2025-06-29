export interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
  description: string;
  yearsUsed?: number;
}

export const techStackData: Record<string, TechItem[]> = {
  Backend: [
    {
      name: "Node.js",
      icon: "devicon:nodejs",
      level: "Intermediate",
      category: "Backend",
      description: "JavaScript runtime for server-side applications",
      yearsUsed: 1,
    },
    {
      name: "Express",
      icon: "skill-icons:expressjs-dark",
      level: "Expert",
      category: "Backend",
      description: "Fast, minimalist web framework for Node.js",
      yearsUsed: 1,
    },
    {
      name: "ASP.Net Core",
      icon: "devicon:dotnetcore",
      level: "Intermediate",
      category: "Backend",
      description:
        "Cross-platform, high-performance framework for building modern web APIs and applications",
      yearsUsed: 1,
    },
  ],
  Frontend: [
    {
      name: "React",
      icon: "skill-icons:react-dark",
      level: "Intermediate",
      category: "Frontend",
      description: "Building modern, interactive user interfaces",
      yearsUsed: 2,
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      level: "Intermediate",
      category: "Frontend",
      description: "Type-safe JavaScript for scalable applications",
      yearsUsed: 1,
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
      level: "Intermediate",
      category: "Frontend",
      description: "Core language for web development",
      yearsUsed: 2,
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      level: "Intermediate",
      category: "Frontend",
      description: "Utility-first CSS framework for rapid UI development",
      yearsUsed: 2,
    },
    {
      name: "React Native",
      icon: "devicon:reactnative-wordmark",
      level: "Beginner",
      category: "Frontend",
      description: "Cross-platform mobile app development",
      yearsUsed: 1,
    },
  ],
  Database: [
    {
      name: "MySQL",
      icon: "logos:mysql",
      level: "Intermediate",
      category: "Database",
      description: "Popular open-source relational database",
      yearsUsed: 1,
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
      level: "Beginner",
      category: "Database",
      description: "NoSQL document database",
      yearsUsed: 1,
    },
  ],
  "Cloud & DevOps": [
    {
      name: "Firebase",
      icon: "vscode-icons:file-type-firebase",
      level: "Beginner",
      category: "Cloud & DevOps",
      description: "Google's app development platform",
      yearsUsed: 1,
    },
    {
      name: "Git",
      icon: "devicon:git",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Version control system",
      yearsUsed: 2,
    },
  ],
};
