import { cn } from "@/lib/utils";
import { BaseContainerType } from "@/types.d";
import { ColumnsLayout } from "../../ColumnsLayout";

interface HeroRootProps extends BaseContainerType {
  inverted?: boolean;
}

export const HeroRoot = ({ children, className, inverted }: HeroRootProps) => {
  return (
    <ColumnsLayout
      {...{ inverted }}
      className={cn(
        "bg-observatory-100 px-8 md:px-[10%] lg:px-32 mt-16 lg:mt-24 w-full",
        className
      )}
    >
      {children}
    </ColumnsLayout>
  );
};
