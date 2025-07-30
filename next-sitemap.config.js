// next-sitemap.config.js
const fs = require('fs');

module.exports = {
    siteUrl: 'https://lazim-mv.vercel.app',
    generateRobotsTxt: true,

    // Add dynamic paths here
    additionalPaths: async (config) => {

        const projects = [
            "servicesphere",
            "smartplus",
            "nexwave",
            "mavrriq",
            "socialpilot",
            "igreenie",
            "aora",
            "motomatch",
            "brightline",
            "pullys",
            "automotivedashboard",
            "autotraders",
            "officekit",
            "ecommerseapparels"
        ];

        return projects.map((slug) => ({
            loc: `/projects/${slug}`,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        }));
    },
};
