import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const SpecialServices = () => {
  usePageSEO({
    title: "Special Legal Services for Overseas Clients in Bangladesh",
    description:
      "Special Bangladesh legal services for overseas clients: legal notices, money recovery, investigations, contracts and court representation.",
    canonicalPath: "/special-legal-services-bangladesh",
  });

  const services = [
    {
      title: "Legal Notice & Demand Letter",
      href: "/legal-notice-demand-letter-bangladesh",
      summary:
        "Preparation and dispatch of formal legal notices that comply with Bangladesh procedure and evidentiary standards.",
    },
    {
      title: "Money Recovery & Debt Collection",
      href: "/money-recovery-debt-collection-bangladesh",
      summary:
        "End-to-end money recovery strategy for unpaid invoices, loans and commercial debts owed in Bangladesh.",
    },
    {
      title: "Legal Investigation & Verification",
      href: "/legal-investigation-verification-bangladesh",
      summary:
        "On-the-ground verification of facts, documents and counterparties before you enter into transactions.",
    },
    {
      title: "Contract Drafting & Review",
      href: "/contract-drafting-review-bangladesh",
      summary:
        "Bangladesh-law compliant contracts carefully aligned with your commercial objectives and risk appetite.",
    },
    {
      title: "Case Handling & Court Representation",
      href: "/case-handling-court-representation-bangladesh",
      summary:
        "Representation in Bangladesh courts and tribunals for selected civil, commercial and criminal-linked matters.",
    },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Special Services"
        title="Specialized Legal Services for Overseas Clients"
        subtitle="Our core legal services are designed to address urgent and primary-stage legal issues in Bangladesh for individuals and businesses residing abroad."
        primaryCtaLabel="Explore Special Services"
        primaryCtaHref="#special-services-contact"
        secondaryCtaLabel="Back to Home"
        secondaryCtaHref="/"
      />

      <section className="border-b bg-background/80">
        <div className="container space-y-6 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Built around the realities of overseas clients.</h2>
          <p className="max-w-4xl text-sm md:text-base text-muted-foreground">
            Overseas clients often hold rights in Bangladesh—unpaid debts, property, contracts, investments or pending
            disputes—but find it difficult to take decisive legal action from a distance. Communication gaps, lack of
            trustworthy local contacts and uncertainty about court timelines can delay decisions for months or years.
            Meridian Chambers Bangladesh focuses on targeted, high-impact services that can be initiated and largely
            managed remotely, while remaining fully grounded in Bangladesh law and procedure.
          </p>
          <p className="max-w-4xl text-sm md:text-base text-muted-foreground">
            Each special service below is structured with overseas clients in mind. From the initial briefing to written
            deliverables and updates, the process is designed to minimise friction across time zones and to give you a
            clear evidentiary trail of what has been done in Bangladesh. You retain control over key decisions while the
            Advocate manages the technical legal execution locally.
          </p>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container space-y-8 py-14">
          <header className="space-y-3">
            <p className="eyebrow">Special services overview</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Select the service that fits your Bangladesh matter.</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] hover:bg-card/90 hover-scale"
              >
                <div className="space-y-3">
                  <p className="eyebrow text-[10px] text-accent-foreground/90">Special Service</p>
                  <h3 className="text-lg font-semibold group-hover:text-primary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.summary}</p>
                </div>
                <span className="mt-4 text-sm font-medium text-primary story-link">Open detailed service page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="special-services-contact" className="border-b bg-background/80">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Confidential initial briefing</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Discuss a special service for your Bangladesh matter.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Whether you require a formal legal notice, structured money recovery, verification of a Bangladesh
              counterparty or full court representation, you can outline your situation here. You will receive a
              considered view on whether the matter is suitable for these focused services.
            </p>
          </div>
          <ContactForm serviceHint="Special Service (e.g. Legal Notice, Money Recovery)" />
        </div>
      </section>

      <CTASection
        title="Not sure which special service applies?"
        subtitle="Share a short summary of your Bangladesh issue and you will receive guidance on whether a legal notice, investigation, contract work or court action is more appropriate."
      >
        <Button asChild size="lg" variant="outline">
          <Link to="/contact">Send a general enquiry</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default SpecialServices;
