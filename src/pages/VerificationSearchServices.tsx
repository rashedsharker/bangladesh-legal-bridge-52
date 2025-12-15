import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const VerificationSearchServices = () => {
  usePageSEO({
    title: "Verification & Search Services in Bangladesh for Overseas Clients",
    description:
      "Verification and search services in Bangladesh for overseas clients, including court case search, criminal record search, business background checks and property record search.",
    canonicalPath: "/verification-search-services-bangladesh",
  });

  const services = [
    { label: "Court Case Search", href: "/court-case-search-bangladesh" },
    { label: "Criminal Record Search", href: "/criminal-record-search-bangladesh" },
    { label: "Business Background Check", href: "/business-background-check-bangladesh" },
    { label: "Property Record Search", href: "/property-record-search-bangladesh" },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Verification & Search Services"
        title="Verification & Legal Search Services in Bangladesh"
        subtitle="Court, criminal, business, and property record searches conducted for overseas clients requiring verified legal information."
        primaryCtaLabel="Request Verification"
        primaryCtaHref="#verification-contact"
        secondaryCtaLabel="Back to Practice Areas"
        secondaryCtaHref="/other-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Reducing information gaps in Bangladesh.</h2>
            <p>
              Overseas clients often face significant information gaps when dealing with counterparties, assets or
              proceedings in Bangladesh. Public records may not be easily searchable from abroad, and informal assurances can
              be unreliable.
            </p>
            <p>
              Verification and search services focus on obtaining and interpreting court, criminal, business and property
              records in Bangladesh so that you can make better-informed decisions and structure your risk accordingly.
            </p>
          </div>
          <aside className="space-y-3 rounded-2xl border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-semibold text-foreground">Verification & search services available.</h3>
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

      <section id="verification-contact" className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Verification instructions</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Outline what you need verified in Bangladesh.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You can describe the parties involved, the type of asset or proceeding, and the specific questions you need
              answered so that a targeted verification plan can be prepared.
            </p>
          </div>
          <ContactForm serviceHint="Verification & Search Services" />
        </div>
      </section>

      <CTASection
        title="Need reliable Bangladesh verification or search work?"
        subtitle="Structured verification can highlight red flags early, avoiding costly commitments based on incomplete information."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request verification services</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default VerificationSearchServices;
