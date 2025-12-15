import { ReactNode } from "react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export const CTASection = ({ title, subtitle, children }: CTASectionProps) => {
  return (
    <section className="border-t bg-secondary/40">
      <div className="container grid gap-6 py-12 md:grid-cols-[2fr,1fr] md:items-center">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          <p className="max-w-xl text-sm md:text-base text-muted-foreground">{subtitle}</p>
        </div>
        <div className="md:justify-self-end">{children}</div>
      </div>
    </section>
  );
};
