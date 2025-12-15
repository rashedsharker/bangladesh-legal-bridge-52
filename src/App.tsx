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
import FamilyPersonalLaw from "./pages/FamilyPersonalLaw";
import BusinessCorporateLegal from "./pages/BusinessCorporateLegal";
import DocumentationAdvisory from "./pages/DocumentationAdvisory";
import BankingFinancialMatters from "./pages/BankingFinancialMatters";
import VerificationSearchServices from "./pages/VerificationSearchServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PropertyRealEstate from "./pages/PropertyRealEstate";
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
          <Route path="/family-personal-law-bangladesh" element={<FamilyPersonalLaw />} />
          <Route path="/business-corporate-legal-services-bangladesh" element={<BusinessCorporateLegal />} />
          <Route path="/documentation-advisory-bangladesh" element={<DocumentationAdvisory />} />
          <Route path="/banking-financial-matters-bangladesh" element={<BankingFinancialMatters />} />
          <Route path="/verification-search-services-bangladesh" element={<VerificationSearchServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/property-real-estate-bangladesh" element={<PropertyRealEstate />} />

          {/* Special service detail pages */}
          <Route
            path="/legal-notice-demand-letter-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Legal Notice & Demand Letter Services in Bangladesh"
                seoDescription="Strategic drafting and service of legal notices in Bangladesh to resolve disputes, recover dues and enforce legal rights for overseas clients."
                canonicalPath="/legal-notice-demand-letter-bangladesh"
                eyebrow="Special Service: Legal Notice"
                heroTitle="Legal Notice & Demand Letter Services in Bangladesh"
                heroSubtitle="Strategic drafting and service of legal notices to resolve disputes, recover dues, and enforce legal rightswithout immediate court action."
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
                seoTitle="Money Recovery Services in Bangladesh"
                seoDescription="Money recovery and debt collection services in Bangladesh for overseas individuals and businesses."
                canonicalPath="/money-recovery-debt-collection-bangladesh"
                eyebrow="Special Service: Money Recovery"
                heroTitle="Money Recovery Services in Bangladesh"
                heroSubtitle="Legal assistance for overseas clients to recover unpaid money through structured legal notice, negotiation, settlement, and litigation where required."
                primaryCtaLabel="Start Money Recovery Process"
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
                seoTitle="Legal Investigation & Verification Services in Bangladesh"
                seoDescription="Legal investigation and verification services in Bangladesh for overseas clients."
                canonicalPath="/legal-investigation-verification-bangladesh"
                eyebrow="Special Service: Investigation"
                heroTitle="Legal Investigation & Verification Services"
                heroSubtitle="On-ground verification and legal investigation in Bangladesh to help overseas clients confirm facts before taking legal action."
                primaryCtaLabel="Request Legal Investigation"
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
                seoTitle="Contract Drafting & Legal Review under Bangladesh Law"
                seoDescription="Drafting, reviewing, and vetting agreements under Bangladesh law for overseas clients."
                canonicalPath="/contract-drafting-review-bangladesh"
                eyebrow="Special Service: Contracts"
                heroTitle="Contract Drafting & Legal Review under Bangladesh Law"
                heroSubtitle="Drafting, reviewing, and vetting agreements to ensure legal compliance and protect the interests of overseas clients."
                primaryCtaLabel="Send Contract for Review"
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
                seoDescription="Case handling and court representation in Bangladesh for overseas clients."
                canonicalPath="/case-handling-court-representation-bangladesh"
                eyebrow="Special Service: Court Representation"
                heroTitle="Case Handling & Court Representation in Bangladesh"
                heroSubtitle="Professional handling of court cases in Bangladesh with proper filing, representation, and written updates for clients residing abroad."
                primaryCtaLabel="Discuss Case Handling"
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
          {/* Family & Personal Law child pages */}
          <Route
            path="/divorce-matrimonial-disputes-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Divorce & Matrimonial Disputes in Bangladesh for Overseas Clients"
                seoDescription="Assistance with divorce and matrimonial disputes in Bangladesh for overseas clients."
                canonicalPath="/divorce-matrimonial-disputes-bangladesh"
                eyebrow="Family & Personal Law"
                heroTitle="Divorce and matrimonial disputes involving Bangladesh."
                heroSubtitle="Support with divorce, separation and related matrimonial disputes where Bangladesh law or courts are involved."
                primaryCtaLabel="Discuss a matrimonial issue"
                serviceName="Divorce & Matrimonial Disputes"
                categoryLabel="Family & Personal Law"
              />
            }
          />
          <Route
            path="/maintenance-custody-matters-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Maintenance & Custody Matters in Bangladesh"
                seoDescription="Support for maintenance and child custody matters linked to Bangladesh for overseas clients."
                canonicalPath="/maintenance-custody-matters-bangladesh"
                eyebrow="Family & Personal Law"
                heroTitle="Maintenance and custody matters under Bangladesh law."
                heroSubtitle="Guidance on maintenance, guardianship and custody applications involving children or dependants connected to Bangladesh."
                primaryCtaLabel="Discuss maintenance or custody"
                serviceName="Maintenance & Custody Matters"
                categoryLabel="Family & Personal Law"
              />
            }
          />
          <Route
            path="/succession-inheritance-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Succession & Inheritance in Bangladesh"
                seoDescription="Succession and inheritance advice under Bangladesh law for overseas heirs and family members."
                canonicalPath="/succession-inheritance-bangladesh"
                eyebrow="Family & Personal Law"
                heroTitle="Succession and inheritance issues involving Bangladesh property and family."
                heroSubtitle="Assistance with succession planning and inheritance disputes where assets or heirs are linked to Bangladesh."
                primaryCtaLabel="Discuss succession or inheritance"
                serviceName="Succession & Inheritance"
                categoryLabel="Family & Personal Law"
              />
            }
          />
          {/* Property & Real Estate child pages */}
          <Route
            path="/property-disputes-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Property Disputes in Bangladesh for Overseas Clients"
                seoDescription="Support with contested property and possession disputes in Bangladesh for overseas owners and heirs."
                canonicalPath="/property-disputes-bangladesh"
                eyebrow="Property & Real Estate"
                heroTitle="Property and possession disputes connected to Bangladesh."
                heroSubtitle="Guidance and representation in Bangladesh property disputes, including possession, co-ownership and unauthorised occupation issues."
                primaryCtaLabel="Discuss a property dispute"
                serviceName="Property Disputes"
                categoryLabel="Property & Real Estate"
              />
            }
          />
          <Route
            path="/land-title-verification-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Land & Title Verification in Bangladesh"
                seoDescription="Land and title record verification in Bangladesh for overseas purchasers, investors and heirs."
                canonicalPath="/land-title-verification-bangladesh"
                eyebrow="Property & Real Estate"
                heroTitle="Verification of land and title records in Bangladesh."
                heroSubtitle="Structured verification of land documents, mutation and registry records before you commit to a transaction or strategy involving Bangladesh property."
                primaryCtaLabel="Request land & title verification"
                serviceName="Land & Title Verification"
                categoryLabel="Property & Real Estate"
              />
            }
          />
          <Route
            path="/sale-deed-agreement-review-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Sale Deed & Agreement Review under Bangladesh Law"
                seoDescription="Review of sale deeds and related agreements for Bangladesh property transactions involving overseas parties."
                canonicalPath="/sale-deed-agreement-review-bangladesh"
                eyebrow="Property & Real Estate"
                heroTitle="Review of Bangladesh property sale deeds and related agreements."
                heroSubtitle="Bangladesh-law review of draft or executed sale deeds, powers of attorney and collateral documents before or after a property transaction."
                primaryCtaLabel="Review a sale deed or agreement"
                serviceName="Sale Deed / Agreement Review"
                categoryLabel="Property & Real Estate"
              />
            }
          />
          <Route
            path="/property-due-diligence-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Property Due Diligence in Bangladesh"
                seoDescription="Property due diligence in Bangladesh for proposed acquisitions, investments and restructuring by overseas clients."
                canonicalPath="/property-due-diligence-bangladesh"
                eyebrow="Property & Real Estate"
                heroTitle="Structured property due diligence in Bangladesh."
                heroSubtitle="Fact-specific due diligence on property status, encumbrances and counterparties in Bangladesh before you commit capital or restructure holdings."
                primaryCtaLabel="Request property due diligence"
                serviceName="Property Due Diligence"
                categoryLabel="Property & Real Estate"
              />
            }
          />
          <Route
            path="/inheritance-succession-property-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Inheritance & Succession for Bangladesh Property"
                seoDescription="Inheritance and succession advice focused on Bangladesh-situated property for overseas heirs and families."
                canonicalPath="/inheritance-succession-property-bangladesh"
                eyebrow="Property & Real Estate"
                heroTitle="Inheritance and succession issues involving Bangladesh property."
                heroSubtitle="Advice on heirship, division and transfer of Bangladesh property under local succession and personal law rules."
                primaryCtaLabel="Discuss inheritance-linked property"
                serviceName="Inheritance & Succession Matters"
                categoryLabel="Property & Real Estate"
              />
            }
          />
          <Route
            path="/personal-law-issues-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Muslim, Hindu & Christian Personal Law Issues in Bangladesh"
                seoDescription="Advice on Muslim, Hindu and Christian personal law issues in Bangladesh for overseas clients."
                canonicalPath="/personal-law-issues-bangladesh"
                eyebrow="Family & Personal Law"
                heroTitle="Personal law issues under Bangladesh Muslim, Hindu and Christian law."
                heroSubtitle="Understanding how religion-specific personal law in Bangladesh affects marriage, divorce, maintenance and succession."
                primaryCtaLabel="Discuss a personal law issue"
                serviceName="Muslim / Hindu / Christian Personal Law Issues"
                categoryLabel="Family & Personal Law"
              />
            }
          />
          {/* Business & Corporate Legal Services child pages */}
          <Route
            path="/business-legal-advisory-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Business Legal Advisory in Bangladesh"
                seoDescription="Business legal advisory for Bangladesh-related matters affecting overseas stakeholders."
                canonicalPath="/business-legal-advisory-bangladesh"
                eyebrow="Business & Corporate Legal Services"
                heroTitle="Business legal advisory for Bangladesh operations and transactions."
                heroSubtitle="Strategic legal input on business decisions, risk allocation and documentation involving Bangladesh."
                primaryCtaLabel="Request business legal advisory"
                serviceName="Business Legal Advisory"
                categoryLabel="Business & Corporate Legal Services"
              />
            }
          />
          <Route
            path="/company-agreements-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Company Agreements in Bangladesh"
                seoDescription="Preparation and review of company agreements in Bangladesh for overseas stakeholders."
                canonicalPath="/company-agreements-bangladesh"
                eyebrow="Business & Corporate Legal Services"
                heroTitle="Company-level agreements governed by Bangladesh law."
                heroSubtitle="Support with drafting and reviewing core company agreements linked to Bangladesh entities."
                primaryCtaLabel="Discuss company agreements"
                serviceName="Company Agreements"
                categoryLabel="Business & Corporate Legal Services"
              />
            }
          />
          <Route
            path="/shareholder-agreements-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Shareholder Agreements in Bangladesh"
                seoDescription="Shareholder agreement drafting and review in Bangladesh for overseas investors and partners."
                canonicalPath="/shareholder-agreements-bangladesh"
                eyebrow="Business & Corporate Legal Services"
                heroTitle="Shareholder agreements for Bangladesh companies."
                heroSubtitle="Structuring rights and obligations of shareholders in Bangladesh-incorporated entities."
                primaryCtaLabel="Discuss a shareholder agreement"
                serviceName="Shareholder Agreements"
                categoryLabel="Business & Corporate Legal Services"
              />
            }
          />
          <Route
            path="/legal-compliance-support-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Legal Compliance Support in Bangladesh"
                seoDescription="Legal compliance support for Bangladesh operations serving overseas stakeholders."
                canonicalPath="/legal-compliance-support-bangladesh"
                eyebrow="Business & Corporate Legal Services"
                heroTitle="Legal compliance support for Bangladesh-based operations."
                heroSubtitle="Identifying and addressing regulatory obligations that affect your business activities in Bangladesh."
                primaryCtaLabel="Discuss compliance support"
                serviceName="Legal Compliance Support"
                categoryLabel="Business & Corporate Legal Services"
              />
            }
          />
          <Route
            path="/commercial-contracts-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Commercial Contracts in Bangladesh"
                seoDescription="Commercial contract drafting and review in Bangladesh for overseas clients."
                canonicalPath="/commercial-contracts-bangladesh"
                eyebrow="Business & Corporate Legal Services"
                heroTitle="Commercial contracts governed by Bangladesh law."
                heroSubtitle="Preparing and reviewing commercial contracts to manage risk and support enforceability in Bangladesh."
                primaryCtaLabel="Discuss commercial contracts"
                serviceName="Commercial Contracts"
                categoryLabel="Business & Corporate Legal Services"
              />
            }
          />
          {/* Documentation & Advisory child pages */}
          <Route
            path="/legal-opinion-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Legal Opinion in Bangladesh for Overseas Clients"
                seoDescription="Formal Bangladesh-law legal opinions for overseas clients."
                canonicalPath="/legal-opinion-bangladesh"
                eyebrow="Documentation & Advisory"
                heroTitle="Bangladesh-law legal opinions for transactions and disputes."
                heroSubtitle="Issuing structured legal opinions so overseas clients can make informed decisions involving Bangladesh."
                primaryCtaLabel="Request a legal opinion"
                serviceName="Legal Opinion"
                categoryLabel="Documentation & Advisory"
              />
            }
          />
          <Route
            path="/power-of-attorney-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Power of Attorney for Bangladesh Matters"
                seoDescription="Preparation and review of powers of attorney for use in Bangladesh."
                canonicalPath="/power-of-attorney-bangladesh"
                eyebrow="Documentation & Advisory"
                heroTitle="Powers of attorney suitable for Bangladesh use."
                heroSubtitle="Drafting and reviewing powers of attorney intended to be used before Bangladesh authorities and counterparties."
                primaryCtaLabel="Discuss a power of attorney"
                serviceName="Power of Attorney"
                categoryLabel="Documentation & Advisory"
              />
            }
          />
          <Route
            path="/affidavits-declarations-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Affidavits & Declarations in Bangladesh"
                seoDescription="Preparation of affidavits and declarations for use in Bangladesh."
                canonicalPath="/affidavits-declarations-bangladesh"
                eyebrow="Documentation & Advisory"
                heroTitle="Affidavits and declarations for Bangladesh courts and authorities."
                heroSubtitle="Preparing sworn statements that comply with Bangladesh evidentiary and procedural rules."
                primaryCtaLabel="Discuss affidavits or declarations"
                serviceName="Affidavits & Declarations"
                categoryLabel="Documentation & Advisory"
              />
            }
          />
          <Route
            path="/legal-vetting-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Legal Vetting in Bangladesh"
                seoDescription="Legal vetting of documents and structures under Bangladesh law for overseas clients."
                canonicalPath="/legal-vetting-bangladesh"
                eyebrow="Documentation & Advisory"
                heroTitle="Legal vetting of documents and structures involving Bangladesh."
                heroSubtitle="Reviewing documentation and arrangements to identify legal and procedural risk under Bangladesh law."
                primaryCtaLabel="Request legal vetting"
                serviceName="Legal Vetting"
                categoryLabel="Documentation & Advisory"
              />
            }
          />
          <Route
            path="/drafting-documentation-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Drafting & Documentation in Bangladesh"
                seoDescription="Drafting and preparation of Bangladesh-compliant legal documentation for overseas clients."
                canonicalPath="/drafting-documentation-bangladesh"
                eyebrow="Documentation & Advisory"
                heroTitle="Drafting and preparation of Bangladesh legal documentation."
                heroSubtitle="Preparing clear, enforceable documentation that can be relied on in Bangladesh if a matter escalates."
                primaryCtaLabel="Discuss drafting requirements"
                serviceName="Drafting & Documentation"
                categoryLabel="Documentation & Advisory"
              />
            }
          />
          {/* Banking & Financial Matters child pages */}
          <Route
            path="/cheque-dishonour-ni-act-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Cheque Dishonour (NI Act) Cases in Bangladesh"
                seoDescription="Support with cheque dishonour (NI Act) proceedings in Bangladesh for overseas clients."
                canonicalPath="/cheque-dishonour-ni-act-bangladesh"
                eyebrow="Banking & Financial Matters"
                heroTitle="Cheque dishonour proceedings under the NI Act in Bangladesh."
                heroSubtitle="Advising on and pursuing cheque dishonour claims where instruments are drawn or payable in Bangladesh."
                primaryCtaLabel="Discuss a cheque dishonour matter"
                serviceName="Cheque Dishonour (NI Act)"
                categoryLabel="Banking & Financial Matters"
              />
            }
          />
          <Route
            path="/loan-recovery-support-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Loan Recovery Support in Bangladesh"
                seoDescription="Loan recovery support and related actions in Bangladesh for overseas lenders and guarantors."
                canonicalPath="/loan-recovery-support-bangladesh"
                eyebrow="Banking & Financial Matters"
                heroTitle="Loan recovery support for Bangladesh-connected facilities."
                heroSubtitle="Combining contractual remedies and statutory tools to recover sums due under Bangladesh-linked facilities."
                primaryCtaLabel="Discuss loan recovery"
                serviceName="Loan Recovery Support"
                categoryLabel="Banking & Financial Matters"
              />
            }
          />
          <Route
            path="/banking-disputes-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Banking Disputes in Bangladesh"
                seoDescription="Banking dispute resolution in Bangladesh for overseas clients."
                canonicalPath="/banking-disputes-bangladesh"
                eyebrow="Banking & Financial Matters"
                heroTitle="Banking disputes involving Bangladesh banks and financial institutions."
                heroSubtitle="Assistance in disputes with Bangladesh banks and financial institutions affecting overseas clients."
                primaryCtaLabel="Discuss a banking dispute"
                serviceName="Banking Disputes"
                categoryLabel="Banking & Financial Matters"
              />
            }
          />
          {/* Verification & Search Services child pages */}
          <Route
            path="/court-case-search-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Court Case Search in Bangladesh"
                seoDescription="Court case search services in Bangladesh for overseas clients."
                canonicalPath="/court-case-search-bangladesh"
                eyebrow="Verification & Search Services"
                heroTitle="Court case search in Bangladesh."
                heroSubtitle="Identifying and tracking court proceedings in Bangladesh relevant to your matter or counterparties."
                primaryCtaLabel="Request a court case search"
                serviceName="Court Case Search"
                categoryLabel="Verification & Search Services"
              />
            }
          />
          <Route
            path="/criminal-record-search-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Criminal Record Search in Bangladesh"
                seoDescription="Criminal record search services in Bangladesh for overseas clients."
                canonicalPath="/criminal-record-search-bangladesh"
                eyebrow="Verification & Search Services"
                heroTitle="Criminal record search in Bangladesh."
                heroSubtitle="Checking available records to identify whether individuals have reported criminal history in Bangladesh."
                primaryCtaLabel="Request a criminal record search"
                serviceName="Criminal Record Search"
                categoryLabel="Verification & Search Services"
              />
            }
          />
          <Route
            path="/business-background-check-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Business Background Check in Bangladesh"
                seoDescription="Business background check services in Bangladesh for overseas counterparties."
                canonicalPath="/business-background-check-bangladesh"
                eyebrow="Verification & Search Services"
                heroTitle="Business background checks on Bangladesh counterparties."
                heroSubtitle="Reviewing corporate, litigation and regulatory footprints of Bangladesh businesses you plan to engage with."
                primaryCtaLabel="Request a business background check"
                serviceName="Business Background Check"
                categoryLabel="Verification & Search Services"
              />
            }
          />
          <Route
            path="/property-record-search-bangladesh"
            element={
              <ServiceDetailPage
                seoTitle="Property Record Search in Bangladesh"
                seoDescription="Property record search services in Bangladesh for overseas clients."
                canonicalPath="/property-record-search-bangladesh"
                eyebrow="Verification & Search Services"
                heroTitle="Property record search in Bangladesh."
                heroSubtitle="Identifying recorded ownership, encumbrances and related matters affecting Bangladesh property."
                primaryCtaLabel="Request a property record search"
                serviceName="Property Record Search"
                categoryLabel="Verification & Search Services"
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
