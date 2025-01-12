const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://offcampushostels.vercel.app/",
  pagesDirectory: path.join(__dirname, "../app"),
  targetDirectory: path.join(__dirname, "../app"),
  fileName: "sitemap.xml",
  locale: "en",
  trailingSlash: true,
  ignoredExtensions: ["js", "xml", "html", "css", "jpeg", "jpg", "png"],
  ignoredPaths: ["404"],
});
