import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SpecialServices from "./pages/SpecialServices";
import OtherLegalServices from "./pages/OtherLegalServices";
import HowItWorks from "./pages/HowItWorks";
import PaymentAndFees from "./pages/PaymentAndFees";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/special-legal-services-bangladesh" element={<SpecialServices />} />
          <Route path="/other-legal-services-bangladesh" element={<OtherLegalServices />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/payment-and-fees" element={<PaymentAndFees />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Special service detail pages */}
          <Route
            path="/legal-notice-demand-letter-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Legal Notice & Demand Letter in Bangladesh for Overseas Clients"
                seoDescription="Service for drafting and issuing Bangladesh-compliant legal notices and demand letters on behalf of overseas clients."
                canonicalPath="/legal-notice-demand-letter-bangladesh"
                eyebrow="Special Service: Legal Notice"
                heroTitle="Formal legal notices and demand letters issued in Bangladesh on your behalf."
                heroSubtitle="For overseas clients, a correctly framed legal notice under Bangladesh law can set the tone for negotiation, recovery or litigation."
                primaryCtaLabel="Start Legal Notice Process"
                serviceName="Legal Notice & Demand Letter"
                categoryLabel="Special Services"
                isSpecialService
              />
            }
          />
          <Route
            path="/money-recovery-debt-collection-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Money Recovery & Debt Collection in Bangladesh"
                seoDescription="Structured money recovery and debt collection services in Bangladesh for overseas individuals and businesses."
                canonicalPath="/money-recovery-debt-collection-bangladesh"
                eyebrow="Special Service: Money Recovery"
                heroTitle="Structured money recovery and debt collection in Bangladesh."
                heroSubtitle="For unpaid invoices, loans or other receivables in Bangladesh, this service combines legal notices, negotiation and, where necessary, litigation."
                primaryCtaLabel="Discuss Money Recovery"
                serviceName="Money Recovery & Debt Collection"
                categoryLabel="Special Services"
                isSpecialService
              />
            }
          />
          <Route
            path="/legal-investigation-verification-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Legal Investigation & Verification in Bangladesh"
                seoDescription="On-the-ground legal investigation and verification services in Bangladesh for overseas clients."
                canonicalPath="/legal-investigation-verification-bangladesh"
                eyebrow="Special Service: Investigation"
                heroTitle="Targeted legal investigation and verification in Bangladesh."
                heroSubtitle="Before you commit to a transaction or strategy, this service verifies facts, documents and counterparties in Bangladesh."
                primaryCtaLabel="Request Investigation"
                serviceName="Legal Investigation & Verification"
                categoryLabel="Special Services"
                isSpecialService
              />
            }
          />
          <Route
            path="/contract-drafting-review-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Contract Drafting & Review under Bangladesh Law"
                seoDescription="Drafting and review of Bangladesh-law contracts for overseas clients."
                canonicalPath="/contract-drafting-review-bangladesh"
                eyebrow="Special Service: Contracts"
                heroTitle="Bangladesh-law contract drafting and review for overseas parties."
                heroSubtitle="Contracts are prepared or reviewed to reflect Bangladesh law while aligning with your commercial objectives and risk appetite."
                primaryCtaLabel="Discuss Contract Work"
                serviceName="Contract Drafting & Review"
                categoryLabel="Special Services"
                isSpecialService
              />
            }
          />
          <Route
            path="/case-handling-court-representation-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Case Handling & Court Representation in Bangladesh"
                seoDescription="End-to-end case handling and court representation in Bangladesh for overseas clients."
                canonicalPath="/case-handling-court-representation-bangladesh"
                eyebrow="Special Service: Court Representation"
                heroTitle="Court representation in Bangladesh for selected civil and commercial matters."
                heroSubtitle="Matters are prepared and presented before Bangladesh courts by a practicing Advocate, with written updates for overseas clients."
                primaryCtaLabel="Discuss Court Representation"
                serviceName="Case Handling & Court Representation"
                categoryLabel="Special Services"
                isSpecialService
              />
            }
          />

          {/* Other legal service detail pages */}
          <Route
            path="/civil-litigation-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Civil Litigation in Bangladesh for Overseas Clients"
                seoDescription="Assistance with civil litigation in Bangladesh courts for overseas clients."
                canonicalPath="/civil-litigation-bangladesh"
                eyebrow="Litigation & Dispute Resolution"
                heroTitle="Civil litigation before Bangladesh courts for overseas litigants."
                heroSubtitle="From filing to hearings and enforcement, civil litigation steps are managed locally while you remain informed abroad."
                primaryCtaLabel="Discuss Civil Litigation"
                serviceName="Civil Litigation"
                categoryLabel="Litigation & Dispute Resolution"
              />
            }
          />
          <Route
            path="/criminal-litigation-support-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Criminal Litigation Support in Bangladesh"
                seoDescription="Support for criminal-linked litigation in Bangladesh, coordinated for overseas clients."
                canonicalPath="/criminal-litigation-support-bangladesh"
                eyebrow="Litigation & Dispute Resolution"
                heroTitle="Criminal litigation support in Bangladesh."
                heroSubtitle="Where Bangladesh criminal proceedings intersect with your civil or commercial interests, this service provides coordinated support."
                primaryCtaLabel="Discuss Criminal Litigation Support"
                serviceName="Criminal Litigation Support"
                categoryLabel="Litigation & Dispute Resolution"
              />
            }
          />
          <Route
            path="/arbitration-mediation-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Arbitration & Mediation in Bangladesh"
                seoDescription="Arbitration and mediation support in Bangladesh for cross-border disputes."
                canonicalPath="/arbitration-mediation-bangladesh"
                eyebrow="Litigation & Dispute Resolution"
                heroTitle="Arbitration and mediation for Bangladesh-related disputes."
                heroSubtitle="Alternative dispute resolution mechanisms in Bangladesh can often resolve matters more efficiently than full litigation."
                primaryCtaLabel="Explore ADR Options"
                serviceName="Arbitration & Mediation"
                categoryLabel="Litigation & Dispute Resolution"
              />
            }
          />
          <Route
            path="/commercial-disputes-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Commercial Disputes in Bangladesh"
                seoDescription="Handling of commercial disputes in Bangladesh for overseas businesses."
                canonicalPath="/commercial-disputes-bangladesh"
                eyebrow="Litigation & Dispute Resolution"
                heroTitle="Commercial dispute resolution in Bangladesh."
                heroSubtitle="From contractual breaches to shareholder disagreements, commercial disputes are pursued or defended before courts and tribunals in Bangladesh."
                primaryCtaLabel="Discuss a Commercial Dispute"
                serviceName="Commercial Disputes"
                categoryLabel="Litigation & Dispute Resolution"
              />
            }
          />
          <Route
            path="/recovery-suits-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Recovery Suits in Bangladesh"
                seoDescription="Filing and conduct of recovery suits in Bangladesh for unpaid debts and dues."
                canonicalPath="/recovery-suits-bangladesh"
                eyebrow="Litigation & Dispute Resolution"
                heroTitle="Recovery suits to pursue unpaid dues in Bangladesh."
                heroSubtitle="Where pre-litigation efforts have failed, properly framed recovery suits can help enforce your rights in Bangladesh."
                primaryCtaLabel="Discuss a Recovery Suit"
                serviceName="Recovery Suits"
                categoryLabel="Litigation & Dispute Resolution"
              />
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
