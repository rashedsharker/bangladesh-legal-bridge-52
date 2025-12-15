import { MainLayout } from "@/components/layout/MainLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const Disclaimer = () => {
  usePageSEO({
    title: "Legal Disclaimer | Meridian Chambers Bangladesh",
    description:
      "Important legal disclaimer for users of the Meridian Chambers Bangladesh website. Information only, not legal advice.",
    canonicalPath: "/disclaimer",
  });

  return (
    <MainLayout>
      <main className="border-b bg-background/80">
        <div className="container space-y-4 py-14 md:py-20 text-sm md:text-base text-muted-foreground">
          <p className="eyebrow">Disclaimer</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
            Legal disclaimer for visitors to this website.
          </h1>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">No legal advice or lawyer–client relationship</h2>
            <p>
              The content of this website is provided for general information purposes only. It is not intended to and does
              not constitute legal advice, opinion or recommendation on any particular matter. You should not act or
              refrain from acting on the basis of any material contained on this website without seeking appropriate legal
              or other professional advice tailored to your specific circumstances.
            </p>
            <p>
              Your use of this website, including the sending of any message or submission via online forms, does not
              create a lawyer–client relationship with Meridian Chambers Bangladesh or any Advocate associated with the
              practice. A lawyer–client relationship will only arise once your matter has been expressly accepted in
              writing and formal terms of engagement have been agreed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Jurisdiction and professional regulation</h2>
            <p>
              The practice operates under the laws and professional regulations of Bangladesh. References to legal
              concepts, procedures or terminology relate to Bangladesh law unless expressly stated otherwise. Nothing on
              this website is intended to constitute a solicitation or offer of legal services in any jurisdiction where
              such conduct would be contrary to local law or professional rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Accuracy, updates and external links</h2>
            <p>
              While reasonable efforts are made to keep the content of this website accurate and up to date, no warranty—
              express or implied—is given as to its accuracy, completeness or currency. Laws and regulations may change,
              and court or regulatory decisions may affect how legal principles are applied in practice. Meridian Chambers
              Bangladesh accepts no responsibility or liability for any loss arising from reliance placed on information
              contained in this website.
            </p>
            <p>
              This website may contain links to third-party websites for convenience. Such links do not imply any
              endorsement or approval of the content on those sites. Meridian Chambers Bangladesh is not responsible for
              the content or privacy practices of external websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Confidentiality and information sent online</h2>
            <p>
              Information sent to the practice via email or online forms before a formal engagement is agreed may not be
              treated as confidential. You should avoid sending highly sensitive personal data, passwords or information
              that would cause serious harm if disclosed, unless and until you are specifically instructed to do so through
              appropriate secure channels.
            </p>
          </section>
        </div>
      </main>
    </MainLayout>
  );
};

export default Disclaimer;
