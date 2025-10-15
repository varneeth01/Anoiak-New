import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import {
  Search,
  Mail,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ⬇️ Chat UI (uses the buttons & floating launcher you created in SupportChat.tsx)
import {
  SupportChatButtons,
  FloatingSupportChat,
} from "@/resources/support-center/SupportChat";

type FAQ = { q: string; a: React.ReactNode; tags?: string[] };

const faqs: FAQ[] = [
  {
    q: "How quickly do you respond to support requests?",
    a: (
      <>
        We typically reply within <strong>1–2 business days</strong>. For priority or
        production incidents, response is faster based on the support level in your
        agreement. For urgent issues, use the “Report an Incident” button below.
      </>
    ),
    tags: ["sla", "response", "support"],
  },
  {
    q: "Do you provide refunds?",
    a: (
      <>
        As stated in our Terms, <strong>Anoiak is not liable for refunds or damages</strong>.
        Refunds or compensation are only considered if a purchased service was{" "}
        <strong>not delivered</strong>. See{" "}
        <Link href="/terms-of-service" className="underline text-blue-600">
          Terms of Service
        </Link>{" "}
        for details.
      </>
    ),
    tags: ["refund", "terms", "billing"],
  },
  {
    q: "Where can I find product documentation?",
    a: (
      <>
        Head to our{" "}
        <Link href="/resources/documentation" className="underline text-blue-600">
          Documentation
        </Link>{" "}
        for setup guides, API usage, and examples. For code-level questions, include
        logs and reproducible steps in your ticket.
      </>
    ),
    tags: ["docs", "api", "developer"],
  },
  {
    q: "How do I report a security vulnerability?",
    a: (
      <>
        Email{" "}
        <a href="mailto:security@anoiak.com" className="underline text-blue-600">
          security@anoiak.com
        </a>{" "}
        with a detailed report (steps, affected components, and impact). Please avoid
        public disclosure until we confirm a fix. We appreciate responsible disclosure.
      </>
    ),
    tags: ["security", "vulnerability"],
  },
  {
    q: "Do you support on-prem or VPC deployments?",
    a: (
      <>
        Yes. We offer VPC / on-prem options with customer-managed keys. Contact us
        to discuss architecture and SLAs.
      </>
    ),
    tags: ["vpc", "on-prem", "deployment"],
  },
];

export default function SupportCenter() {
  // Force LIGHT theme on this page
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const [query, setQuery] = useState("");
  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(q) ||
        (f.tags ?? []).some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const todayIso = new Date().toISOString();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <SEO
        title="Support Center — Anoiak"
        description="Get help with Anoiak products and services. Search FAQs, browse documentation, chat with our AI bot, or contact a support agent."
        canonicalUrl="https://anoiak.com/resources/support-center"
        ogImage="/og/og-default.jpg"
      />

      <Navigation />

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
          <LifeBuoy className="h-4 w-4" />
          Support Center
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          How can we help?
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Explore documentation and FAQs, or reach out to our team. We aim to reply
          within <strong>1–2 business days</strong>.
        </p>

        {/* Search */}
        <div className="mt-6 relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs (e.g., refund, API, VPC, SLA)…"
            className="w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 py-3 outline-none ring-0 focus:border-slate-300 shadow-sm"
            aria-label="Search FAQs"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Quick actions */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ActionCard
            icon={BookOpen}
            title="Browse Documentation"
            description="Guides, API references, and implementation tips."
          >
            <Link href="/resources/documentation">
              <Button className="mt-3">Open Docs</Button>
            </Link>
          </ActionCard>

          <ActionCard
            icon={MessageSquare}
            title="Open a Support Ticket"
            description="Having trouble? Send us details and logs."
          >
            <a href="mailto:support@anoiak.com?subject=Support%20Ticket%20Request">
              <Button className="mt-3" variant="secondary">
                Email Support
              </Button>
            </a>
          </ActionCard>

          <ActionCard
            icon={AlertCircle}
            title="Report an Incident"
            description="Production-impacting issues and outages."
            accent="bg-red-50 border-red-200"
          >
            <a href="mailto:incident@anoiak.com?subject=Production%20Incident">
              <Button className="mt-3" variant="destructive">
                Report Now
              </Button>
            </a>
          </ActionCard>
        </section>

        {/* Chat options (AI Bot + Support Agent) */}
        <section className="mt-6">
          <SupportChatButtons />
        </section>

        {/* Status */}
        <section className="mt-10">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div>
              <p className="font-medium text-emerald-800">All systems operational</p>
              <p className="text-sm text-emerald-700">
                Last updated <time dateTime={todayIso}>{new Date().toLocaleString()}</time>.
                For historical uptime and incident history, contact support.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-slate-600">
            Can’t find what you’re looking for?{" "}
            <a className="underline text-blue-600" href="mailto:support@anoiak.com">
              Contact Support
            </a>
            .
          </p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white">
            <Accordion type="single" collapsible className="divide-y">
              {filteredFaqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="px-4 py-3 text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-slate-700">
                    {f.a}
                    {!!f.tags?.length && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {f.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-600"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
              {!filteredFaqs.length && (
                <div className="p-4 text-slate-500">No results. Try another search.</div>
              )}
            </Accordion>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <ContactCard
            icon={Mail}
            title="General Support"
            email="support@anoiak.com"
            note="We reply within 1–2 business days."
          />
          <ContactCard
            icon={Mail}
            title="Security"
            email="security@anoiak.com"
            note="For vulnerability reports and security questions."
          />
        </section>
      </main>

      {/* Floating chat launcher (appears bottom-right) */}
      <FloatingSupportChat />

      <Footer />
    </div>
  );
}

/** ---------- Small presentational components ---------- */
function ActionCard({
  icon: Icon,
  title,
  description,
  children,
  accent = "bg-white border-slate-200",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  children?: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className={`rounded-xl border ${accent} p-5`}>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-slate-600">{description}</p>
      {children}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  email,
  note,
}: {
  icon: React.ElementType;
  title: string;
  email: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
        <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-slate-600">
        Email:{" "}
        <a href={`mailto:${email}`} className="underline text-blue-600">
          {email}
        </a>
      </p>
      {note && <p className="text-sm text-slate-500 mt-1">{note}</p>}
    </div>
  );
}
