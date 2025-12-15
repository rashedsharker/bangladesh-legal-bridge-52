import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";

interface ServiceDetailPageProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  serviceName: string;
  categoryLabel: string;
  isSpecialService?: boolean;
}

export const ServiceDetailPage = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  eyebrow,
  heroTitle,
  heroSubtitle,
  primaryCtaLabel,
  primaryCtaHref = "#service-contact",
  serviceName,
  categoryLabel,
  isSpecialService,
}: ServiceDetailPageProps) => {
  usePageSEO({ title: seoTitle, description: seoDescription, canonicalPath });

  const lowerName = serviceName.toLowerCase();

  return (
    <MainLayout>
      <PageHero
        eyebrow={eyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryCtaLabel={primaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaLabel="View Related Services"
        secondaryCtaHref={isSpecialService ? "/special-legal-services-bangladesh" : "/other-legal-services-bangladesh"}
      />

      <section className="border-b bg-background/80">
        <div className="container space-y-6 py-14 text-sm md:text-base text-muted-foreground">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            What {serviceName} means under Bangladesh law
          </h2>
          <p>
            {serviceName} in Bangladesh must always be understood within the framework of local statute, case law and
            procedural rules. For overseas clients, the starting point is understanding which courts, tribunals or
            authorities have jurisdiction and what documentary evidence will be required to prove or defend a position.
            The goal is to translate your commercial or personal objectives into lawful, procedurally compliant steps in
            Bangladesh.
          </p>
          <p>
            When this service is used strategically, it can reduce uncertainty and create a structured path forward. That
            may mean issuing a carefully drafted notice, framing a dispute for litigation or settlement, verifying assets
            and records, or documenting arrangements so that they can be enforced in Bangladesh if required.
          </p>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Common problems faced by overseas clients.</h2>
            <p>
              Overseas clients often discover {lowerName} needs in Bangladesh only after a dispute has already arisen or a
              transaction has gone off track. Delays, missing paperwork, unclear communication from local counterparts and
              unfamiliarity with Bangladesh legal procedure can make it hard to decide on the next step. In all of these
              situations, a clear understanding of timelines, evidentiary requirements and realistic outcomes is critical.
            </p>
            <p>
              Typical challenges include limited access to original documents, difficulty verifying the status of court or
              registry records from abroad, and uncertainty over whether a matter is civil, criminal, commercial or a
              combination of these categories. A structured {lowerName} strategy seeks to reduce these uncertainties and
              convert them into an actionable plan.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] text-sm text-muted-foreground">
            <h3 className="text-base font-semibold text-foreground">Step-by-step legal process for this service.</h3>
            <ol className="mt-2 space-y-2 list-decimal pl-4">
              <li>Initial written briefing from the overseas client outlining facts, parties and objectives.</li>
              <li>Review of available documents and identification of any missing material required under Bangladesh law.</li>
              <li>Clarification of timelines, limitation periods and procedural options, including alternative strategies.</li>
              <li>Agreement on scope of work and professional fees for the chosen course of action.</li>
              <li>
                Preparation and execution of {lowerName} steps in Bangladesh, with written updates at reasonable intervals.
              </li>
              <li>Final written outcome note and recommendations on follow-up, enforcement or risk mitigation.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b bg-background/80">
        <div className="container grid gap-10 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Documents and information usually required.</h2>
            <p>
              The specific documents required for {lowerName} will vary with the facts, but overseas clients should expect
              to provide identity and authority documents, key contracts or agreements, relevant correspondence and any
              existing court, police or regulatory references. In property or corporate matters, certified copies of title
              deeds, company records or registry extracts may be needed.
            </p>
            <p>
              Where originals cannot immediately be produced, scanned copies can still help to assess the matter
              initially. You will be advised if notarisation, legalisation or apostille is required for documents to be
              effective in Bangladesh, particularly where they originate from another jurisdiction.
            </p>
            <h3 className="text-base font-semibold text-foreground">Jurisdiction and professional responsibility.</h3>
            <p>
              All work on {lowerName} is carried out under Bangladesh law and in accordance with the professional rules
              applicable to Advocates in Bangladesh. The practice does not advise on the law of any other jurisdiction and
              does not accept instructions that would conflict with those professional obligations.
            </p>
          </div>
          <ContactForm serviceHint={`${serviceName} – ${categoryLabel}`} />
        </div>
      </section>

      <CTASection
        title={`Discuss ${serviceName} for your Bangladesh matter.`}
        subtitle={`If you believe that ${lowerName} may be required in relation to your dispute, transaction or risk in Bangladesh, you can begin with a detailed written briefing outlining the background and your objectives.`}
      >
        <Button asChild size="lg">
          <a href="/contact">Start a confidential discussion</a>
        </Button>
      </CTASection>
    </MainLayout>
  );
};
