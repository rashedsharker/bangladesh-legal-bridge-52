import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const About = () => {
  usePageSEO({
    title: "About Meridian Chambers Bangladesh",
    description:
      "Learn about Meridian Chambers Bangladesh, a Bangladesh-based legal practice focused on overseas individuals and businesses.",
    canonicalPath: "/about",
  });

  return (
    <MainLayout>
      <PageHero
        eyebrow="About the Practice"
        title="A Bangladesh-Based Legal Practice Serving Overseas Clients"
        subtitle="We provide professional legal assistance under Bangladesh law with a focus on clarity, ethics, and accountability."
        primaryCtaLabel="Start Legal Process"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Services"
        secondaryCtaHref="/special-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <p>
              Overseas clients frequently hold significant legal rights in Bangladesh—ranging from unpaid commercial
              debts and property disputes to complex family and succession issues. Yet distance, time zones and a lack of
              reliable local guidance make it difficult to act. Meridian Chambers Bangladesh exists to bridge that gap.
            </p>
            <p>
              The practice is led by a Bangladesh Bar-enrolled Advocate who appears before courts and tribunals in
              Bangladesh. Matters are approached with a combination of technical legal analysis, practical risk
              assessment and clear written communication tailored to clients who may be unfamiliar with Bangladesh court
              procedure.
            </p>
            <p>
              Rather than operating as a generalised consultancy, the focus is on carefully selected areas where overseas
              clients most often require support: legal notices, money recovery, property and commercial disputes,
              documentation, and verification. Each matter is scoped realistically, with transparent professional fees and
              honest discussion of merits, limitations and timelines.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] text-sm text-muted-foreground">
            <h2 className="text-base font-semibold text-foreground">Why overseas clients instruct this practice</h2>
            <ul className="mt-2 space-y-2 list-disc pl-4">
              <li>Direct access to a practicing Advocate in Bangladesh</li>
              <li>Processes structured around time zones and remote communication</li>
              <li>Written advice and updates suitable for internal reporting</li>
              <li>Focus on evidence, documentation and enforcement practicality</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Considering instructing Bangladesh counsel?"
        subtitle="If you are assessing options for a Bangladesh-linked dispute or transaction, you can begin with a written briefing and receive an initial view on suitability."
      >
        <Button asChild size="lg">
          <Link to="/contact">Send a detailed briefing</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default About;
