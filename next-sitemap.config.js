module.exports = {
  generateRobotsTxt: true,
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  exclude: ["/api/*"], // Exclude all API routes from the sitemap
};
