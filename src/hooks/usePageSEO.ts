import { useEffect } from "react";

interface UsePageSEOOptions {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function usePageSEO({ title, description, canonicalPath }: UsePageSEOOptions) {
  useEffect(() => {
    const fullTitle = `${title} | Meridian Chambers Bangladesh`;
    document.title = fullTitle;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const baseUrl = window.location.origin;
    canonical.href = canonicalPath ? `${baseUrl}${canonicalPath}` : window.location.href;
  }, [title, description, canonicalPath]);
}
