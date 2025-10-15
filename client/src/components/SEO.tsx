import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  image?: string;
  canonicalUrl?: string;
  canonical?: string;
  faviconPngHref?: string;  
  faviconIcoHref?: string;       
  appleTouchIconHref?: string;     
  manifestHref?: string;           
  themeColor?: string;          
  twitterUrl?: string;       
}

export default function SEO({
  title = 'Anoiak',
  description = 'Anoiak delivers AI-driven innovation through custom LLMs, intelligent agents, and scalable web & marketing solutions for modern businesses.',
  keywords = 'Anoiak, anoiak, Varneeth, Lohith, AI development, artificial intelligence, machine learning, deep learning, LLM applications, generative AI, AI consulting, AI solutions, AI strategy, AI innovation, AI agents, RAG systems, custom AI, AI automation, marketing automation, AI chatbots, intelligent agents, AI engineering, MLOps, NLP, computer vision, speech recognition, multimodal AI, natural language processing, AI product development, AI integration, web development, full-stack development, SaaS platforms, data engineering, data science, predictive analytics, AI for business, AI transformation, enterprise AI, AI startups, AI software, AI consulting company, AI research, AI infrastructure, model fine-tuning, API integration, cloud AI, edge AI, AI deployment, reinforcement learning, supervised learning, AI-powered marketing, AI optimization, AI-driven growth, innovation lab, technology consulting, automation systems',
  ogImage = 'https://anoiak.com/og-image.jpg',
  canonicalUrl = 'https://anoiak.com/',
  faviconPngHref = '/anoiak.png',
  faviconIcoHref = '/favicon.ico',
  appleTouchIconHref = '/apple-touch-icon.png',
  manifestHref = '/site.webmanifest',
  themeColor = '#0B132B',
  twitterUrl = 'https://x.com/anoiakindia'
}: SEOProps) {

  useEffect(() => {
    /** ---------- Helpers ---------- */
    const setTitle = (text: string) => {
      const titles = document.getElementsByTagName('title');
      for (let i = 1; i < titles.length; i++) titles[i].parentNode?.removeChild(titles[i]);
      if (titles.length === 0) {
        const t = document.createElement('title');
        document.head.appendChild(t);
      }
      document.title = text;
    };

    const upsertMeta = (key: 'name' | 'property', id: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${key}="${id}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(key, id);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Unique selectors so PNG + ICO + apple icon can co-exist
    const upsertLink = (selector: string, attrs: Record<string, string>) => {
      let link = document.querySelector<HTMLLinkElement>(selector);
      if (!link) {
        link = document.createElement('link');
        document.head.appendChild(link);
      }
      Object.entries(attrs).forEach(([k, v]) => link!.setAttribute(k, v));
    };

    const upsertJsonLd = (id: string, data: any) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    /** ---------- Title ---------- */
    setTitle(title);

    /** ---------- Meta Basics ---------- */
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    upsertMeta('name', 'googlebot', 'index, follow');
    upsertMeta('name', 'author', 'Anoiak - Varneeth Varma & Lohith');
    upsertMeta('name', 'language', 'English');
    upsertMeta('name', 'theme-color', themeColor);

    /** ---------- Open Graph ---------- */
    upsertMeta('property', 'og:site_name', 'Anoiak');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonicalUrl.endsWith('/') ? canonicalUrl : `${canonicalUrl}/`);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');

    /** ---------- Twitter ---------- */
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:url', twitterUrl);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    /** ---------- Canonical ---------- */
    const canon = canonicalUrl.endsWith('/') ? canonicalUrl : `${canonicalUrl}/`;
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canon });

    /** ---------- Icons / Manifest (favicons) ---------- */
    // PNG favicon
    upsertLink('link[rel="icon"][type="image/png"]', {
      rel: 'icon',
      type: 'image/png',
      href: faviconPngHref
    });
    // ICO fallback (no type attribute selector)
    upsertLink('link[rel="icon"]:not([type])', {
      rel: 'icon',
      href: faviconIcoHref
    });
    // Apple touch icon
    upsertLink('link[rel="apple-touch-icon"]', {
      rel: 'apple-touch-icon',
      href: appleTouchIconHref
    });
    // Web manifest
    upsertLink('link[rel="manifest"]', {
      rel: 'manifest',
      href: manifestHref
    });

    /** ---------- JSON-LD ---------- */
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Anoiak",
      "alternateName": ["anoiak", "Anoiak"],
      "url": "https://anoiak.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://anoiak.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Anoiak",
      "url": "https://anoiak.com/",
      "logo": "https://anoiak.com/anoiak.png", // <-- uses your PNG logo
      "description": "Leading AI innovation company specializing in custom LLM applications, intelligent agents, web development, and growth marketing solutions.",
      "foundingDate": "2024",
      "founders": [
        { "@type": "Person", "name": "Varneeth Varma Nandimandalam", "jobTitle": "Founder & CEO" },
        { "@type": "Person", "name": "Lohith", "jobTitle": "Co-founder & CTO" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7981399132",
        "contactType": "customer service",
        "email": "varneeth@anoiak.com",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://linkedin.com/company/anoiak",
        "https://twitter.com/anoiakindia",
        "https://github.com/anoiakindia"
      ]
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Development & Consulting",
      "provider": { "@type": "Organization", "name": "Anoiak" },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI & Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Services", "description": "Custom LLM apps, RAG systems, fine-tuning, NLP, vision, MLOps" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Next.js/React full-stack, Node.js APIs, cloud on AWS/GCP/Azure" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Solutions", "description": "Brand strategy, SEO/ASO, content systems, CRO" } }
        ]
      }
    };

    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Suviksha AI",
          "applicationCategory": "EducationalApplication",
          "description": "AI-powered personalized learning with multilingual tutoring and exam prep",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Miruthan AI",
          "applicationCategory": "BusinessApplication",
          "description": "ATS-compliant resume analysis and optimization",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What AI services does Anoiak offer?", "acceptedAnswer": { "@type": "Answer", "text": "Custom LLM apps and agents, RAG systems, NLP/vision/speech pipelines, and full MLOps." } },
        { "@type": "Question", "name": "Who are the founders of Anoiak?", "acceptedAnswer": { "@type": "Answer", "text": "Varneeth Varma Nandimandalam (CEO) and Lohith (CTO)." } },
        { "@type": "Question", "name": "What are Anoiak's flagship AI products?", "acceptedAnswer": { "@type": "Answer", "text": "Suviksha AI (education) and Miruthan AI (ATS/resume)." } },
        { "@type": "Question", "name": "Which industries does Anoiak serve?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS, education, fintech, healthcare, e-commerce, consumer apps, and enterprise platforms." } },
        { "@type": "Question", "name": "Do you build Retrieval-Augmented Generation (RAG) systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, including ingestion, chunking, embeddings, routing, guardrails, evaluation, and observability." } },
        { "@type": "Question", "name": "Can Anoiak fine-tune or customize LLMs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We support prompt engineering, adapters, LoRA, instruction tuning, and evaluation for quality." } },
        { "@type": "Question", "name": "What tech stack do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Python, Node.js, TypeScript, Next.js/React, vector DBs, cloud GPUs, orchestration and MLOps tooling." } },
        { "@type": "Question", "name": "Do you offer on-premise or VPC deployments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We support on-prem, private cloud, and VPC isolation with customer-managed keys." } },
        { "@type": "Question", "name": "How do you handle data privacy and security?", "acceptedAnswer": { "@type": "Answer", "text": "Data minimization, encryption in transit and at rest, role-based access, audit logs, and SOC2-aligned practices." } },
        { "@type": "Question", "name": "Can you integrate with our existing tools?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate with CRMs, data warehouses, analytics, help desks, and internal APIs." } },
        { "@type": "Question", "name": "What engagement models are available?", "acceptedAnswer": { "@type": "Answer", "text": "Fixed-scope projects, monthly retainers, and dedicated squads for ongoing engineering." } },
        { "@type": "Question", "name": "What is a typical delivery timeline?", "acceptedAnswer": { "@type": "Answer", "text": "Rapid POC in 2–4 weeks, MVP in 6–10 weeks, and iterative releases thereafter." } },
        { "@type": "Question", "name": "Do you provide maintenance and SLAs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer production support, SLAs, monitoring, and continuous improvements." } },
        { "@type": "Question", "name": "How do you measure AI quality?", "acceptedAnswer": { "@type": "Answer", "text": "We track relevance, hallucination rate, latency, cost, and task success with offline and online evals." } },
        { "@type": "Question", "name": "What are your pricing options?", "acceptedAnswer": { "@type": "Answer", "text": "Transparent estimates by scope, or subscription retainers for ongoing work. Contact us for a proposal." } },
        { "@type": "Question", "name": "Where is Anoiak located and what time zones do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "We operate globally and collaborate across US and India time zones." } },
        { "@type": "Question", "name": "How do we get started?", "acceptedAnswer": { "@type": "Answer", "text": "Share your goals and data sources. We propose a roadmap, estimate, and a rapid POC plan." } }
      ]
    };

    upsertJsonLd('website-schema', websiteSchema);
    upsertJsonLd('organization-schema', organizationSchema);
    upsertJsonLd('service-schema', serviceSchema);
    upsertJsonLd('products-schema', productsSchema);
    upsertJsonLd('faq-schema', faqSchema);
  }, [title, description, keywords, ogImage, canonicalUrl, faviconPngHref, faviconIcoHref, appleTouchIconHref, manifestHref, themeColor, twitterUrl]);

  return null;
}
