import { useEffect } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  // Force LIGHT theme for this page only
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      /* no-op: don't re-add dark here; your Home page adds it itself */
    };
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(56,189,248,.20),rgba(255,255,255,0)_60%),linear-gradient(180deg,#ffffff, #f6f9ff)] text-slate-900">
      <SEO
        title="Privacy Policy | Anoiak"
        description="How Anoiak collects, uses, and protects personal information on anoiak.com. Product users must review the privacy policy specific to each Anoiak product."
        canonicalUrl="https://anoiak.com/privacy-policy"
        ogImage="/ANOIAK.png"
        // prefer a light color on this page
        themeColor="#ffffff"
      />

      {/* fixed header space compensation */}
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-6 md:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm text-slate-500">Legal</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-slate-500">
              Effective date: <span className="font-medium text-slate-700">October 15, 2025</span>
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5">
              <p className="text-[15px] leading-7 text-slate-700">
                This Privacy Policy explains how <strong>Anoiak</strong> (“we”, “us”) collects, uses,
                stores, and protects personal information via our corporate website{" "}
                <a className="underline decoration-slate-300 hover:text-slate-900" href="https://anoiak.com">
                  anoiak.com
                </a>{" "}
                and related corporate communications.
              </p>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                <strong>Important:</strong> Each Anoiak product or platform (including{" "}
                <em>Suviksha AI</em> and <em>Miruthan AI</em>) has its{" "}
                <strong>own privacy policy</strong>. Before using any product, please review the
                product-specific policy on its website or inside the app.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mt-10 px-6 md:px-10">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_280px]">
            {/* Content */}
            <article className="prose prose-slate max-w-none">
              <h2>1. Entity & Contact</h2>
              <p>
                <strong>Business:</strong> Anoiak • <strong>Address:</strong> Bangalore, Karnataka, India
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@anoiak.com">privacy@anoiak.com</a> •{" "}
                <strong>Phone:</strong> +91 79813 99132
              </p>

              <h2>2. Scope</h2>
              <p>
                This policy covers <em>anoiak.com</em>, corporate inquiries, proposals, partnerships,
                and vendor/partner communications. It does <strong>not</strong> cover independent
                product platforms (each has a different policy).
              </p>

              <h2>3. Information We Collect</h2>
              <ul>
                <li>
                  <strong>Information you provide:</strong> name, email, phone, company, project details,
                  files you share.
                </li>
                <li>
                  <strong>Automatic data:</strong> IP, device/browser details, pages visited, and
                  basic analytics.
                </li>
                <li>
                  <strong>Cookies/analytics:</strong> used to improve experience and performance. You can
                  manage cookies in your browser.
                </li>
              </ul>

              <h2>4. How We Use Information</h2>
              <ul>
                <li>Respond to inquiries, proposals, and partnerships.</li>
                <li>Operate, secure, and improve our website and services.</li>
                <li>Meet legal, tax, and security obligations and prevent abuse.</li>
              </ul>
              <p>We do <strong>not</strong> sell or rent personal data.</p>

              <h2>5. Legal Bases</h2>
              <p>
                We rely on consent, contractual necessity, legal obligations, and legitimate interests
                (balanced with your rights).
              </p>

              <h2>6. Sharing & Disclosure</h2>
              <p>
                Limited sharing with vetted processors (hosting, analytics, email, security) under
                binding agreements; with authorities if legally required.
              </p>

              <h2>7. International Transfers</h2>
              <p>
                Where data is processed outside India/EU, we use appropriate safeguards (e.g., SCCs) in
                line with DPDP/GDPR requirements.
              </p>

              <h2>8. Retention</h2>
              <p>
                We retain data only as long as necessary for the purposes described or as required by
                law, then delete or anonymize it.
              </p>

              <h2>9. Security</h2>
              <p>
                Industry-standard safeguards (encryption in transit, access controls, monitoring,
                incident response). No system is 100% secure.
              </p>

              <h2>10. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may request access, correction, deletion,
                restriction, portability, or to withdraw consent. Email{" "}
                <a href="mailto:privacy@anoiak.com">privacy@anoiak.com</a>.
              </p>

              <h2>11. Product-Specific Policies</h2>
              <p>
                Each Anoiak product has its own privacy policy. Always verify and agree to the
                product-specific policy before use.
              </p>

              <h2>12. Children’s Privacy</h2>
              <p>Our corporate site is not intended for individuals under 16.</p>

              <h2>13. Updates</h2>
              <p>
                We may update this policy periodically. Material changes will be communicated on this
                page or via notice. Continued use signifies acceptance.
              </p>

              <h2>14. Governing Law</h2>
              <p>
                This policy is governed by the laws of India. Exclusive jurisdiction: courts of
                Bangalore, Karnataka.
              </p>

              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Anoiak. All rights reserved.
              </p>
            </article>

            {/* Right rail / quick nav */}
            <aside className="hidden md:block">
              <div className="sticky top-24 rounded-xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  On this page
                </p>
                <nav className="mt-3 space-y-2 text-sm">
                  {[
                    "Entity & Contact",
                    "Scope",
                    "Information We Collect",
                    "How We Use Information",
                    "Legal Bases",
                    "Sharing & Disclosure",
                    "International Transfers",
                    "Retention",
                    "Security",
                    "Your Rights",
                    "Product-Specific Policies",
                    "Children’s Privacy",
                    "Updates",
                    "Governing Law",
                  ].map((t) => (
                    <a
                      key={t}
                      href={`#${t.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const id = t.toLowerCase().replace(/[^a-z]+/g, "-");
                        const el = Array.from(
                          document.querySelectorAll<HTMLHeadingElement>('h2')
                        ).find(
                          (h) => h.textContent?.toLowerCase().replace(/[^a-z]/g, '-') === id
                        );
                        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
                      }}
                      className="block text-slate-600 hover:text-slate-900"
                    >
                      {t}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
