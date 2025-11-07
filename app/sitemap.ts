import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://gourimenon-portfolio.vercel.app/', lastModified: new Date() },
    { url: 'https://gourimenon-portfolio.vercel.app/#menu', lastModified: new Date() },
  ];
}
