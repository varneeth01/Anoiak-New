import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'wouter';
import React from 'react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'AI Services', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Marketing Solutions', href: '#services' },
      { name: 'Consulting', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '/blog' }, // point to your blog index
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Case Studies', href: '#projects' },
      { name: 'Documentation', href: '/resources/documentation' },
      { name: 'API Reference', href: '/resources/api-reference' },
      { name: 'Support Center', href: '/resources/support-center' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },     // <-- route
      { name: 'Terms of Service', href: '/terms-of-service' }, // <-- adjust if different
      { name: 'Cookie Policy', href: '/cookie-policy' }, // <-- adjust if different
      { name: 'Data Processing', href: '/legal/data-processing' }, // <-- adjust if different
    ],
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#contact', label: 'Email' },
];

// Helper: smooth-scroll to in-page sections (#id)
function scrollToHash(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const offset = 80; // header height
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function FooterNavLink({ name, href }: { name: string; href: string }) {
  const isHash = href.startsWith('#');
  const isAppRoute = href.startsWith('/');

  if (isHash) {
    return (
      <button
        onClick={() => scrollToHash(href)}
        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
        data-testid={`footer-link-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {name}
      </button>
    );
  }

  if (isAppRoute) {
    return (
      <Link
        href={href}
        onClick={() => {
          // smooth scroll to top after route change
          requestAnimationFrame(() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          );
        }}
        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
        data-testid={`footer-link-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {name}
      </Link>
    );
  }

  // External link (http/https or placeholder)
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
      data-testid={`footer-link-${name.toLowerCase().replace(/\s+/g, '-')}`}
      rel="noreferrer"
    >
      {name}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-foreground">Anoiak</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
                Shaping the future with AI-powered innovation. We transform businesses
                through intelligent solutions and cutting-edge technology.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      onClick={() => console.log(`${social.label} clicked`)}
                      data-testid={`social-${social.label.toLowerCase()}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <FooterNavLink name={link.name} href={link.href} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Anoiak. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link
                href="/privacy-policy"
                onClick={() =>
                  requestAnimationFrame(() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  )
                }
                className="hover:text-foreground transition-colors"
                data-testid="footer-privacy"
              >
                Privacy
              </Link>

              <Link
                href="/terms-of-service"
                onClick={() =>
                  requestAnimationFrame(() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  )
                }
                className="hover:text-foreground transition-colors"
                data-testid="footer-terms"
              >
                Terms
              </Link>
              <Link
                href="/legal/cookie-policy"
                onClick={() =>
                  requestAnimationFrame(() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  )
                }
                className="hover:text-foreground transition-colors"
                data-testid="footer-cookies"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
