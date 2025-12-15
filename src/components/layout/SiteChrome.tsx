import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Special Services", to: "/special-legal-services-bangladesh" },
  { label: "Other Legal Services", to: "/other-legal-services-bangladesh" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Payment & Fees", to: "/payment-and-fees" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
  { label: "Disclaimer", to: "/disclaimer" },
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
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="eyebrow text-accent-foreground/80">Meridian Chambers Bangladesh</p>
          <p className="text-sm text-primary-foreground/80">
            A premium Bangladesh-based legal practice dedicated to assisting overseas individuals and businesses with
            compliant, jurisdiction-specific legal solutions.
          </p>
        </div>
        <div className="space-y-2 text-sm text-primary-foreground/70">
          <p>Serving clients across Europe, North America, the Middle East, and Asia-Pacific.</p>
          <p>
            This website provides general information only and does not constitute legal advice or a client-lawyer
            relationship.
          </p>
          <p className="text-xs">© {new Date().getFullYear()} Meridian Chambers Bangladesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
