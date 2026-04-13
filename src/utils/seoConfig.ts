// SEO Configuration for Clinton Sarfo's Portfolio
export const SEO_CONFIG = {
  // Base configuration
  baseURL: "https://clintonsarfo.vercel.app",
  siteName: "Clinton Sarfo | Web Developer",
  author: "Clinton Sarfo",
  email: "clintsarfo@gmail.com",

  // Keywords
  keywords: [
    "sarfo clinton",
    "clinton sarfo",
    "frontend",
    "react",
    "asp.net core",
    "blazor",
    "c#",
    "javascript",
    "typescript",
    "react-native",
    "expo",
    "web developer",
    "full-stack developer",
    "portfolio",
  ],

  // Social profiles
  socialProfiles: {
    github: "https://github.com/SarfoC",
    linkedin: "https://linkedin.com/in/clinton-sarfo",
    twitter: "https://twitter.com/sarfoC",
  },

  // Profile image
  profileImage: "/me.png",

  // Default meta tags
  defaultMeta: {
    title: "Clinton Sarfo | Full-Stack Web Developer",
    description:
      "Experienced full-stack developer specializing in React, ASP.NET Core, and Blazor. Explore my portfolio, skills, and professional experience.",
    type: "website",
  },

  // Section metadata
  sections: {
    hero: {
      id: "hero",
      title: "Clinton Sarfo | Full-Stack Web Developer",
      description:
        "Full-stack developer with expertise in React, ASP.NET Core, Blazor, and modern web technologies. Passionate about creating scalable applications.",
      keywords: [
        "frontend developer",
        "react developer",
        "web developer",
        "full-stack",
      ],
      type: "website",
      priority: 1.0,
    },
    overview: {
      id: "overview",
      title: "About Clinton Sarfo | Professional Overview",
      description:
        "Learn about my professional experience, technical expertise, and career achievements in full-stack web development across multiple technologies.",
      keywords: ["about", "experience", "professional", "skills", "expertise"],
      type: "website",
      priority: 0.9,
    },
    stack: {
      id: "stack",
      title: "Tech Stack | Frontend, Backend & Tools",
      description:
        "Explore the technologies I specialize in: React, TypeScript, ASP.NET Core, Blazor, C#, JavaScript, and modern development tools.",
      keywords: [
        "tech stack",
        "technologies",
        "skills",
        "react",
        "typescript",
        "c#",
        "asp.net core",
      ],
      type: "website",
      priority: 0.8,
    },
    experience: {
      id: "experience",
      title: "Professional Experience | Work History",
      description:
        "View my professional work experience, including roles, achievements, and contributions to various projects and organizations.",
      keywords: ["experience", "work history", "projects", "achievements"],
      type: "website",
      priority: 0.85,
    },
    certifications: {
      id: "certifications",
      title: "Professional Certificates & Credentials",
      description:
        "Professional certifications showcasing expertise in web development, programming, and technology.",
      keywords: [
        "certificates",
        "credentials",
        "certifications",
        "professional",
      ],
      type: "website",
      priority: 0.7,
    },
    contact: {
      id: "contact",
      title: "Contact Clinton Sarfo | Get in Touch",
      description:
        "Contact me for project inquiries, collaborations, or professional opportunities. Fill out the contact form or reach out directly.",
      keywords: ["contact", "get in touch", "email", "hire"],
      type: "website",
      priority: 0.8,
    },
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
  },

  // Twitter Card defaults
  twitterCard: "summary_large_image",

  // Structured data - Person schema
  personSchema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Clinton Sarfo",
    jobTitle: "Full-Stack Web Developer",
    email: "clintsarfo@gmail.com",
    image: "https://clintonsarfo.vercel.app/me.png",
    url: "https://clintonsarfo.vercel.app",
    sameAs: [
      "https://github.com/SarfoC",
      "https://linkedin.com/in/clinton-sarfo",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "ASP.NET Core",
      "Blazor",
      "C#",
      "React Native",
      "Expo",
      "Web Development",
      "Full-Stack Development",
    ],
  },

  // Structured data - Organization schema
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clinton Sarfo",
    url: "https://clintonsarfo.vercel.app",
    logo: "https://clintonsarfo.vercel.app/me.png",
    sameAs: [
      "https://github.com/SarfoC",
      "https://linkedin.com/in/clinton-sarfo",
    ],
  },
};
