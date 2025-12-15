import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  country: z.string().trim().min(2, "Please enter your country."),
  email: z.string().trim().email("Please enter a valid email address."),
  service: z.string().trim().min(2, "Please select or describe a service."),
  urgency: z.string().trim().min(2, "Please indicate the urgency."),
  issue: z
    .string()
    .trim()
    .min(20, "Please describe your issue with at least 20 characters."),
  documents: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || (files instanceof FileList && files.length === 0)) return true;
        if (!(files instanceof FileList)) return false;
        if (files.length > 5) return false;
        return Array.from(files).every((file) => file.size <= 5 * 1024 * 1024);
      },
      { message: "You may attach up to 5 documents, each up to 5MB." },
    ),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  serviceHint?: string;
}

export const ContactForm = ({ serviceHint }: ContactFormProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: serviceHint ?? "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const subject = "New Bangladesh legal enquiry";
      const bodyLines = [
        `Name: ${values.name}`,
        `Country: ${values.country}`,
        `Email: ${values.email}`,
        `Service: ${values.service}`,
        `Urgency: ${values.urgency}`,
        "",
        "Issue:",
        values.issue,
      ];
      const mailtoHref = `mailto:contact@meridianchambers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        bodyLines.join("\n"),
      )}`;

      window.location.href = mailtoHref;

      toast({
        title: "Submission prepared",
        description:
          "Thank you. Your submission has been received. We will review your matter and respond accordingly.",
      });

      reset({ ...values, issue: "" });
    } catch (error) {
      console.error("Contact form submission error", error);
      toast({
        title: "There was a problem preparing your message",
        description: "Please try again or email contact@meridianchambers.com directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]"
    >
      <div className="space-y-1">
        <label className="text-sm font-medium">Name</label>
        <Input placeholder="Full name" {...register("name")} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium">Country of residence</label>
          <Input placeholder="Country" {...register("country")} />
          {errors.country && <p className="text-xs text-destructive">{errors.country.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <Input placeholder="you@example.com" type="email" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium">Service</label>
          <Input placeholder="e.g. Money Recovery, Property Dispute" {...register("service")} />
          {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Urgency</label>
          <Input placeholder="e.g. Within 7 days, Within 1 month" {...register("urgency")} />
          {errors.urgency && <p className="text-xs text-destructive">{errors.urgency.message}</p>}
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">Brief outline of your issue</label>
        <Textarea
          rows={5}
          placeholder="Please explain your situation, key dates, amounts involved and any deadlines. Do not include extremely sensitive personal data at this stage."
          {...register("issue")}
        />
        {errors.issue && <p className="text-xs text-destructive">{errors.issue.message}</p>}
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">Attach documents (optional)</label>
        <Input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          {...register("documents")}
        />
        {errors.documents && <p className="text-xs text-destructive">{errors.documents.message as string}</p>}
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Files selected here are validated in your browser only and are not uploaded to any server at this stage.
        </p>
      </div>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        By submitting this form you acknowledge that no lawyer–client relationship is created unless and until your
        matter is formally accepted in writing. Please do not share passwords or extremely sensitive identifiers.
      </p>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Start Legal Process"}
      </Button>
    </form>
  );
};
