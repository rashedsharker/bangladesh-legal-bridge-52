import { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/layout/SiteChrome";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="bg-gradient-to-b from-background to-secondary/40">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};
