import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link as WLink, useLocation } from "wouter";

type NavItem =
  | { name: string; section: string }   // scroll to section on "/"
  | { name: string; path: string };     // real route

const NAV_OFFSET = 80; // px – keep this in sync with your sticky height

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: "Home", section: "home" },
    { name: "Services", section: "services" },
    { name: "Projects", section: "projects" },
    { name: "Team", section: "team" },
    { name: "Contact", section: "contact" },
    { name: "Blog", path: "/blog" }, // ✅ route (was "#Blog" before)
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const onSectionClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location === "/") {
      scrollToSection(section);
    } else {
      // navigate to home with hash; Home page effect should auto-scroll
      setLocation(`/#${section}`);
    }
  };

  const onPathClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setLocation(path);
  };

  // simple active state for Blog link
  const isBlog = location.startsWith("/blog");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <WLink href="/" className="text-xl font-bold text-foreground">Anoiak</WLink>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            "section" in link ? (
              <li key={link.name}>
                <button
                  onClick={onSectionClick(link.section)}
                  className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md"
                  data-testid={`nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              </li>
            ) : (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={onPathClick(link.path)}
                  className={`transition-colors px-3 py-2 rounded-md ${
                    isBlog && link.path === "/blog"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => setLocation("/#contact")}
            data-testid="button-collaborate"
          >
            Collaborate
          </Button>
          <Button
            onClick={() => setLocation("/#contact")}
            data-testid="button-request-proposal"
          >
            Request a Proposal
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          data-testid="button-mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) =>
              "section" in link ? (
                <button
                  key={link.name}
                  onClick={onSectionClick(link.section)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={onPathClick(link.path)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              )
            )}

            <div className="pt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setLocation("/#contact");
                }}
                data-testid="mobile-button-collaborate"
              >
                Collaborate
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setLocation("/#contact");
                }}
                data-testid="mobile-button-request-proposal"
              >
                Request a Proposal
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
