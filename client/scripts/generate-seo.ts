// ts-node or node with tsx: npx tsx client/scripts/generate-seo.ts
import { writeFileSync } from "fs";
import { resolve } from "path";

// IMPORTANT: import from compiled path or duplicate a tiny reader here:
import { getAllPosts } from "../src/lib/posts"; // vite can run with tsx in node

const SITE = "https://yourdomain.com";

function genSitemap() {
  const posts = getAllPosts();
  const urls = [
    { loc: `${SITE}/`, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE}/blog`, changefreq: "weekly", priority: "0.9" },
    ...posts.map(p => ({
      loc: `${SITE}${p.url}`,
      lastmod: p.date,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("")}
</urlset>`;
  writeFileSync(resolve("client/public/sitemap.xml"), xml.trim());
}

function genRSS() {
  const posts = getAllPosts();
  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Anoiak Blog</title>
  <link>${SITE}/blog</link>
  <description>Insights on AI, technology, and innovation.</description>
  ${posts.map(p => `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${SITE}${p.url}</link>
    <guid>${SITE}${p.url}</guid>
    ${p.date ? `<pubDate>${new Date(p.date).toUTCString()}</pubDate>` : ""}
    ${p.excerpt ? `<description><![CDATA[${p.excerpt}]]></description>` : ""}
  </item>`).join("")}
</channel>
</rss>`;
  writeFileSync(resolve("client/public/rss.xml"), xml.trim());
}

genSitemap();
genRSS();
console.log("Generated sitemap.xml and rss.xml");
