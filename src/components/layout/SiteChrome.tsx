import { Link, NavLink } from "react-router-dom";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Special Services", to: "/special-legal-services-bangladesh" },
  { label: "Practice Areas", to: "/other-legal-services-bangladesh" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Payment & Fees", to: "/payment-and-fees" },
  { label: "About Us", to: "/about" },
];

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
            <span className="text-xl font-semibold">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">Meridian Chambers</span>
            <span className="text-xs text-muted-foreground">Bangladesh Counsel for Overseas Clients</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `story-link text-sm font-medium text-muted-foreground transition-colors ${
                  isActive ? "text-foreground" : "hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/contact">Start Legal Process</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-10 md:grid-cols-[2fr,3fr]">
        <div className="space-y-4">
          <p className="eyebrow text-accent-foreground/80">Meridian Chambers Bangladesh</p>
          <p className="text-sm text-primary-foreground/80">
            A Bangladesh-based legal practice focused on overseas individuals and businesses with disputes, transactions
            and risk linked to Bangladesh. All work is carried out under Bangladesh law only.
          </p>
          <div className="space-y-1 text-xs text-primary-foreground/80">
            <p>Practicing Advocate enrolled in Bangladesh.</p>
            <p>Jurisdiction: Bangladesh law only.</p>
            <p>Confidential handling of overseas matters and secure international payments.</p>
          </div>
        </div>
        <div className="grid gap-8 text-sm md:grid-cols-4">
          <div className="space-y-3">
            <p className="font-semibold">Legal Services</p>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/special-legal-services-bangladesh" className="story-link">
                  Special Services
                </Link>
              </li>
              <li>
                <Link to="/other-legal-services-bangladesh" className="story-link">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="story-link">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/payment-and-fees" className="story-link">
                  Payment & Fees
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Information</p>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/about" className="story-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="story-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="story-link">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="story-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="story-link">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Contact & Reach Us</p>
            <ul className="space-y-1 text-primary-foreground/80">
              <li>
                <a href="mailto:contact@meridianchambers.com" className="story-link">
                  contact@meridianchambers.com
                </a>
              </li>
              <li>Office Location: Bangladesh</li>
              <li>Serving international clients across multiple time zones.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Connect With Us</p>
            <div className="flex gap-3 text-primary-foreground/90">
              <a
                href="#"
                aria-label="Visit Facebook page"
                className="hover-scale inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Visit LinkedIn profile"
                className="hover-scale inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@meridianchambers.com"
                aria-label="Email Meridian Chambers Bangladesh"
                className="hover-scale inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container flex flex-col gap-2 py-4 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Meridian Chambers Bangladesh. All rights reserved.</p>
          <p>This website is informational only and does not constitute legal advice or create a lawyer–client relationship.</p>
        </div>
      </div>
    </footer>
  );
};
