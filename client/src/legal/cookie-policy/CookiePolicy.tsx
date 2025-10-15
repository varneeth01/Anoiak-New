  import React, { useEffect } from "react";
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import SEO from "@/components/SEO";
// import InlineSearch from "@/components/InlineSearch";
// import { BASE_PAGES as PAGES } from "@/pages/not-found-pages"; 

  export default function CookiePolicy() {
    useEffect(() => {
      document.documentElement.classList.remove("dark");
    }, []);

    const today = new Date();
    const iso = today.toISOString().slice(0, 10);

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
        <SEO
          title="Cookie Policy — Anoiak"
          description="Learn how Anoiak uses cookies and similar technologies to improve your browsing experience and personalize content."
          canonicalUrl="https://anoiak.com/legal/cookie-policy"
          ogImage="/og/og-default.jpg"
        />

        <Navigation />

        <main className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-slate-600 mb-8">
            Effective Date:{" "}
            <time dateTime={iso}>
              {today.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>

          <section className="space-y-8 leading-relaxed text-slate-700">
            <p>
              This Cookie Policy explains how <strong>Anoiak</strong> (“we,” “our,” or “us”) uses
              cookies and similar technologies when you visit our website
              (<a href="https://anoiak.com" className="text-blue-600 underline">
                www.anoiak.com
              </a>) or interact with our online services. It describes what cookies are,
              how we use them, and how you can control your preferences.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help us make our website function properly, analyze usage, enhance
              security, and provide a better user experience.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              2. Types of Cookies We Use
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for website operation — enabling navigation,
                authentication, and security.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Collect anonymous data on how visitors use our
                website to improve speed, functionality, and user experience.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand traffic sources and user
                behavior through tools such as Google Analytics.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember preferences such as region, theme, and
                language.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used to deliver personalized content and ads on
                our site or partner platforms (only when explicitly enabled).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900">
              3. How We Use Cookies
            </h2>
            <p>
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep our website secure and operational.</li>
              <li>Understand user interactions and improve site performance.</li>
              <li>Remember user preferences and login sessions.</li>
              <li>Analyze traffic using trusted analytics providers.</li>
              <li>Display relevant marketing or service information.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900">
              4. Third-Party Cookies
            </h2>
            <p>
              We may allow trusted third-party partners (e.g., Google Analytics, YouTube embeds,
              or marketing tools) to set cookies on your device for analytics, media playback, or
              personalized experiences. These providers have their own privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              5. Managing Your Cookie Preferences
            </h2>
            <p>
              You can manage, disable, or delete cookies through your browser settings. Most
              browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Block all cookies or only third-party cookies.</li>
              <li>Delete cookies automatically when you close the browser.</li>
              <li>Receive a warning before a cookie is stored.</li>
            </ul>
            <p>
              To learn more about managing cookies, visit{" "}
              <a
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.allaboutcookies.org
              </a>.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              6. Consent and Updates
            </h2>
            <p>
              By continuing to browse our site, you consent to our use of cookies as described in
              this policy. If you withdraw consent or disable certain cookies, some features of
              the site may not function correctly.
            </p>
            <p>
              We may update this Cookie Policy periodically to reflect operational, legal, or
              regulatory changes. Updates will be posted on this page with a new “Effective Date.”
            </p>

            <h2 className="text-2xl font-semibold text-slate-900">
              7. Contact Us
            </h2>
            <p>
              For questions about this Cookie Policy or how cookies are used on our site, please
              contact us at{" "}
              <a
                href="mailto:varneeth@anoiak.com"
                className="text-blue-600 underline"
              >
                varneeth@anoiak.com
              </a>.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
