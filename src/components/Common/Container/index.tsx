import { cn } from "@/lib/utils";
import { BaseContainerType } from "@/types.d";

export const BaseContainer = ({ children, className }: BaseContainerType) => {
  return (
    <div
      className={cn(
        "relative text-observatory-950 max-w-full bg-[blue] ",
        className
      )}
    >
      {children}
    </div>
  );
};
