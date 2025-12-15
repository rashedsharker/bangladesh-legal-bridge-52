import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const BusinessCorporateLegal = () => {
  usePageSEO({
    title: "Business & Corporate Legal Services in Bangladesh for Overseas Clients",
    description:
      "Business and corporate legal services in Bangladesh for overseas clients, including advisory, agreements, compliance and commercial contracts.",
    canonicalPath: "/business-corporate-legal-services-bangladesh",
  });

  const services = [
    { label: "Business Legal Advisory", href: "/business-legal-advisory-bangladesh" },
    { label: "Company Agreements", href: "/company-agreements-bangladesh" },
    { label: "Shareholder Agreements", href: "/shareholder-agreements-bangladesh" },
    { label: "Legal Compliance Support", href: "/legal-compliance-support-bangladesh" },
    { label: "Commercial Contracts", href: "/commercial-contracts-bangladesh" },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Business & Corporate Legal Services"
        title="Bangladesh business and corporate legal support for overseas stakeholders."
        subtitle="From single-company agreements to ongoing corporate compliance, this practice supports overseas owners, investors and counterparties with Bangladesh law issues affecting their businesses."
        primaryCtaLabel="Discuss a business matter"
        primaryCtaHref="#business-contact"
        secondaryCtaLabel="Back to Other Legal Services"
        secondaryCtaHref="/other-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Cross-border business issues involving Bangladesh.</h2>
            <p>
              Overseas founders, shareholders and counterparties frequently engage with Bangladesh-incorporated companies or
              businesses operating in Bangladesh. Questions often arise around the enforceability of agreements, allocation of
              risk, director and shareholder rights, and how regulatory requirements impact transactions.
            </p>
            <p>
              This practice assists in identifying which elements of a transaction must be governed or implemented under
              Bangladesh law, and how they should be documented so that they can be relied on before local regulators and
              courts if required.
            </p>
            <h3 className="text-base font-semibold text-foreground">Key business & corporate services covered.</h3>
            <p>
              Common instructions include reviewing or drafting shareholder and joint venture agreements, company-level
              service or supply contracts, compliance frameworks for local operations, and commercial documentation with
              Bangladesh counterparties.
            </p>
          </div>
          <aside className="space-y-3 rounded-2xl border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-semibold text-foreground">Business & corporate services available.</h3>
            <ul className="mt-2 space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="story-link text-primary">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="business-contact" className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Corporate instructions</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Outline your Bangladesh business requirement.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You can summarise the structure of your business, counterparties involved, any existing documentation and the
              specific decision or risk you are seeking to address under Bangladesh law.
            </p>
          </div>
          <ContactForm serviceHint="Business & Corporate Legal Services" />
        </div>
      </section>

      <CTASection
        title="Need Bangladesh law input on a business or corporate issue?"
        subtitle="Strategic advice early in the lifecycle of a deal or dispute can reduce risk and provide clearer options for overseas stakeholders."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request corporate legal review</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default BusinessCorporateLegal;
