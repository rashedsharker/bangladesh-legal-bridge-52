// Update this page (the content is just a fallback if you fail to update the page)

import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "react-router-dom";
import { ShieldCheck, Globe2, Scale } from "lucide-react";
import heroLadyJustice from "@/assets/home-hero-lady-justice.png";

const Index = () => {
  usePageSEO({
    title: "Trusted Legal Representation in Bangladesh for Overseas Clients",
    description:
      "Premium Bangladesh law firm for overseas clients. Legal notices, money recovery, investigations, contracts and court representation without travelling.",
    canonicalPath: "/",
  });

  return (
    <MainLayout>
      <section className="hero-paper border-b">
        <div className="container grid gap-12 py-16 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent">
              INTERNATIONAL LEGAL SERVICES | BANGLADESH
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Resolving Legal Complexities
              <br className="hidden md:block" />
              with Clarity and Confidence
            </h1>
            <p className="max-w-xl text-sm md:text-base lg:text-lg font-medium text-muted-foreground">
              Professional legal assistance in Bangladesh for overseas clients, including legal notices, money recovery,
              investigations, contracts, and court representation—handled by a practicing Advocate.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="#contact">Start Legal Process</a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="px-0 text-sm font-semibold text-foreground hover:bg-transparent hover:text-foreground"
                asChild
              >
                <Link to="/special-legal-services-bangladesh" className="story-link">
                  View Special Services
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Practicing Advocate in Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Serving international individuals &amp; businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Confidential, ethics-driven legal practice</span>
              </div>
            </div>
          </div>

          <div className="relative order-first flex justify-center md:order-none">
            <div className="relative h-64 w-52 xs:h-72 xs:w-56 sm:h-80 sm:w-64 md:h-[340px] md:w-[260px] lg:h-[380px] lg:w-[280px]">
              <img
                src={heroLadyJustice}
                alt="Bronze Lady Justice statue representing international legal services in Bangladesh"
                className="h-full w-full object-contain object-bottom drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-background/80">
        <div className="container grid gap-8 py-14 md:grid-cols-[2fr,3fr]">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Bangladesh counsel built for distance, time zones and complexity.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Overseas clients often struggle to coordinate matters in Bangladesh: unreliable communication, fragmented
              updates, and limited visibility on what is actually happening on the ground. Meridian Chambers Bangladesh is
              structured to close that gap. Every instruction is handled by a practicing Advocate, aligned with local
              procedure and Bangladesh Bar ethics, while keeping you informed in clear, time-zone friendly language.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="hover-scale rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/80">
                Premium Bangladesh Counsel
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Led by a practicing Advocate in Bangladesh providing court-ready legal strategy, not generic consultancy.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/80">
                Designed for Overseas Clients
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                From initial briefing to final reporting, communication is structured around clients based in Europe,
                North America, the Middle East and Asia-Pacific.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/80">
                Clear Written Updates
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                You receive structured written updates so you know exactly what has been filed, served or heard in court
                and what comes next.
              </p>
            </div>
            <div className="hover-scale rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/80">
                Secure Fee Arrangements
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Professional fee arrangements are agreed upfront, with international payment options and transparent
                scope of work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container space-y-8 py-14">
          <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Special Services for Overseas Clients</p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                High-impact legal services that can be executed without travelling to Bangladesh.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/special-legal-services-bangladesh">View all special services</Link>
            </Button>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Legal Notice & Demand Letter",
                description:
                  "Drafting and dispatch of precise, enforceable legal notices on your behalf to individuals or entities in Bangladesh.",
                href: "/legal-notice-demand-letter-bangladesh",
              },
              {
                title: "Money Recovery & Debt Collection",
                description:
                  "Structured recovery strategy combining legal notice, negotiation and, where necessary, formal proceedings.",
                href: "/money-recovery-debt-collection-bangladesh",
              },
              {
                title: "Legal Investigation & Verification",
                description:
                  "Discreet factual and document checks in Bangladesh before you commit to transactions or relationships.",
                href: "/legal-investigation-verification-bangladesh",
              },
              {
                title: "Contract Drafting & Review",
                description:
                  "Bangladesh-law focused contracts for employment, services, distribution, agency, investment and more.",
                href: "/contract-drafting-review-bangladesh",
              },
              {
                title: "Case Handling & Court Representation",
                description:
                  "End-to-end case management in Bangladesh courts for selected civil, commercial and criminal matters.",
                href: "/case-handling-court-representation-bangladesh",
              },
            ].map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="group flex flex-col justify-between rounded-2xl border bg-card/80 p-6 hover:bg-card shadow-[var(--shadow-card)] transition-colors hover-scale"
              >
                <div className="space-y-3">
                  <p className="eyebrow text-[10px] text-accent-foreground/90">Special Service</p>
                  <h3 className="text-lg font-semibold group-hover:text-primary">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
                <span className="mt-4 text-sm font-medium text-primary story-link">Explore service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-background/80">
        <div className="container space-y-8 py-14">
          <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Broader Bangladesh Legal Support</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Practice Areas for overseas clients.</h2>
            </div>
            <Button asChild variant="ghost">
              <Link to="/other-legal-services-bangladesh">View all practice areas</Link>
            </Button>
          </header>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Litigation & Dispute Resolution",
              "Property & Real Estate",
              "Family & Personal Law",
              "Business & Corporate Legal Services",
              "Documentation & Advisory",
              "Banking & Financial Matters",
            ].map((title) => (
              <Link
                key={title}
                to="/other-legal-services-bangladesh"
                className="hover-scale flex flex-col justify-between rounded-2xl border bg-card/80 p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore how this practice assists overseas clients with {title.toLowerCase()} in Bangladesh.
                </p>
                <span className="mt-4 text-sm font-medium text-primary story-link">View related services</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary/40">
        <div className="container grid gap-10 py-14 md:grid-cols-[2fr,3fr] md:items-center">
          <div className="space-y-6">
            <p className="eyebrow">How it works</p>
            <h2 className="text-2xl md:text-3xl font-semibold">A clear, structured process for overseas clients.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              The entire workflow is designed so that you can brief, instruct and receive updates remotely. You are kept
              informed at every stage with clear written communication.
            </p>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Share issue & documents",
                text: "You share a concise summary of your matter and any key documents electronically for an initial view.",
              },
              {
                title: "Legal review & confirmation",
                text: "The Advocate reviews your instructions, identifies legal options under Bangladesh law and confirms scope.",
              },
              {
                title: "Professional fee & payment",
                text: "You receive a clear fee proposal with stages, followed by international payment options where applicable.",
              },
              {
                title: "Execution & written updates",
                text: "Once instructed, steps are executed in Bangladesh with written progress updates and next-step timelines.",
              },
            ].map((step, index) => (
              <li
                key={step.title}
                className="hover-scale flex gap-4 rounded-2xl border bg-card p-4 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="border-b bg-background/80">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Confidential initial contact</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Share your Bangladesh legal issue securely.</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Use this form to outline your matter in Bangladesh. Your submission is reviewed by a practicing Advocate. No
              client-lawyer relationship is formed until your matter is expressly accepted in writing and terms of
              engagement are agreed.
            </p>
            <div className="mt-4 grid gap-3 text-xs text-muted-foreground md:grid-cols-2">
              <div className="rounded-xl border bg-secondary/40 p-3">
                <p className="font-semibold">Consultation booking</p>
                <p className="mt-1">
                  Request a consultation window aligned with your time zone; you will receive confirmation or alternative
                  options by email.
                </p>
              </div>
              <div className="rounded-xl border bg-secondary/40 p-3">
                <p className="font-semibold">International clients</p>
                <p className="mt-1">
                  Matters are commonly handled for clients based in the UK, EU, North America, Middle East and beyond.
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection
        title="Ready to discuss a Bangladesh legal matter?"
        subtitle="If you are facing a dispute, transaction or risk involving Bangladesh, early advice often protects your
        position and avoids avoidable loss."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request a Consultation Slot</Link>
        </Button>
      </CTASection>
    </MainLayout>
  );
};

export default Index;
