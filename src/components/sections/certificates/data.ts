import { easeInOut } from "motion";

export type Certificate = {
  title: string;
  provider: string;
  platform: string;
  issued: string;
  credentialId: string;
  skills: string[];
  providerIcon: string;
  platformIcon: string;
  color: string;
  certificatePreview: string;
  providerIconSize: number;
  platformIconSize: number;
};

export const certifications: Certificate[] = [
  {
    title: "Mobile App Developement",
    provider: "ZapTek",
    platform: "ZapTek Bootcamp",
    issued: "March 2023",
    credentialId: "FHSK8900F8FFda",
    skills: ["React Native", "Version Control", "Git", "Javascript"],
    providerIcon: "arcticons:zappka",
    platformIcon: "arcticons:zappka",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/zaptek.jpg",
    providerIconSize: 64,
    platformIconSize: 64,
  },
  {
    title: "Software Engineering",
    provider: "IPMC",
    platform: "Institution",
    issued: "March 2025",
    credentialId: "HJHBJHHG767JMJ6",
    skills: [
      "C++",
      "PHP",
      "MsServer",
      "C#",
      "VB.Net",
      "Java",
      "HTML",
      "CSS",
      "Javascript",
    ],
    providerIcon: "mdi:company",
    platformIcon: "mdi:company",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/ipmc.png",
    providerIconSize: 64,
    platformIconSize: 64,
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
} as const;

export const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};
