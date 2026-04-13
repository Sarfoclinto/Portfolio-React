import { useEffect, useState } from "react";

interface VisibleSectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

/**
 * Hook to detect which section is currently visible in the viewport
 * Used to update meta tags dynamically based on scroll position
 */
export const useVisibleSection = (
  options: VisibleSectionOptions = { threshold: 0.5, rootMargin: "0px" },
) => {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  useEffect(() => {
    // Get all sections with ID attributes
    const sectionIds = [
      "hero",
      "overview",
      "stack",
      "experience",
      "certifications",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null) as HTMLElement[];

    if (sections.length === 0) {
      console.warn("No sections found with IDs:", sectionIds);
      return;
    }

    // Create Intersection Observer to detect visible sections
    const observer = new IntersectionObserver((entries) => {
      // Find the section that is most visible
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Get the section with the highest intersection ratio (most visible)
        const mostVisibleEntry = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev,
        );

        const sectionId = mostVisibleEntry.target.id;
        setVisibleSection(sectionId);
      }
    }, options);

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [options]);

  return visibleSection;
};
