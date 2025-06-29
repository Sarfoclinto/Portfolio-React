export const experiences = [
  {
    role: "Software Developer",
    company: "Peadato Company Limited",
    period: "September 2024 - January 2025",
    type: "Intern",
    companyIcon: "cib:processwire",
    companyColor: "from-blue-500 to-green-600",
    description:
      "Assisting in high-impact software projects, collaborating with cross-functional teams to deliver innovative solutions and enhance user experiences",
    achievements: [
      "Achieved Best Intern of the Year",
      "Assited from start to the completion of projects",
      "Consistently praised for skillfulness, quick learning, and strong communication",
      "Earned repeated engagements through reliability and expertise",
    ],
    technologies: ["JavaScript", "Typescript", "React", "Tailwindcss"],
  },
  {
    role: "Software Developer",
    company: "Clockwise Technologies Limited",
    period: "March 2025 - Present",
    type: "Full-time",
    companyIcon:
      "streamline-ultimate:technology-device-wearable-smart-watch-circle-app-2",
    companyColor: "from-blue-500 to-green-600",
    description:
      "Developed software for schools, sales, and entertainment.Built school record systems, sales tools, and entertainment apps to streamline operations and improve user experience.",
    achievements: [
      "Put up a very good team work",
      "Ensured active monitoring for integration issues",
      "Communicated issues and requirements to backend teams",
    ],
    technologies: [
      "ASP.NET Core",
      "Blazor",
      "Typescript",
      "React",
      "Tailwindcss",
    ],
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const iconVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
};
