import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const OtherLegalServices = () => {
  usePageSEO({
    title: "Other Legal Services for Overseas Clients in Bangladesh",
    description:
      "Full range of Bangladesh legal services for overseas clients, including litigation, property, family, corporate, documentation, banking and verification.",
    canonicalPath: "/other-legal-services-bangladesh",
  });

  const groups = [
    {
      title: "Litigation & Dispute Resolution",
      items: [
        { label: "Civil Litigation", href: "/civil-litigation-bangladesh" },
        { label: "Criminal Litigation Support", href: "/criminal-litigation-support-bangladesh" },
        { label: "Arbitration & Mediation", href: "/arbitration-mediation-bangladesh" },
        { label: "Commercial Disputes", href: "/commercial-disputes-bangladesh" },
        { label: "Recovery Suits", href: "/recovery-suits-bangladesh" },
      ],
    },
    {
      title: "Property & Real Estate",
      items: [
        { label: "Property & Real Estate (Overview)", href: "/property-real-estate-bangladesh" },
        { label: "Property Disputes", href: "/property-disputes-bangladesh" },
        { label: "Land & Title Verification", href: "/land-title-verification-bangladesh" },
        { label: "Sale Deed / Agreement Review", href: "/sale-deed-agreement-review-bangladesh" },
        { label: "Property Due Diligence", href: "/property-due-diligence-bangladesh" },
        { label: "Inheritance & Succession Matters", href: "/inheritance-succession-property-bangladesh" },
      ],
    },
    {
      title: "Family & Personal Law",
      items: [
        { label: "Divorce & Matrimonial Disputes", href: "/divorce-matrimonial-disputes-bangladesh" },
        { label: "Maintenance & Custody Matters", href: "/maintenance-custody-matters-bangladesh" },
        { label: "Succession & Inheritance", href: "/succession-inheritance-bangladesh" },
        { label: "Muslim / Hindu / Christian Personal Law Issues", href: "/personal-law-issues-bangladesh" },
      ],
    },
    {
      title: "Business & Corporate Legal Services",
      items: [
        { label: "Business Legal Advisory", href: "/business-legal-advisory-bangladesh" },
        { label: "Company Agreements", href: "/company-agreements-bangladesh" },
        { label: "Shareholder Agreements", href: "/shareholder-agreements-bangladesh" },
        { label: "Legal Compliance Support", href: "/legal-compliance-support-bangladesh" },
        { label: "Commercial Contracts", href: "/commercial-contracts-bangladesh" },
      ],
    },
    {
      title: "Documentation & Advisory",
      items: [
        { label: "Legal Opinion", href: "/legal-opinion-bangladesh" },
        { label: "Power of Attorney", href: "/power-of-attorney-bangladesh" },
        { label: "Affidavits & Declarations", href: "/affidavits-declarations-bangladesh" },
        { label: "Legal Vetting", href: "/legal-vetting-bangladesh" },
        { label: "Drafting & Documentation", href: "/drafting-documentation-bangladesh" },
      ],
    },
    {
      title: "Banking & Financial Matters",
      items: [
        { label: "Cheque Dishonour (NI Act)", href: "/cheque-dishonour-ni-act-bangladesh" },
        { label: "Loan Recovery Support", href: "/loan-recovery-support-bangladesh" },
        { label: "Banking Disputes", href: "/banking-disputes-bangladesh" },
      ],
    },
    {
      title: "Verification & Search Services",
      items: [
        { label: "Court Case Search", href: "/court-case-search-bangladesh" },
        { label: "Criminal Record Search", href: "/criminal-record-search-bangladesh" },
        { label: "Business Background Check", href: "/business-background-check-bangladesh" },
        { label: "Property Record Search", href: "/property-record-search-bangladesh" },
      ],
    },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Other Legal Services"
        title="A broader range of Bangladesh legal services for overseas clients."
        subtitle="Beyond the focused special services, Meridian Chambers Bangladesh supports a wider set of disputes, transactions and advisory needs for clients located outside Bangladesh."
        primaryCtaLabel="Discuss your matter"
        primaryCtaHref="#other-services-contact"
        secondaryCtaLabel="Back to Home"
        secondaryCtaHref="/"
      />

      <section className="border-b bg-background/80">
        <div className="container space-y-6 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Full-service capability with an international lens.</h2>
          <p className="max-w-4xl text-sm md:text-base text-muted-foreground">
            Many overseas clients face Bangladesh legal issues that cut across multiple areas—litigation, property,
            family, corporate and banking. This practice is able to manage and coordinate such matters, drawing on
            focused experience before courts and tribunals in Bangladesh. The aim is to provide a single, disciplined
            point of contact for issues that would otherwise be difficult to control from abroad.
          </p>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container grid gap-8 py-14 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="space-y-3 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="story-link text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="other-services-contact" className="border-b bg-background/80">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Complex Bangladesh matters</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Outline your broader Bangladesh legal requirements.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              If your matter spans several areas—for example, a property dispute linked to family and succession issues, or
              a commercial dispute connected to banking facilities—you can use this section to set out the full picture.
            </p>
          </div>
          <ContactForm serviceHint="Other Legal Services (e.g. Property, Litigation, Family)" />
        </div>
      </section>

      <CTASection
        title="Unsure which category your issue falls under?"
        subtitle="Cross-border matters rarely fit neatly into one label. You can describe the situation in your own words and receive a structured view on how it may be approached under Bangladesh law."
      >
        <Button asChild size="lg">
          <Link to="/contact">Send a general briefing</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default OtherLegalServices;
