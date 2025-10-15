export type SearchItem = {
  title: string;
  path: string;
  keywords?: string[]; // optional extra terms
};

const norm = (s: string) => s.toLowerCase().normalize("NFKD");

/** simple "is query a subsequence of text" score with small boosts */
function subseqScore(q: string, t: string): number {
  let qi = 0, ti = 0, score = 0, streak = 0;
  while (qi < q.length && ti < t.length) {
    if (q[qi] === t[ti]) {
      streak += 1;
      // reward consecutive matches
      score += 2 + Math.min(streak, 3); 
      qi++; ti++;
    } else {
      streak = 0;
      ti++;
    }
  }
  if (qi < q.length) return 0; // not a subsequence at all
  return score;
}

/** Very small fuzzy scorer combining exact/prefix/subsequence */
export function score(query: string, text: string): number {
  const q = norm(query).trim();
  const t = norm(text);
  if (!q) return 0;
  if (t === q) return 1000;            // exact
  if (t.startsWith(q)) return 600;     // strong prefix
  // word-prefix boost (e.g. "api" vs "API Reference")
  if (t.split(/\s+/).some(w => w.startsWith(q))) return 420;

  // soft subsequence
  return subseqScore(q, t);             // up to ~ a few hundred
}

/** Rank items by title + keywords; return top N */
export function search(items: SearchItem[], query: string, limit = 6): SearchItem[] {
  const q = query.trim();
  if (!q) return [];
  const ranked = items
    .map(it => {
      const base = score(q, it.title);
      const extra = (it.keywords ?? []).reduce((acc, kw) => acc + score(q, kw), 0);
      return { it, s: base + extra };
    })
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(x => x.it);
  return ranked;
}
