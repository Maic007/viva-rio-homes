/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vivariohomes.com', // Cambia esto por tu URL real al publicar
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/studio'], // Excluye el CMS si no quieres que se indexe
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/studio',
      },
    ],
  },
};

