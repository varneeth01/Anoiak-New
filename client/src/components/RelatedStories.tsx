import { Link } from "wouter";
import { getAllPosts } from "@/lib/posts";

export default function RelatedStories({
  currentSlug,
  tags = [],
  title = "Related stories",
}: {
  currentSlug: string;
  tags?: string[];
  title?: string;
}) {
  const all = getAllPosts();

  // Score posts by shared tags, exclude current, take top 3
  const related = all
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const overlap = (p.tags || []).filter((t) => tags.includes(t)).length;
      return { ...p, score: overlap };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => (b.score - a.score) || (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-14">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={p.url}
            className="group block rounded-xl border border-slate-700/60 bg-slate-900/40 hover:bg-slate-900/60 transition"
          >
            {p.cover && (
              <div className="relative h-36 overflow-hidden rounded-t-xl">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}
            <div className="p-4">
              <div className="text-sm text-slate-400">
                {p.date ? new Date(p.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : ""}
              </div>
              <h4 className="mt-1 font-medium text-slate-100 group-hover:text-cyan-300">
                {p.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
