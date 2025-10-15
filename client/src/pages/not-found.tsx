import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import InlineSearch from "@/components/InlineSearch";
import type { SearchItem } from "@/lib/fuzzy";



const BASE_PAGES: SearchItem[] = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog", keywords: ["insights", "news"] },
  { title: "API Reference", path: "/resources/api-reference", keywords: ["api", "reference", "developers", "docs"] },
  { title: "Documentation", path: "/resources/documentation", keywords: ["docs", "guides", "how-to"] },
  { title: "Support Center", path: "/support-center", keywords: ["help", "contact", "faq", "support"] },
  { title: "Projects", path: "#projects", keywords: ["work", "case studies"] },
  { title: "Services", path: "#services", keywords: ["ai", "web", "marketing"] },
  { title: "Team", path: "#team" },
  { title: "Contact", path: "#contact" },
  { title: "Privacy Policy", path: "/privacy-policy", keywords: ["legal", "privacy"] },
  { title: "Terms of Service", path: "/terms-of-service", keywords: ["legal", "tos", "terms"] },
  { title: "Cookie Policy", path: "/legal/cookie-policy", keywords: ["cookies"] },
] as const;

import {
  AlertCircle,
  Home,
  BookOpen,
  LifeBuoy,
  ArrowLeft,
  Compass,
  Search,
} from "lucide-react";

export default function NotFoundPage() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const [, navigate] = useLocation();
  const [q, setQ] = useState("");
  let pages = BASE_PAGES;

  // Routes you want to search through internally
  const searchableRoutes = [
    { path: "/blog", name: "Blog" },
    { path: "/projects", name: "Projects" },
    { path: "/resources/documentation", name: "Documentation" },
    { path: "/resources/api-reference", name: "API Reference" },
    { path: "/resources/support-center", name: "Support Center" },
    { path: "/contact", name: "Contact" },
    { path: "/services", name: "Services" },
    { path: "/", name: "Home" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;

    const found = searchableRoutes.find((r) =>
      r.name.toLowerCase().includes(q.toLowerCase())
    );

    if (found) {
      navigate(found.path);
      requestAnimationFrame(() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    } else {
      alert("No matching section found — try another keyword!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <SEO
        title="404 — Page Not Found | Anoiak"
        description="This page doesn’t exist. Try searching or return to the home page."
        canonicalUrl="https://anoiak.com/404"
      />

      <Navigation />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm p-8 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                404 — Page Not Found
              </h1>
              <p className="mt-2 text-slate-600">
                The page you’re looking for doesn’t exist, has moved, or is temporarily unavailable.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => navigate("/")}>
              <Home className="h-4 w-4 mr-2" /> Go Home
            </Button>
            <Button variant="secondary" onClick={() => navigate("/blog")}>
              <BookOpen className="h-4 w-4 mr-2" /> Visit Blog
            </Button>
            <Button variant="outline" onClick={() => navigate("/resources/support-center")}>
              <LifeBuoy className="h-4 w-4 mr-2" /> Support Center
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Search + Links grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Internal search */}
            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Search className="h-4 w-4 text-slate-700" />
                </div>
                <h2 className="text-lg font-semibold leading-none">Try a quick search</h2>
              </div>
              <p className="text-slate-600 text-sm mb-3">
                Search within Anoiak pages to find what you’re looking for.
              </p>

              <form
                onSubmit={handleSearch}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 w-full max-w-md"
              >
                {/* <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search within site..."
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm leading-none outline-none focus:ring-2 focus:ring-slate-300"
                /> */}

                <InlineSearch
                  items={pages}
                  tone="light"
                  size="sm"
                  className="mt-3"
                  placeholder="Search within site…"
                />
              </form>
            </div>

            {/* Popular destinations */}
            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <h2 className="text-lg font-semibold mb-2">Popular destinations</h2>
              <ul className="space-y-2 text-sm">
                {searchableRoutes.slice(0, 4).map((r) => (
                  <li key={r.path}>
                    <Link
                      href={r.path}
                      className="text-slate-700 hover:text-slate-900"
                    >
                      • {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            If you believe this is an error, please{" "}
            <Link className="underline" href="/resources/support-center">
              let us know
            </Link>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
