import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zrotax.com';

    const routes = [
        '',
        '/about',
        '/services',
        '/services/tax-planning',
        '/services/business-advisory',
        '/services/compliance-gst',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    return routes;
}
