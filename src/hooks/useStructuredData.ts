import { useEffect } from "react";

interface StructuredDataProps {
  data: Record<string, any>;
  id?: string;
}

/**
 * Hook to inject JSON-LD structured data into the document head
 * Used for SEO rich snippets and search engine understanding
 */
export const useStructuredData = ({
  data,
  id = "structured-data",
}: StructuredDataProps) => {
  useEffect(() => {
    // Create or update script tag with JSON-LD data
    let script = document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    // Set the structured data
    script.innerHTML = JSON.stringify(data);

    // Cleanup: optionally remove on unmount (commented out to keep data persistent)
    // return () => {
    //   if (script && script.parentElement) {
    //     script.parentElement.removeChild(script);
    //   }
    // };
  }, [data, id]);
};

/**
 * Generate Person schema with skills
 */
export const generatePersonSchema = (
  name: string,
  jobTitle: string,
  email: string,
  image: string,
  url: string,
  socialProfiles: Record<string, string>,
  skills: string[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    email,
    image,
    url,
    sameAs: Object.values(socialProfiles),
    knowsAbout: skills,
  };
};

/**
 * Generate Work Experience schema
 */
export const generateWorkExperienceSchema = (
  jobTitle: string,
  companyName: string,
  startDate: string,
  endDate?: string,
  description?: string,
  location?: string,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    jobTitle,
    worksFor: {
      "@type": "Organization",
      name: companyName,
      location,
    },
    startDate,
    endDate: endDate || "Present",
    description,
  };
};

/**
 * Generate Organization schema
 */
export const generateOrganizationSchema = (
  name: string,
  url: string,
  logo: string,
  socialProfiles: string[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs: socialProfiles,
  };
};
