import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { score } from "@/lib/fuzzy";

type Item = { title: string; path: string; keywords?: string[] };

type Tone = "light" | "dark";
type Size = "sm" | "md";

interface Props {
  items: Item[];
  placeholder?: string;
  className?: string;
  maxResults?: number;
  tone?: Tone; // NEW
  size?: Size; // NEW
}

export default function InlineSearch({
  items,
  placeholder = "Search…",
  className = "",
  maxResults = 8,
  tone = "dark",
  size = "md",
}: Props) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Debounce
  const [debounced, setDebounced] = useState(q);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(q.trim()), 120);
    return () => clearTimeout(t);
  }, [q]);

  const results = useMemo(() => {
    if (!debounced) return [];
    const scored = items
      .map((it) => ({
        it,
        s: Math.max(
          score(it.title, debounced),
          ...(it.keywords ?? []).map((k) => score(k, debounced))
        ),
      }))
      .filter((x) => x.s > 0.18)
      .sort((a, b) => b.s - a.s)
      .slice(0, maxResults)
      .map((x) => x.it);
    return scored;
  }, [debounced, items, maxResults]);

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Keyboard nav
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && results.length > 0 && (e.key === "ArrowDown" || e.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[active];
      if (target) {
        setOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.location.href = target.path;
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // tone styles
  const isLight = tone === "light";
  const h = size === "sm" ? "h-11" : "h-12";
  const inputCls = isLight
    ? `w-full ${h} rounded-xl bg-white text-slate-900 placeholder:text-slate-400
       border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
       px-4 outline-none transition`
    : `w-full ${h} rounded-2xl bg-slate-900/40 text-slate-100 placeholder:text-slate-500
       border border-slate-800/60 focus:border-bg-blue-600/60 focus:ring-2 focus:ring-indigo-500/20
       px-4 outline-none transition`;

  const btnCls = isLight
    ? `${h} px-4 rounded-xl bg-blue-600 text-white font-medium
       hover:bg-blue-600 active:bg-indigo-600 transition shadow-sm`
    : `${h} px-4 rounded-2xl bg-blue-600 text-white font-medium
       hover:bg-blue-600 active:bg-blue-600 transition shadow-md`;

  const popShell = isLight
    ? `rounded-xl border border-slate-200 bg-white shadow-xl`
    : `rounded-2xl border border-slate-800/60 bg-slate-950/60 backdrop-blur-xl shadow-2xl`;

  const itemBase = isLight
    ? `block px-4 py-3 transition hover:bg-slate-50 text-slate-700`
    : `block px-4 py-3 transition hover:bg-slate-900/40 text-slate-200`;

  const itemActive = isLight ? `bg-indigo-50` : `bg-slate-900/60`;

  const chipCls = isLight
    ? `text-[11px] leading-[1] px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200`
    : `text-[11px] leading-[1] px-2 py-1 rounded-full bg-slate-800/60 text-slate-300`;

  return (
    <div ref={rootRef} className={`w-full ${className}`}>
      <div className="mx-auto max-w-2xl">
        <div className="relative flex items-center gap-2">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
              setOpen(true);
            }}
            onKeyDown={onKeyDown}
            onFocus={() => q && setOpen(true)}
            placeholder={placeholder}
            className={inputCls}
            aria-label="Search"
          />
          <button
            type="button"
            onClick={() => {
              inputRef.current?.focus();
              setOpen(Boolean(q));
            }}
            className={btnCls}
          >
            Search
          </button>

          {open && (
            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30" role="listbox">
              <div className={`mx-auto max-w-2xl overflow-hidden ${popShell}`}>
                {results.length === 0 ? (
                  <div className={isLight ? "px-4 py-4 text-sm text-slate-500" : "px-4 py-4 text-sm text-slate-400"}>
                    No matches. Try a different keyword.
                  </div>
                ) : (
                  <ul>
                    {results.map((r, i) => (
                      <li key={r.path}>
                        <Link href={r.path}>
                          <a
                            onClick={() => setOpen(false)}
                            className={`${itemBase} ${i === active ? itemActive : ""}`}
                          >
                            <div className="font-medium">{r.title}</div>
                            {!!(r.keywords?.length) && (
                              <div className="mt-1 flex flex-wrap gap-1">
                                {r.keywords!.slice(0, 4).map((k) => (
                                  <span key={k} className={chipCls}>
                                    {k}
                                  </span>
                                ))}
                              </div>
                            )}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
