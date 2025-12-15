import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const BankingFinancialMatters = () => {
  usePageSEO({
    title: "Banking & Financial Matters in Bangladesh for Overseas Clients",
    description:
      "Banking and financial legal services in Bangladesh for overseas clients, including cheque dishonour, loan recovery and banking disputes.",
    canonicalPath: "/banking-financial-matters-bangladesh",
  });

  const services = [
    { label: "Cheque Dishonour (NI Act)", href: "/cheque-dishonour-ni-act-bangladesh" },
    { label: "Loan Recovery Support", href: "/loan-recovery-support-bangladesh" },
    { label: "Banking Disputes", href: "/banking-disputes-bangladesh" },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="Banking & Financial Matters"
        title="Bangladesh banking and financial disputes for overseas stakeholders."
        subtitle="When payments fail, facilities go into default or cheques are dishonoured in Bangladesh, this practice assists overseas clients in understanding and exercising their rights."
        primaryCtaLabel="Discuss a banking issue"
        primaryCtaHref="#banking-contact"
        secondaryCtaLabel="Back to Other Legal Services"
        secondaryCtaHref="/other-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Cross-border banking and finance disputes.</h2>
            <p>
              Overseas lenders, guarantors and counterparties frequently face default situations linked to facilities or
              instruments governed by Bangladesh law or payable in Bangladesh. There may also be parallel civil and criminal
              dimensions, particularly in cases of cheque dishonour.
            </p>
            <p>
              This practice helps clarify the legal routes available—including statutory notices, civil recovery actions and,
              where appropriate, NI Act proceedings—and how they interact with any negotiations or settlements.
            </p>
          </div>
          <aside className="space-y-3 rounded-2xl border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-base font-semibold text-foreground">Banking & financial services covered.</h3>
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

      <section id="banking-contact" className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Banking & finance instructions</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Outline your Bangladesh banking matter.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You may describe the type of facility or instrument, amounts involved, dates of default or dishonour and any
              steps already taken so that appropriate legal options can be identified.
            </p>
          </div>
          <ContactForm serviceHint="Banking & Financial Matters" />
        </div>
      </section>

      <CTASection
        title="Need support with a Bangladesh banking or financial dispute?"
        subtitle="Structured legal action can often improve recovery prospects and provide clearer leverage in settlement discussions."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request banking law assistance</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default BankingFinancialMatters;
