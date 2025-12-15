import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const PaymentAndFees = () => {
  usePageSEO({
    title: "Professional Fees and International Payment Options",
    description:
      "Learn how professional fees are structured at Meridian Chambers Bangladesh and how overseas clients can pay via SWIFT, Wise or Payoneer.",
    canonicalPath: "/payment-and-fees",
  });

  return (
    <MainLayout>
      <PageHero
        eyebrow="Fees & Payment"
        title="Transparent professional fees for Bangladesh legal services."
        subtitle="Matters are scoped clearly at the outset, with written fee proposals and international payment options suitable for overseas clients."
        primaryCtaLabel="Discuss Fees for Your Matter"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Special Services"
        secondaryCtaHref="/special-legal-services-bangladesh"
      />

      <section className="border-b bg-background/80">
        <div className="container space-y-8 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">How professional fees are structured.</h2>
          <p className="max-w-4xl text-sm md:text-base text-muted-foreground">
            Each matter is different. Some disputes call for carefully phased litigation, while others may be resolved
            through a well-drafted legal notice or negotiated settlement. To keep things predictable for overseas
            clients, professional fees are usually proposed on a stage-by-stage basis. You will know which specific step
            is being covered and what is excluded before you commit.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="hover-scale rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Fixed-fee stages</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For work such as drafting legal notices, preparing contracts or conducting targeted searches, a fixed fee
                is often proposed. This gives clarity on cost and deliverables in advance.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Phased litigation fees</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Court representation is usually divided into phases—such as filing, hearings and enforcement—so you can
                align your budget with the progress of the case in Bangladesh.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Professional Fee Account</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For some matters, you may be requested to maintain a Professional Fee Account on deposit against which
                work is carried out and accounted for in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container grid gap-8 py-14 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">International payment methods.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Overseas clients routinely settle professional fees from outside Bangladesh. Once your matter is accepted
              and a fee proposal agreed, you will receive precise beneficiary details and references to use for your
              transfers. Payments are typically made in freely convertible currencies, subject to applicable regulations.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] text-sm text-muted-foreground">
            <h3 className="text-base font-semibold text-foreground">Commonly used channels:</h3>
            <ul className="mt-2 space-y-2 list-disc pl-4">
              <li>
                <span className="font-semibold">SWIFT transfer:</span> Traditional bank-to-bank transfer using the SWIFT
                network to the designated Professional Fee Account.
              </li>
              <li>
                <span className="font-semibold">Wise (formerly TransferWise):</span> Convenient for many overseas
                clients, offering competitive foreign exchange and clear fee visibility.
              </li>
              <li>
                <span className="font-semibold">Payoneer:</span> Frequently used by international businesses and
                professionals for cross-border payments into the Professional Fee Account.
              </li>
            </ul>
            <p className="mt-2 text-xs">
              Specific details of the Professional Fee Account, including account name, number and SWIFT code, are
              provided individually once a matter is accepted and subject to applicable regulations.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Request a tailored fee proposal for your matter."
        subtitle="Outline your Bangladesh legal issue and you will receive a clear, written breakdown of proposed stages and related professional fees."
      >
        <Button asChild size="lg">
          <Link to="/contact">Discuss fees and payment</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default PaymentAndFees;
