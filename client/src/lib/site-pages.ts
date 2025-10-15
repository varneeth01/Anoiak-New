import type { SearchItem } from "@/lib/fuzzy";

export const BASE_PAGES: SearchItem[] = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog", keywords: ["insights", "news"] },
  { title: "Projects", path: "#projects", keywords: ["case studies", "work"] },
  { title: "Services", path: "#services", keywords: ["ai", "web", "marketing"] },
  { title: "Team", path: "#team" },
  { title: "Contact", path: "#contact" },
  { title: "Support Center", path: "/support-center", keywords: ["help", "faq", "support"] },
  { title: "Documentation", path: "/resources/documentation", keywords: ["docs", "guides"] },
  { title: "API Reference", path: "/resources/api-reference", keywords: ["api", "developers"] },
  { title: "Privacy Policy", path: "/privacy-policy", keywords: ["legal", "privacy"] },
  { title: "Terms of Service", path: "/terms-of-service", keywords: ["legal", "tos", "terms"] },
  { title: "Cookie Policy", path: "/legal/cookie-policy", keywords: ["cookies"] },
];
