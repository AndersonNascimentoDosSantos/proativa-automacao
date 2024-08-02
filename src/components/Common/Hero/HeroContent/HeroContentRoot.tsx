import { cn } from "@/lib/utils";
import { BaseContainerType } from "@/types.d";

interface HeroRoot extends BaseContainerType {
  className?: string;
}
export const HeroContentRoot = ({ children, className }: HeroRoot) => {
  return (
    <div className={cn("flex flex-col  gap-4 ", className)}>{children}</div>
  );
};
