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
  issue: z.string().trim().min(20, "Please describe your issue with at least 20 characters."),
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

  const onSubmit = (values: ContactFormValues) => {
    // No backend as requested: simulate success and encourage direct email.
    console.info("Contact form submitted (not sent to backend):", values);
    toast({
      title: "Form not yet connected",
      description:
        "Your details are validated locally only. Please copy this information into an email to proceed with your matter.",
    });
    reset({ ...values, issue: "" });
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
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        By submitting this form you acknowledge that no lawyer–client relationship is created unless and until your
        matter is formally accepted in writing. Please do not share passwords or extremely sensitive identifiers.
      </p>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Start Legal Process (Local Preview Only)
      </Button>
    </form>
  );
};
