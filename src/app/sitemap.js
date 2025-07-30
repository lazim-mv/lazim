// app/sitemap.js

import { projectData } from './components/Projects/data' 

export const revalidate = 3600; // optional

export default async function sitemap() {
    const staticRoutes = [
        {
            url: 'https://lazim-mv.vercel.app/',
            lastModified: '2024-02-07',
            changefreq: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://lazim-mv.vercel.app//about',
            lastModified: '2024-02-07',
            changefreq: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://lazim-mv.vercel.app//projects',
            lastModified: '2024-02-07',
            changefreq: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://lazim-mv.vercel.app//contact',
            lastModified: '2024-02-07',
            changefreq: 'monthly',
            priority: 0.7,
        },
    ];

    const dynamicRoutes = projectData.map((project) => ({
        url: `https://lazim-mv.vercel.app//projects/${project.id}`,
        lastModified: new Date().toISOString().split('T')[0], // or use project.year if consistent
        changefreq: 'monthly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...dynamicRoutes];
}
