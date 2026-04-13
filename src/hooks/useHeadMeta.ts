import { useEffect } from "react";

interface MetaTagProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  twitterHandle?: string;
  twitterCardType?: string;
}

/**
 * Hook to dynamically update meta tags in the document head
 * Handles OpenGraph, Twitter Cards, and standard meta tags
 */
export const useHeadMeta = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  twitterHandle,
  twitterCardType = "summary_large_image",
}: MetaTagProps) => {
  useEffect(() => {
    // Update or create title tag
    if (title) {
      document.title = title;
      updateMetaTag("og:title", title);
      updateMetaTag("twitter:title", title);
    }

    // Update or create description meta tag
    if (description) {
      updateMetaTag("description", description);
      updateMetaTag("og:description", description);
      updateMetaTag("twitter:description", description);
    }

    // Update keywords meta tag
    if (keywords && keywords.length > 0) {
      const keywordString = keywords.join(", ");
      updateMetaTag("keywords", keywordString);
    }

    // Update Open Graph image
    if (image) {
      updateMetaTag("og:image", image);
      updateMetaTag("og:image:width", "1200");
      updateMetaTag("og:image:height", "630");
      updateMetaTag("twitter:image", image);
    }

    // Update Open Graph URL
    if (url) {
      updateMetaTag("og:url", url);
      updateLinkTag("canonical", url);
    }

    // Update Open Graph type
    if (type) {
      updateMetaTag("og:type", type);
    }

    // Update Twitter Card type
    updateMetaTag("twitter:card", twitterCardType);

    // Update Twitter handle if provided
    if (twitterHandle) {
      updateMetaTag("twitter:creator", twitterHandle);
    }
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    twitterHandle,
    twitterCardType,
  ]);
};

/**
 * Helper function to update or create a meta tag
 */
function updateMetaTag(name: string, content: string) {
  let element =
    document.querySelector(`meta[property="${name}"]`) ||
    document.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    // Determine if it's a property (OG tags) or name attribute
    if (name.startsWith("og:")) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/**
 * Helper function to update or create a link tag
 */
function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}
