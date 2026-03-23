/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://trada.io",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/studio/*", "/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api"],
      },
    ],
  },
  // Dynamic routes from Sanity will be added via additionalPaths
  additionalPaths: async (config) => {
    const result = [];

    // Add static pages
    const staticPages = [
      "/features",
      "/pricing",
      "/about",
      "/blog",
      "/contact",
      "/affiliates",
      "/legal/terms-of-service",
      "/legal/privacy-policy",
      "/legal/risk-disclaimer",
    ];

    for (const page of staticPages) {
      result.push(await config.transform(config, page));
    }

    return result;
  },
};
