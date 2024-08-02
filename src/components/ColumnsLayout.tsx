import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ColumnsLayoutProps {
  children?: ReactNode;
  className?: string;
  inverted?: boolean;
}

export function ColumnsLayout({
  children,
  className,
  inverted,
}: ColumnsLayoutProps) {
  return (
    <div
      className={cn(
        `flex flex-col md:grid
        ${inverted ? "lg:grid-cols-[minmax(0,392px)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,392px)]"} gap-6`,
        className
      )}
    >
      {children}
    </div>
  );
}
