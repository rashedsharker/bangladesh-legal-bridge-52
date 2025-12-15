import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  usePageSEO({
    title: "How Overseas Clients Work with Meridian Chambers Bangladesh",
    description:
      "Step-by-step process for overseas clients instructing Meridian Chambers Bangladesh: briefing, review, fees, execution and updates.",
    canonicalPath: "/how-it-works",
  });

  return (
    <MainLayout>
      <PageHero
        eyebrow="Process"
        title="A clear, disciplined process for cross-border Bangladesh matters."
        subtitle="From first contact to final reporting, the workflow is designed around the realities of distance, time zones and documentary evidence for overseas clients."
        primaryCtaLabel="Start the Process"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Special Services"
        secondaryCtaHref="/special-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container space-y-8 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">From initial briefing to written outcome.</h2>
          <p className="max-w-4xl text-sm md:text-base text-muted-foreground">
            Overseas clients need clarity on what will happen, when, and how progress will be communicated. The workflow
            at Meridian Chambers Bangladesh is structured into distinct stages so you always know what to expect. Each
            stage is anchored in Bangladesh legal procedure but explained in straightforward language, with particular
            attention to evidence, risk and timelines.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="hover-scale rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="eyebrow text-[10px]">Stage 1</p>
              <h3 className="mt-2 text-lg font-semibold">Intake & conflicts check</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                After you submit your issue, a preliminary view is taken to identify conflicts of interest and whether the
                matter falls within this practice. Only after clearance can specific legal guidance be considered.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="eyebrow text-[10px]">Stage 2</p>
              <h3 className="mt-2 text-lg font-semibold">Legal review & options</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Relevant documents and facts are examined under Bangladesh law. You receive a structured outline of
                realistic options, including the merits and potential risks of sending notices, initiating recovery or
                commencing litigation.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="eyebrow text-[10px]">Stage 3</p>
              <h3 className="mt-2 text-lg font-semibold">Engagement & professional fee</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                If you decide to proceed, a written scope of work and professional fee structure is shared. Only once you
                agree these terms and, where applicable, place funds on account does substantive work commence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Execution, reporting and closure.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Once engaged, legal steps are taken in Bangladesh in line with the agreed strategy—whether issuing a
              demand letter, filing a case, conducting searches or negotiating a settlement. You receive clear written
              updates at logical milestones rather than sporadic verbal feedback.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              On completion of a stage or the entire matter, you receive confirmation of outcomes, copies of key filings
              where appropriate, and any recommended follow-up actions. This creates a record you can safely keep for
              compliance, audit or future reference in your home jurisdiction.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] text-sm text-muted-foreground">
            <h3 className="text-base font-semibold text-foreground">Typical sequence for overseas clients:</h3>
            <ul className="mt-2 space-y-2 list-disc pl-4">
              <li>Submit detailed issue description via the contact form</li>
              <li>Receive confirmation of receipt and, where possible, indicative response timeframe</li>
              <li>Share further documents or clarifications as requested</li>
              <li>Review written outline of legal options and fee structure</li>
              <li>Agree terms of engagement and, if applicable, make initial fee payment</li>
              <li>Legal steps executed in Bangladesh with written milestone updates</li>
              <li>Outcome reported with recommendations on next steps, if any</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Begin the process with a structured briefing."
        subtitle="If you have a Bangladesh-linked dispute, transaction or risk, you can start by setting out the facts and documents in writing. You will then be guided on the most appropriate next step."
      >
        <Button asChild size="lg">
          <Link to="/contact">Submit your matter</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default HowItWorks;
