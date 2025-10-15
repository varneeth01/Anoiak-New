import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/**
 * TERMS OF SERVICE (Anoiak)
 * - Light theme to match your homepage
 * - Sticky Table of Contents with smooth scroll
 * - Accessible headings and anchor ids
 */

const SECTIONS = [
  "Agreement to Terms",
  "Who We Are",
  "Using Our Services",
  "Accounts & Security",
  "Intellectual Property",
  "Acceptable Use",
  "Fees, Payments & Taxes",
  "Confidentiality",
  "Privacy",
  "Third-Party Services",
  "Warranties & Disclaimers",
  "Limitation of Liability",
  "Indemnification",
  "Term, Suspension & Termination",
  "Beta Features",
  "Publicity",
  "Compliance & Export",
  "Governing Law & Disputes",
  "Changes to These Terms",
  "Contact Us",
] as const;

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function TermsOfService() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const today = new Date();
  const iso = today.toISOString().slice(0, 10);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 90; // account for fixed navbar
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <SEO
        title="Terms of Service — Anoiak"
        description="Read the Terms of Service that govern your use of Anoiak products and services."
        keywords="Anoiak, Terms, Terms of Service, ToS, legal"
        ogImage="/og/og-default.jpg"
        canonicalUrl="https://anoiak.com/terms-of-service"
      />

      <Navigation />

      {/* Header */}
      <header className="relative pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
            <span className="hover:underline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </span>{" "}
            <span className="mx-2">›</span> Terms of Service
          </nav>

          <p className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium mb-4">
            Legal
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-3 text-slate-600">
            Effective date: <time dateTime={iso}>{today.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</time>
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Article */}
          <article className="lg:col-span-8 space-y-10 leading-relaxed text-slate-700">
            {SECTIONS.map((title) => {
              const id = slugify(title);
              return (
                <section key={id} id={id} className="scroll-mt-28">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{title}</h2>

                  {/* Content blocks per section */}
                  {title === "Agreement to Terms" && (
                    <p>
                      These Terms of Service (“Terms”) form a binding agreement between you and{" "}
                      <strong>Anoiak</strong> (“we”, “us”, or “our”) and govern your access to and use of our
                      websites, products, and services (collectively, the “Services”). By using the Services,
                      you agree to these Terms. If you are accepting on behalf of an organization, you
                      represent that you have authority to bind that organization. If you do not agree,
                      do not use the Services.
                    </p>
                  )}

                  {title === "Who We Are" && (
                    <p>
                      Anoiak is an AI innovation company providing AI engineering, web development, and growth
                      solutions. Contact: <a className="text-blue-700 underline" href="mailto:varneeth@anoiak.com">varneeth@anoiak.com</a>,
                      Bangalore, India.
                    </p>
                  )}

                  {title === "Using Our Services" && (
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You must comply with these Terms and all applicable laws.</li>
                      <li>You will provide accurate information and keep your account secure.</li>
                      <li>You are responsible for activities under your account and for your content.</li>
                    </ul>
                  )}

                  {title === "Accounts & Security" && (
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Keep credentials confidential and use strong passwords.</li>
                      <li>Notify us immediately of any unauthorized use or breach.</li>
                      <li>We may suspend accounts for suspected abuse or security risks.</li>
                    </ul>
                  )}

                  {title === "Intellectual Property" && (
                    <p>
                      The Services and all related materials are owned or licensed by Anoiak and protected by
                      IP laws. No rights are granted except as expressly set out in these Terms. You retain ownership
                      of your content; you grant us the limited rights necessary to operate the Services.
                    </p>
                  )}

                  {title === "Acceptable Use" && (
                    <ul className="list-disc pl-6 space-y-2">
                      <li>No illegal, harmful, infringing, or harassing activity.</li>
                      <li>No unauthorized scraping, reverse engineering, or disrupting the Service.</li>
                      <li>No attempts to bypass security or rate limits.</li>
                    </ul>
                  )}

                  {title === "Fees, Payments & Taxes" && (
                    <p>
                      Paid features may require fees billed per agreed plan or order. You authorize us
                      or our processors to charge your payment method. Prices may change with notice.
                      You are responsible for applicable taxes, except those based on our net income.
                    </p>
                  )}

                  {title === "Confidentiality" && (
                    <p>
                      Each party may access the other’s confidential information. The receiving party will protect it
                      with reasonable care and use it only as permitted. This does not apply to information that is public,
                      independently developed, or lawfully obtained from a third party.
                    </p>
                  )}

                  {title === "Privacy" && (
                    <p>
                      Our processing of personal data is described in our{" "}
                      <a className="text-blue-700 underline" href="/privacy-policy">Privacy Policy</a>. Anoiak products may
                      have separate policies—please review the applicable policy before use.
                    </p>
                  )}

                  {title === "Third-Party Services" && (
                    <p>
                      The Services may interoperate with third-party products. We are not responsible for third-party
                      terms or actions. Your use of third-party services is governed by their terms.
                    </p>
                  )}

                  {title === "Warranties & Disclaimers" && (
                    <p>
                      THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW,
                      WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
                      PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE OPERATION.
                    </p>
                  )}

                  {title === "Limitation of Liability" && (
                    <>
                      <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANOIAK WILL NOT BE LIABLE FOR INDIRECT,
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS,
                        REVENUE, DATA, OR BUSINESS, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL LIABILITY UNDER
                        THESE TERMS WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO US FOR THE SERVICES IN THE 3 MONTHS
                        BEFORE THE EVENT GIVING RISE TO LIABILITY.
                      </p>

                      <p className="mt-4">
                        <strong>Refunds & Compensation Policy:</strong> Anoiak is not liable for any refunds,
                        reimbursements, or compensation related to dissatisfaction, indirect damages, or perceived
                        business loss. Refunds will only be provided when a paid service has not been delivered as
                        explicitly agreed upon in writing. Once a service or deliverable has been provided, all
                        payments are considered final and non-refundable. Any exceptions to this policy must be
                        approved in writing by Anoiak’s management team.
                      </p>

                      <p className="mt-4">
                        You acknowledge that the services provided by Anoiak involve AI-driven systems, software,
                        and integrations that may depend on third-party platforms. Anoiak will not be held responsible
                        for performance issues or damages resulting from external dependencies, outages, or client-side
                        misuse of our deliverables.
                      </p>
                      
                      <p>
                        Anoiak does not guarantee specific business outcomes, revenue generation, or customer acquisition
                        as a result of using its services or products.
                      </p>
                    </>
                  )}


                  {title === "Indemnification" && (
                    <p>
                      You will defend, indemnify, and hold harmless Anoiak and its affiliates from and against
                      claims, losses, and expenses (including reasonable attorneys’ fees) arising from your
                      content, your use of the Services, or your breach of these Terms.
                    </p>
                  )}

                  {title === "Term, Suspension & Termination" && (
                    <p>
                      These Terms apply while you use the Services. We may suspend or terminate access for
                      non-payment, suspected abuse, legal requests, or risk to the Service. Upon termination,
                      your rights to use the Services cease, but sections intended to survive will remain in effect.
                    </p>
                  )}

                  {title === "Beta Features" && (
                    <p>
                      We may offer previews or beta features. They are provided “as is,” may change without notice,
                      and may be withdrawn at any time.
                    </p>
                  )}

                  {title === "Publicity" && (
                    <p>
                      With your consent, we may use your name and marks to identify you as a customer in marketing
                      materials. You may revoke consent with reasonable notice.
                    </p>
                  )}

                  {title === "Compliance & Export" && (
                    <p>
                      You must comply with applicable laws, including export and sanctions regulations. You represent
                      that you are not subject to sanctions or located in a restricted jurisdiction.
                    </p>
                  )}

                  {title === "Governing Law & Disputes" && (
                    <p>
                      These Terms are governed by the laws of India, without regard to conflict-of-laws principles.
                      Courts located in Bangalore, India will have exclusive jurisdiction, unless mandatory law provides otherwise.
                    </p>
                  )}

                  {title === "Changes to These Terms" && (
                    <p>
                      We may update these Terms from time to time. Material changes will be notified via the Service
                      or email. Your continued use after the effective date constitutes acceptance.
                    </p>
                  )}

                  {title === "Contact Us" && (
                    <p>
                      Questions? Contact <a className="text-blue-700 underline" href="mailto:varneeth@anoiak.com">varneeth@anoiak.com</a>.
                    </p>
                  )}
                </section>
              );
            })}
          </article>

          {/* Right: Sticky ToC */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
                <h3 className="font-semibold text-slate-900 mb-3">On this page</h3>
                <nav className="space-y-2 text-sm" aria-label="Table of contents">
                  {SECTIONS.map((t) => {
                    const id = slugify(t);
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToId(id);
                        }}
                        className="block text-slate-600 hover:text-slate-900"
                      >
                        {t}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
