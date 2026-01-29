import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, variant = "default", className }: FeatureCardProps) {
  const iconVariants = {
    default: "bg-muted text-primary",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    accent: "bg-accent/20 text-accent-foreground",
  };

  return (
    <div className={cn(
      "bg-card rounded-2xl p-6 hover-lift card-shadow border border-border/50",
      className
    )}>
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", iconVariants[variant])}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

interface HighlightBoxProps {
  children: ReactNode;
  variant?: "quote" | "highlight" | "info";
  className?: string;
}

export function HighlightBox({ children, variant = "highlight", className }: HighlightBoxProps) {
  const variants = {
    quote: "bg-primary/5 border-l-4 border-primary italic",
    highlight: "bg-accent/10 border-l-4 border-accent",
    info: "bg-secondary/10 border-l-4 border-secondary",
  };

  return (
    <div className={cn("p-6 rounded-r-xl", variants[variant], className)}>
      {children}
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center p-6", className)}>
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}
