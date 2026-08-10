import { useEffect } from 'react';

export const SITE_URL = 'https://www.procarpetandductcleaning.com';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const PageSEO: React.FC<PageSEOProps> = ({ title, description, path, noIndex = false, schema }) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);

    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);
    upsertMeta('property', 'og:url', canonicalUrl);

    const robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noIndex) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else if (robotsTag) {
      robotsTag.remove();
    }

    const schemaTags: HTMLScriptElement[] = [];
    if (schema) {
      const items = Array.isArray(schema) ? schema : [schema];
      for (const item of items) {
        const tag = document.createElement('script');
        tag.type = 'application/ld+json';
        tag.text = JSON.stringify(item);
        document.head.appendChild(tag);
        schemaTags.push(tag);
      }
    }

    return () => {
      schemaTags.forEach((tag) => tag.remove());
    };
  }, [title, description, path, noIndex, schema]);

  return null;
};

export default PageSEO;
