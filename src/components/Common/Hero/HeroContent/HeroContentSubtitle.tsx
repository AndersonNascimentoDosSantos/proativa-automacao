import { cn } from "@/lib/utils";

export const HeroContentSubtitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p className={cn("text-lg sm:text-xl md:text-2xl", className)}>{text}</p>
  );
};
