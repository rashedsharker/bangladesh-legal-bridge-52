import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";

const ContactPage = () => {
  usePageSEO({
    title: "Contact Meridian Chambers Bangladesh",
    description:
      "Contact Meridian Chambers Bangladesh to discuss Bangladesh legal issues as an overseas client. Confidential initial contact form.",
    canonicalPath: "/contact",
  });

  return (
    <MainLayout>
      <PageHero
        eyebrow="Contact"
        title="Start Your Legal Process with Confidence"
        subtitle="Share your legal issue and documents securely. You will receive a response within a reasonable timeframe."
        primaryCtaLabel="Submit Your Case Securely"
        primaryCtaHref="#contact-form"
        secondaryCtaLabel="View How It Works"
        secondaryCtaHref="/how-it-works"
      />
      <section id="contact-form" className="border-b bg-background/80">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Initial engagement</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Share your Bangladesh legal issue in detail.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              The more clearly you can describe your situation, the easier it is to identify whether your matter can be
              accepted and what legal options may be available under Bangladesh law. You may include key dates, amounts
              in dispute, the location of property and any existing court or police references.
            </p>
            <p className="text-xs text-muted-foreground">
              This form does not create a lawyer–client relationship. No obligation to act arises until your matter is
              specifically accepted in writing and you have agreed formal terms of engagement.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
