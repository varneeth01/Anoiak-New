import { useEffect, useMemo, useState } from "react";

type TocItem = { id: string; text: string; level: number };

export default function TOC({ rootSelector = "#post-content" }: { rootSelector?: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    const hs = root.querySelectorAll("h2, h3");
    const list: TocItem[] = Array.from(hs).map((h) => ({
      id: h.id,
      text: h.textContent || "",
      level: h.tagName === "H2" ? 2 : 3,
    }));
    setItems(list);

    // highlight on scroll
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] }
    );
    list.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [rootSelector]);

  const hasItems = items.length > 0;
  const grouped = useMemo(() => items, [items]);

  if (!hasItems) return null;

  return (
    <aside className="sticky top-28 hidden xl:block w-72 h-fit rounded-xl border border-slate-700/70 bg-slate-900/40 backdrop-blur p-5">
      <p className="text-sm font-semibold text-cyan-300 mb-3">On this page</p>
      <nav className="space-y-2">
        {grouped.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={[
              "block text-sm leading-6 transition-colors",
              i.level === 3 ? "pl-4" : "",
              activeId === i.id ? "text-cyan-300" : "text-slate-300 hover:text-white",
            ].join(" ")}
          >
            {i.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
