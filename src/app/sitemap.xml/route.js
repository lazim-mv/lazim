import { projectData } from '@/app/components/Projects/data';

export const revalidate = 3600;

function generateSiteMap(routes) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
            .map((route) => {
                return `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;
}

export async function GET() {
    const staticRoutes = [
        {
            url: 'https://lazim-mv.vercel.app',
            lastModified: '2024-02-07',
            changefreq: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://lazim-mv.vercel.app/about',
            lastModified: '2024-02-07',
            changefreq: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://lazim-mv.vercel.app/projects',
            lastModified: '2024-02-07',
            changefreq: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://lazim-mv.vercel.app/contact',
            lastModified: '2024-02-07',
            changefreq: 'monthly',
            priority: 0.7,
        },
    ];

    const dynamicRoutes = projectData.map((project) => ({
        url: `https://lazim-mv.vercel.app/projects/${project.id}`,
        lastModified: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.6,
    }));

    const sitemap = generateSiteMap([...staticRoutes, ...dynamicRoutes]);

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
