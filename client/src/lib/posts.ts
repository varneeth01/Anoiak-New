import React from "react";

type Frontmatter = {
  title: string;
  date: string;         // ISO date string
  excerpt?: string;
  cover?: string;
  tags?: string[];
  published?: boolean;  // default true
};

export type PostModule = {
  default: React.ComponentType;
  frontmatter: Frontmatter;
};

const modules = import.meta.glob<PostModule>("/content/posts/**/*.mdx", {
  eager: true,
});

export type PostMeta = Frontmatter & { slug: string; url: string };

function pathToSlug(path: string) {
  const name = path.split("/").pop()!.replace(/\.mdx?$/, "");
  return name.toLowerCase();
}

export function getAllPosts(): PostMeta[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const m = mod as PostModule;
      const fm = m.frontmatter || {};
      const slug = pathToSlug(path);
      return {
        slug,
        url: `/blog/${slug}`,
        title: fm.title ?? slug,
        date: fm.date ?? "",
        excerpt: fm.excerpt ?? "",
        cover: fm.cover,
        tags: fm.tags ?? [],
        published: fm.published !== false,
      };
    })
    .filter(p => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostModule | null {
  const hit = Object.entries(modules).find(([p]) => pathToSlug(p) === slug);
  return hit ? (hit[1] as PostModule) : null;
}
