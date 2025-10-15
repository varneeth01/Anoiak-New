import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Search,
  Code,
  Rocket,
  FileText,
  Puzzle,
  LifeBuoy,
  ChevronRight,
} from "lucide-react";

/** ─────────────────────────────────────────────────────────────
 * Light-theme documentation hub
 * - Safe: no new dependencies
 * - Uses shadcn/ui components you already have (Button/Accordion)
 * - Fully responsive, matches your spacing/rounded look
 * - You can wire each link as content lands
 * ──────────────────────────────────────────────────────────── */

type DocLink = { label: string; href: string; soon?: boolean; tag?: string };

const gettingStarted: DocLink[] = [
  { label: "Overview & Concepts", href: "/resources/documentation#overview" },
  { label: "Quick Start (5-minute)", href: "/resources/documentation#quickstart", tag: "New" },
  { label: "API Reference", href: "/resources/api-reference" },
  { label: "Authentication", href: "/resources/documentation#auth", soon: true },
];

const guides: DocLink[] = [
  { label: "Using Webhooks", href: "/resources/documentation#webhooks", soon: true },
  { label: "Environment & Secrets", href: "/resources/documentation#env", soon: true },
  { label: "Rate Limits", href: "/resources/documentation#limits", soon: true },
  { label: "Errors & Retries", href: "/resources/documentation#errors", soon: true },
];

const sdks: DocLink[] = [
  { label: "JavaScript / TypeScript", href: "/resources/documentation#sdk-js", soon: true },
  { label: "Python", href: "/resources/documentation#sdk-py", soon: true },
  { label: "cURL examples", href: "/resources/documentation#curl", soon: true },
];

export default function Documentation() {
  // Force LIGHT mode on docs
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const pool = [...gettingStarted, ...guides, ...sdks];
    return pool.filter((x) => x.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <SEO
        title="Documentation — Anoiak"
        description="Guides, concepts, and references for working with Anoiak products and APIs."
        canonicalUrl="https://anoiak.com/resources/documentation"
        ogImage="/og/og-default.jpg"
      />

      <Navigation />

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
          <BookOpen className="h-4 w-4" />
          Documentation
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Build with Anoiak
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Start fast with quickstarts and examples. Explore core concepts and API
          references as you scale.
        </p>

        {/* Search */}
        <div className="mt-6 relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs (e.g., quick start, webhooks, errors)…"
            className="w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 py-3 outline-none ring-0 focus:border-slate-300 shadow-sm"
            aria-label="Search documentation"
          />
          {!!results.length && (
            <div className="absolute mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {results.map((r) => (
                <Link key={r.label} href={r.href}>
                  <a className="flex items-center justify-between px-4 py-2 hover:bg-slate-50">
                    <span>{r.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-[240px,1fr] gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <Section title="Getting Started" items={gettingStarted} />
            <Section title="Guides" items={guides} />
            <Section title="SDKs & Examples" items={sdks} />
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm text-slate-600">Need help?</div>
              <div className="mt-2 flex gap-2">
                <Link href="/resources/support-center">
                  <Button variant="secondary" size="sm">
                    <LifeBuoy className="h-4 w-4 mr-1" />
                    Support
                  </Button>
                </Link>
                <Link href="/resources/api-reference">
                  <Button size="sm">
                    <Code className="h-4 w-4 mr-1" />
                    API
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <section>
          {/* Quick links */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <QuickCard
              icon={Rocket}
              title="Quick Start"
              desc="Run the 5-minute setup and make your first request."
              href="#quickstart"
              tag="New"
            />
            <QuickCard
              icon={Code}
              title="API Reference"
              desc="Schemas, endpoints, and example requests."
              href="/resources/api-reference"
            />
            <QuickCard
              icon={FileText}
              title="Concepts"
              desc="Understand models, auth, limits, and retries."
              href="#overview"
            />
          </div>

          {/* Content sections (mix of real & coming soon) */}
          <div className="mt-10 space-y-10">
            <DocBlock id="overview" title="Overview & Concepts">
              <p className="text-slate-700">
                This section explains core ideas for building with Anoiak products:
                environments, authentication, rate limits, and error handling. Use
                the Quick Start below to get hands-on quickly, then come back here
                for deeper detail.
              </p>
              <ComingSoon />
            </DocBlock>

            <DocBlock id="quickstart" title="Quick Start (5-minute)">
              <p className="text-slate-700">
                Get productive fast with a minimal sample. Pick your stack, copy the
                snippet, and you’re live.
              </p>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="qs-js">
                    <AccordionTrigger className="px-4 py-3">JavaScript (fetch)</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <CodeBlock
                        code={`fetch("https://api.anoiak.com/v1/echo", {
  method: "POST",
  headers: {
    "Authorization": "Bearer <YOUR_API_KEY>",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: "hello anoiak" })
}).then(r => r.json()).then(console.log);`}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="qs-py">
                    <AccordionTrigger className="px-4 py-3">Python (requests)</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <CodeBlock
                        code={`import requests, json

headers = {
  "Authorization": "Bearer <YOUR_API_KEY>",
  "Content-Type": "application/json"
}

resp = requests.post(
  "https://api.anoiak.com/v1/echo",
  headers=headers,
  json={"message": "hello anoiak"}
)
print(resp.status_code, resp.json())`}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </DocBlock>

            <DocBlock id="auth" title="Authentication">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="env" title="Environment & Secrets">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="webhooks" title="Webhooks">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="limits" title="Rate Limits">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="errors" title="Errors & Retries">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="sdk-js" title="JavaScript / TypeScript SDK">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="sdk-py" title="Python SDK">
              <ComingSoon />
            </DocBlock>

            <DocBlock id="curl" title="cURL Examples">
              <ComingSoon />
            </DocBlock>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ───────────────── helpers / small components ─────────────── */

function QuickCard({
  icon: Icon,
  title,
  desc,
  href,
  tag,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
  tag?: string;
}) {
  return (
    <Link href={href}>
      <a className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-slate-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{title}</h3>
              {tag && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {tag}
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </a>
    </Link>
  );
}

function Section({ title, items }: { title: string; items: DocLink[] }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((x) => (
          <li key={x.label}>
            <Link href={x.href}>
              <a className="block rounded-md px-3 py-2 text-sm hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200">
                <span>{x.label}</span>
                {x.soon && (
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    soon
                  </span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function ComingSoon() {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
      Content coming soon. If you need this now, please visit{" "}
      <Link href="/resources/support-center" className="underline text-blue-600">
        Support Center
      </Link>{" "}
      or the{" "}
      <Link href="/resources/api-reference" className="underline text-blue-600">
        API Reference
      </Link>
      .
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-lg bg-slate-900 text-slate-100 text-sm p-4 overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}
