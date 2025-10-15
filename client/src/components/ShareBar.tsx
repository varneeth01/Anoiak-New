export default function ShareBar({ title }: { title: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    } catch {}
  };

  const open = (u: string) => window.open(u, "_blank", "noopener,noreferrer");

  return (
    <div className="flex items-center gap-3 text-sm">
      <button onClick={copy} className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800">
        Copy link
      </button>
      <button
        onClick={() => open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)}
        className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800"
      >
        Share on X
      </button>
      <button
        onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)}
        className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800"
      >
        Share on LinkedIn
      </button>
    </div>
  );
}
