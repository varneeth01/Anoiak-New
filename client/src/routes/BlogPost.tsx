import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { getPostBySlug } from "@/lib/posts";
import BlogLayout from "@/components/BlogLayout";
import Prose from "@/components/Prose";
import TOC from "@/components/TOC";
import ShareBar from "@/components/ShareBar";
import AuthorCard from "@/components/AuthorCard";
import RelatedStories from "@/components/RelatedStories";
import SEO from "@/components/SEO";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const mod = getPostBySlug(slug);


  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [slug]);

  if (!mod) {
    return (
      <BlogLayout>
        <div className="min-h-[60vh] flex flex-col justify-center items-center">
          <p className="mb-6 text-lg">Post not found.</p>
          <Link href="/blog" className="underline hover:text-cyan-300">
            ← Back to blog
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const MDXContent = mod.default;
  const fm = (mod as any).frontmatter || {};
  const { title, date, cover, tags = [], author } = fm;
  const url = `/blog/${slug}`;
  const authorName = fm?.author?.name || "Anoiak";
  const image = fm.cover || "/og/og-default.jpg";

  return (
    <BlogLayout>
      <SEO
        title={fm.title}
        description={fm.excerpt}
        canonical={url}
        image={image}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": fm.title,
            "image": [`https://yourdomain.com${image}`],
            "datePublished": fm.date,
            "dateModified": fm.date,
            "author": { "@type": "Person", "name": authorName },
            "publisher": {
              "@type": "Organization",
              "name": "Anoiak",
              "logo": { "@type": "ImageObject", "url": "https://yourdomain.com/ANOIAK.png" }
            },
            "description": fm.excerpt,
            "articleSection": (fm.tags || []).join(", "),
            "mainEntityOfPage": `https://yourdomain.com${url}`
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://yourdomain.com/blog" },
              { "@type": "ListItem", "position": 3, "name": fm.title, "item": `https://yourdomain.com${url}` }
            ]
          }
        ]}
      />
      {/* HEADER */}
      <header className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>

          {/* Author card (top) */}
          <div className="mt-6">
            <AuthorCard author={author} />
          </div>

          {/* Meta row */}
          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold 
                            bg-cyan-900/30 text-cyan-300 border border-cyan-700/40">
              Insight
            </span>
            {date && (
              <span className="text-xs text-slate-400">
                {new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        {cover && (
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
            <img
              src={cover}
              alt={title}
              className="w-full h-[360px] md:h-[460px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </header>

      {/* BODY + TOC */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-10 px-6 md:px-10 py-12">
        <article>
          <div id="post-content">
            <Prose>
              <MDXContent />
            </Prose>
          </div>

          {/* Tags row (bottom) */}
          {tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {tags.map((t: string) => (
                <span key={t} className="text-xs bg-slate-800/60 border border-slate-700 px-2 py-1 rounded-md text-cyan-300">
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Share bar */}
          <div className="mt-6">
            <ShareBar title={title || ""} />
          </div>

          {/* Related stories */}
          <RelatedStories currentSlug={slug} tags={tags} />

          {/* Back link */}
          <div className="mt-10">
            <Link href="/blog" className="underline hover:text-cyan-300">
              ← Back to all posts
            </Link>
          </div>
        </article>

        {/* Sticky TOC */}
        <TOC rootSelector="#post-content" />
      </main>
    </BlogLayout>
  );
}
