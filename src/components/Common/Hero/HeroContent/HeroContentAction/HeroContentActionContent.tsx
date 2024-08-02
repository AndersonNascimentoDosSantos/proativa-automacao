import { cn } from "@/lib/utils";

export const HeroContentActionContent = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl",
        className
      )}
    >
      {text}
    </span>
  );
};
