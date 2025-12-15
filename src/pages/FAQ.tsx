import { MainLayout } from "@/components/layout/MainLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";

const FAQ = () => {
  usePageSEO({
    title: "Frequently Asked Questions | Meridian Chambers Bangladesh",
    description:
      "Answers to common questions from overseas clients working with Meridian Chambers Bangladesh on Bangladesh legal matters.",
    canonicalPath: "/faq",
  });

  const faqs = [
    {
      q: "Do I need to travel to Bangladesh to instruct the practice?",
      a: "In many cases you do not need to travel. Instructions, documents and updates can be handled remotely using secure channels. If a matter requires your physical presence—for example, for certain affidavits or evidence—it will be discussed with you in advance.",
    },
    {
      q: "Is this website giving me legal advice?",
      a: "No. The website provides general information only. Legal advice can only be given once your specific matter has been understood, conflicts have been checked and you have entered into a formal engagement with the practice.",
    },
    {
      q: "Which countries do your overseas clients typically come from?",
      a: "Clients commonly reside in the UK, EU countries, North America, the Middle East and parts of Asia-Pacific. However, the key factor is that the legal issue itself is governed by Bangladesh law or involves Bangladesh-based parties or assets.",
    },
    {
      q: "How are professional fees agreed?",
      a: "Fees are proposed in writing, usually on a stage-by-stage basis. You will know what work will be done, what it will cost and what is excluded before you decide whether to proceed.",
    },
    {
      q: "Can you guarantee a particular outcome?",
      a: "No lawyer can ethically guarantee an outcome. What can be offered is a diligent, lawful effort in line with Bangladesh procedure and professional obligations, with transparent communication about prospects and risks.",
    },
  ];

  return (
    <MainLayout>
      <PageHero
        eyebrow="FAQ"
        title="Answers to questions frequently asked by overseas clients."
        subtitle="These responses are for general information only and do not replace individual legal advice tailored to your specific circumstances."
        primaryCtaLabel="Ask a specific question"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Disclaimer"
        secondaryCtaHref="/disclaimer"
      />

      <section className="border-b bg-background/80">
        <div className="container space-y-8 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Working with Meridian Chambers Bangladesh.</h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="hover-scale rounded-2xl border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
                <p className="mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question about a Bangladesh matter?"
        subtitle="If your question relates to a specific dispute, transaction or risk, it is usually better to outline the full context so it can be considered responsibly."
      >
        <Button asChild size="lg">
          <Link to="/contact">Submit your question</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default FAQ;
