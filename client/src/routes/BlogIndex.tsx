// client/src/routes/BlogIndex.tsx
import { Link } from "wouter";
import { getAllPosts } from "@/lib/posts";
import BlogLayout from "@/components/BlogLayout";
import SEO from "@/components/SEO";
import InlineSearch from "@/components/InlineSearch";
import { getBlogSearchItems } from "@/lib/blog-search";


export default function BlogIndex() {
  const posts = getAllPosts();
  const blogItems = getBlogSearchItems();

  return (
    <BlogLayout>
      <SEO
        title="Blog & Insights"
        description="Insights on AI, technology, and innovation from the Anoiak team."
        canonical="/blog"
        image="/og/blog.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Anoiak Blog",
          "url": "https://yourdomain.com/blog"
        }}
      />
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              Explore the latest insights on AI, technology, and innovation from the Anoiak team.
            </p>
          </div>
          <InlineSearch
            items={blogItems}
            placeholder="Search blog posts…"
            className="mt-6"
          />


        {/* Grid */}
        {posts.length === 0 ? (
          <p className="text-center text-gray-400">No posts yet. Stay tuned!</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={p.url}
                className="group block rounded-2xl border border-slate-700/70 
                           bg-slate-900/40 backdrop-blur-md 
                           hover:bg-slate-900/60 hover:shadow-cyan-900/30 hover:shadow-2xl 
                           transition transform hover:-translate-y-1 text-slate-200"
              >
                {p.cover && (
                  <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>

                  {p.date && (
                    <p className="text-xs text-slate-400 mb-3">
                      {new Date(p.date).toDateString()}
                    </p>
                  )}

                  {p.excerpt && (
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                  )}

                  {p.tags && p.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-800/60 border border-slate-700 px-2 py-1 rounded-md text-cyan-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </BlogLayout>
  );
}
