import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const DocumentationAdvisory = () => {
  usePageSEO({
    title: "Documentation & Advisory Services in Bangladesh for Overseas Clients",
    description:
      "Documentation and legal advisory services in Bangladesh for overseas clients, including legal opinions, powers of attorney, affidavits and detailed vetting.",
    canonicalPath: "/documentation-advisory-bangladesh",
  });

  const services = [
    { label: "Legal Opinion", href: "/legal-opinion-bangladesh" },
    { label: "Power of Attorney", href: "/power-of-attorney-bangladesh" },
    { label: "Affidavits & Declarations", href: "/affidavits-declarations-bangladesh" },
    { label: "Legal Vetting", href: "/legal-vetting-bangladesh" },
    { label: "Drafting & Documentation", href: "/drafting-documentation-bangladesh" },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Documentation & Advisory"
        title="Bangladesh-focused legal documentation and advisory for overseas clients."
        subtitle="Where documents must be valid, enforceable and usable before Bangladesh authorities, this practice prepares and vets documentation with jurisdiction-specific precision."
        primaryCtaLabel="Discuss documentation needs"
        primaryCtaHref="#documentation-contact"
        secondaryCtaLabel="Back to Other Legal Services"
        secondaryCtaHref="/other-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Getting documentation right for Bangladesh.</h2>
            <p>
              Overseas clients often rely on documentation prepared in another jurisdiction, only to discover later that it
              is not in a form accepted by Bangladesh courts, registries or authorities. This can lead to delays,
              unenforceable rights and unnecessary cost.
            </p>
            <p>
              This practice assists with preparing documentation that is suitable for use in Bangladesh, as well as issuing
              formal legal opinions and conducting detailed legal vetting of existing drafts or executed documents.
            </p>
          </div>
          <aside className="space-y-3 rounded-2xl border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-semibold text-foreground">Documentation & advisory services covered.</h3>
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

      <section id="documentation-contact" className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Documentation planning</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Outline the documents or advisory you require.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You can describe the transaction or dispute, the counterparties involved and the type of instruments or
              opinions you need so that they can be tailored to Bangladesh law.
            </p>
          </div>
          <ContactForm serviceHint="Documentation & Advisory" />
        </div>
      </section>

      <CTASection
        title="Need Bangladesh-compliant documentation or legal opinion?"
        subtitle="Well-prepared documentation and opinions can prevent disputes and support enforcement if a matter escalates in Bangladesh."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request documentation support</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default DocumentationAdvisory;
