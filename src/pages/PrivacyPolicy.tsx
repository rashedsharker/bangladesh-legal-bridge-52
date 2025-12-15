import { MainLayout } from "@/components/layout/MainLayout";
import { usePageSEO } from "@/hooks/usePageSEO";

const PrivacyPolicy = () => {
  usePageSEO({
    title: "Privacy Policy | Meridian Chambers Bangladesh",
    description: "Privacy policy explaining how Meridian Chambers Bangladesh handles personal data from overseas clients.",
    canonicalPath: "/privacy-policy",
  });

  return (
    <MainLayout>
      <main className="border-b bg-background/80">
        <div className="container space-y-6 py-14 text-sm md:text-base text-muted-foreground">
          <header className="space-y-2">
            <p className="eyebrow">Privacy Policy</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">How your information is handled.</h1>
          </header>
          <p>
            This privacy policy explains in general terms how information submitted through this website is collected,
            used and safeguarded. The practice is based in Bangladesh and all work is carried out under Bangladesh law only.
          </p>
          <p>
            Information provided through the contact form or by email is used solely for the purpose of understanding and,
            where appropriate, responding to your enquiry. Data is not sold or shared with third parties for marketing
            purposes. Reasonable technical and organisational measures are taken to reduce the risk of unauthorised access,
            bearing in mind that no internet transmission can be guaranteed as fully secure.
          </p>
          <p>
            By submitting information you consent to its processing in Bangladesh for the limited purposes described above.
            If you would like to request correction or deletion of information that you have provided, you may contact the
            practice using the email address published on this site.
          </p>
        </div>
      </main>
    </MainLayout>
  );
};

export default PrivacyPolicy;
