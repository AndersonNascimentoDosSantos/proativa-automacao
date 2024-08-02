import { cn } from "@/lib/utils";

export const HeroContentTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1 className={cn("w-full text-4xl sm:text-5xl md:text-6xl ", className)}>
      {text}
    </h1>
  );
};
