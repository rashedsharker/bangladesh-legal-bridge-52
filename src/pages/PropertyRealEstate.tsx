import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const PropertyRealEstate = () => {
  usePageSEO({
    title: "Property & Real Estate Services in Bangladesh for Overseas Clients",
    description:
      "Property and real estate services in Bangladesh for overseas clients, including disputes, title verification, due diligence and inheritance-linked property matters.",
    canonicalPath: "/property-real-estate-bangladesh",
  });

  const services = [
    { label: "Property Disputes", href: "/property-disputes-bangladesh" },
    { label: "Land & Title Verification", href: "/land-title-verification-bangladesh" },
    { label: "Sale Deed / Agreement Review", href: "/sale-deed-agreement-review-bangladesh" },
    { label: "Property Due Diligence", href: "/property-due-diligence-bangladesh" },
    { label: "Inheritance & Succession Matters", href: "/inheritance-succession-property-bangladesh" },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Property & Real Estate"
        title="Property & Real Estate Legal Services in Bangladesh"
        subtitle="Legal support for overseas property owners involving disputes, verification, documentation, and due diligence under Bangladesh law."
        primaryCtaLabel="Request Property Legal Assistance"
        primaryCtaHref="#property-contact"
        secondaryCtaLabel="Back to Other Legal Services"
        secondaryCtaHref="/other-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Property and real estate issues with a Bangladesh dimension.
            </h2>
            <p>
              Overseas individuals and businesses frequently retain or acquire property interests in Bangladesh even after
              relocating abroad. Disputes can arise over title, possession, co-ownership, unauthorised occupation or
              development, while transactions may require careful review of deeds, powers of attorney and registry
              records. Inheritance and succession questions often add an additional layer of complexity.
            </p>
            <p>
              This practice focuses on explaining, in clear language, how Bangladesh law treats your particular property
              scenario, what documents will be required, and how far court or registry processes can be advanced while
              you remain outside Bangladesh. The emphasis is on disciplined fact-gathering, realistic expectations and a
              structured plan of action.
            </p>
            <h3 className="text-base font-semibold text-foreground">Core property & real estate services covered.</h3>
            <p>
              Work in this area includes assistance with contested property and possession disputes, verification of land
              and title records, review of sale deeds and related documentation, property due diligence for proposed
              investments, and succession-linked questions where multiple heirs or jurisdictions are involved.
            </p>
          </div>
          <aside className="space-y-3 rounded-2xl border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-semibold text-foreground">Property & real estate services at a glance.</h3>
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

      <section id="property-contact" className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Bangladesh property instructions</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Outline your property or real estate matter.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You may share details of the property, parties involved, any existing documents and your objectives. Matters
              are approached with care, with clear explanations of what can and cannot be done under Bangladesh law while
              you remain overseas.
            </p>
          </div>
          <ContactForm serviceHint="Property & Real Estate" />
        </div>
      </section>

      <CTASection
        title="Need structured support on a Bangladesh property issue?"
        subtitle="Early, jurisdiction-specific advice on property and real estate issues can help avoid irreversible steps and protect your position under Bangladesh law."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request a property-focused consultation</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default PropertyRealEstate;
