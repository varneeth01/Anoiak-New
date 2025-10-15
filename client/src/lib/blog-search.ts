import { getAllPosts } from "@/lib/posts";

export type BlogSearchItem = {
  title: string;
  path: string;
  keywords?: string[];
};

export function getBlogSearchItems(): BlogSearchItem[] {
  return getAllPosts().map((p) => ({
    title: p.title,
    path: `/blog/${p.slug}`,
    keywords: p.tags ?? [],
  }));
}
