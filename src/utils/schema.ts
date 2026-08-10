import { SITE_URL } from '../components/PageSEO';

export const BUSINESS_NAME = 'Pro Carpet & Duct Cleaning';
export const BUSINESS_PHONE = '+13184454818';

export const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '3603 Bayou Rapides Rd.',
  addressLocality: 'Alexandria',
  addressRegion: 'LA',
  postalCode: '71303',
  addressCountry: 'US',
};

export const localBusinessRef = {
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  telephone: BUSINESS_PHONE,
  address: BUSINESS_ADDRESS,
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
  })),
});

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export interface ReviewItem {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const reviewSchema = (items: ReviewItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  telephone: BUSINESS_PHONE,
  address: BUSINESS_ADDRESS,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: (items.reduce((sum, r) => sum + r.rating, 0) / items.length).toFixed(1),
    reviewCount: items.length,
  },
  review: items.map((item) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: item.name },
    reviewRating: { '@type': 'Rating', ratingValue: item.rating, bestRating: 5 },
    reviewBody: item.text,
  })),
});
