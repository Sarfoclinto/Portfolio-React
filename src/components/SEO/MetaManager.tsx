import { useEffect } from "react";
import { SEO_CONFIG } from "../../utils/seoConfig";
import { useHeadMeta } from "../../hooks/useHeadMeta";
import { useStructuredData } from "../../hooks/useStructuredData";
import { useVisibleSection } from "../../hooks/useVisibleSection";

interface MetaManagerProps {
  children?: React.ReactNode;
}

export const MetaManager: React.FC<MetaManagerProps> = ({ children }) => {
  const visibleSection = useVisibleSection({
    threshold: [0.3, 0.5],
    rootMargin: "-100px 0px -100px 0px",
  });

  // Get metadata for the currently visible section, fallback to default
  const currentSectionMeta = visibleSection
    ? SEO_CONFIG.sections[visibleSection as keyof typeof SEO_CONFIG.sections] ||
      SEO_CONFIG.defaultMeta
    : SEO_CONFIG.defaultMeta;

  // Prepare meta tag props based on current section
  const metaProps = {
    title: currentSectionMeta.title,
    description: currentSectionMeta.description,
    keywords: (currentSectionMeta as any).keywords || SEO_CONFIG.keywords,
    image: SEO_CONFIG.profileImage,
    url: `${SEO_CONFIG.baseURL}${visibleSection ? `#${visibleSection}` : ""}`,
    type: currentSectionMeta.type || SEO_CONFIG.defaultMeta.type,
    twitterCardType: SEO_CONFIG.twitterCard,
  };

  // Update meta tags based on visible section
  useHeadMeta(metaProps);

  // Inject structured data for Person schema
  useStructuredData({
    data: SEO_CONFIG.personSchema,
    id: "person-schema",
  });

  // Log current visible section (for debugging, can be removed)
  useEffect(() => {
    if (visibleSection) {
      // console.log("[SEO] Visible section:", visibleSection);
    }
  }, [visibleSection]);

  return <>{children}</>;
};

export default MetaManager;
