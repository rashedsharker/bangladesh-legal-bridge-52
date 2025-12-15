import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const FamilyPersonalLaw = () => {
  usePageSEO({
    title: "Family & Personal Law for Overseas Clients in Bangladesh",
    description:
      "Family and personal law services in Bangladesh for overseas clients, including divorce, custody, succession and personal law issues.",
    canonicalPath: "/family-personal-law-bangladesh",
  });

  const services = [
    { label: "Divorce & Matrimonial Disputes", href: "/divorce-matrimonial-disputes-bangladesh" },
    { label: "Maintenance & Custody Matters", href: "/maintenance-custody-matters-bangladesh" },
    { label: "Succession & Inheritance", href: "/succession-inheritance-bangladesh" },
    { label: "Muslim / Hindu / Christian Personal Law Issues", href: "/personal-law-issues-bangladesh" },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Family & Personal Law"
        title="Family & Personal Law Services in Bangladesh"
        subtitle="Legal assistance in personal and family matters handled with sensitivity and confidentiality for overseas clients."
        primaryCtaLabel="Request Family Law Assistance"
        primaryCtaHref="#family-contact"
        secondaryCtaLabel="Back to Other Legal Services"
        secondaryCtaHref="/other-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Typical overseas family & personal law scenarios.</h2>
            <p>
              Overseas Bangladeshis frequently encounter situations where family relationships, marriage, divorce or estate
              planning have a Bangladesh dimension even though they are physically located abroad. There may be marriages
              solemnised in Bangladesh, property still held locally, dependants residing in Bangladesh or personal law rules
              that affect how assets are distributed.
            </p>
            <p>
              This practice assists with understanding how Bangladesh courts are likely to view your position, what
              documentation will be required, and how local proceedings may interact with foreign orders or settlements.
              The focus is on practical, jurisdiction-specific advice that recognises both legal obligations and personal
              sensitivities.
            </p>
            <h3 className="text-base font-semibold text-foreground">Key family & personal law services offered.</h3>
            <p>
              Work in this area commonly involves advice and representation in divorce and matrimonial disputes, interim and
              permanent maintenance claims, guardianship and custody applications, succession planning and inheritance
              disputes, as well as questions arising under Muslim, Hindu or Christian personal law in Bangladesh.
            </p>
          </div>
          <aside className="space-y-3 rounded-2xl border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-semibold text-foreground">Family & personal law services covered.</h3>
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

      <section id="family-contact" className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Confidential family instructions</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Outline your family or personal law matter.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You may share a written summary of your situation—relationships involved, key dates, any existing proceedings
              and your objectives. Matters are approached with discretion and in line with Bangladesh professional rules.
            </p>
          </div>
          <ContactForm serviceHint="Family & Personal Law" />
        </div>
      </section>

      <CTASection
        title="Need guidance on a Bangladesh family law issue?"
        subtitle="If your family or personal circumstances have a Bangladesh component, early advice can help structure matters fairly and in line with local law."
      >
        <Button asChild size="lg">
          <Link to="/contact">Start a confidential consultation</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default FamilyPersonalLaw;
