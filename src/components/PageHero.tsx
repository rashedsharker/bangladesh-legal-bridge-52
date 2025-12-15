import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  rightElement?: ReactNode;
}

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  rightElement,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b bg-[radial-gradient(circle_at_top,_hsl(222_60%_12%)_0,_hsl(222_60%_10%)_40%,_hsl(222_45%_8%)_75%)] text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background/90 opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-primary blur-3xl" />
      </div>
      <div className="container relative flex flex-col gap-12 py-20 md:flex-row md:items-center">
        <div className="max-w-xl space-y-6 animate-fade-in">
          <p className="eyebrow text-accent-foreground/90">{eyebrow}</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="max-w-xl text-sm md:text-base text-primary-foreground/80">{subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href={primaryCtaHref}>{primaryCtaLabel}</a>
            </Button>
            {secondaryCtaHref && secondaryCtaLabel && (
              <Button size="lg" variant="outline" className="border-accent text-primary-foreground" asChild>
                <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
              </Button>
            )}
          </div>
        </div>
        <div className="ml-auto flex max-w-md justify-center">
          {rightElement ?? (
            <div className="relative h-64 w-full max-w-sm overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-primary/20 via-primary/10 to-background/5 p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80">Bangladesh Jurisdiction</p>
                  <p className="mt-4 text-sm text-primary-foreground/80">
                    Strategically built for overseas clients who need precise, on-the-ground legal execution in
                    Bangladesh without travelling.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-primary/30 p-3">
                    <p className="font-semibold">Practicing Advocate</p>
                    <p className="mt-1 text-primary-foreground/80">Bangladesh Bar enrolled, court-ready representation.</p>
                  </div>
                  <div className="rounded-xl bg-primary/20 p-3">
                    <p className="font-semibold">Overseas-Focused</p>
                    <p className="mt-1 text-primary-foreground/80">Time zones, distance and documentation handled remotely.</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(40_60%_75%)/0.45,_transparent_60%)]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
