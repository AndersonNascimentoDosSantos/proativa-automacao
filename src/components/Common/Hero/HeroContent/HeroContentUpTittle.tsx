import { cn } from "@/lib/utils";

export const HeroContentUpTittle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-observatory-500  text-xs/3 sm:text-sm/3 md:text-md/3 lg:text-lg/3 xl:text-xl/3 2xl:text-2xl/3",
        className
      )}
    >
      {text}
    </p>
  );
};
