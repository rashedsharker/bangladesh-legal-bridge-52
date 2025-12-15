import { MainLayout } from "@/components/layout/MainLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const TermsOfUse = () => {
  usePageSEO({
    title: "Terms of Use | Meridian Chambers Bangladesh",
    description: "Terms of use governing access to the Meridian Chambers Bangladesh website.",
    canonicalPath: "/terms-of-use",
  });

  return (
    <MainLayout>
      <main className="border-b bg-background/80">
        <div className="container space-y-6 py-14 text-sm md:text-base text-muted-foreground">
          <header className="space-y-2">
            <p className="eyebrow">Terms of Use</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Website terms of use.</h1>
          </header>
          <p>
            This website provides general information about a Bangladesh legal practice and the services it may offer to
            overseas clients. It does not constitute legal advice and must not be relied on as a substitute for tailored
            advice on your specific circumstances.
          </p>
          <p>
            Use of this site does not create a lawyer–client relationship. No duty to act for you arises unless your matter
            is expressly accepted in writing and formal terms of engagement are agreed. The practice does not accept
            responsibility for loss arising from reliance on material published on this site or on external links.
          </p>
          <p>
            By using this website you agree to these terms of use and to the application of Bangladesh law to any dispute
            concerning the content or your use of it.
          </p>
        </div>
      </main>
    </MainLayout>
  );
};

export default TermsOfUse;
