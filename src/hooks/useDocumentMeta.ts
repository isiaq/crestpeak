import { useEffect } from 'react';

const SITE_NAME = 'Crestpeak Digital Limited';

/**
 * Sets a unique document title and meta description for the page that calls it.
 * Fixes every route sharing the same <title>/<meta description> from index.html,
 * which made search engines and shared links unable to distinguish pages.
 */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

    let previousDescription: string | null = null;
    let metaEl: HTMLMetaElement | null = null;

    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) {
        previousDescription = metaEl.getAttribute('content');
        metaEl.setAttribute('content', description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (metaEl && previousDescription !== null) {
        metaEl.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
