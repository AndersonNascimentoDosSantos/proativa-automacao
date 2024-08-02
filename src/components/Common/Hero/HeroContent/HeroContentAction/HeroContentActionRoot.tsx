import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

interface RootHeroContentActionRootProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroContentActionRoot = ({
  children,
  className,
  ...props
}: RootHeroContentActionRootProps) => {
  return (
    <Link
      className={cn(
        " flex gap-2 items-center rounded-3xl text-lg bg-observatory-500 md:w-[fit-content] p-4 text-observatory-50",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
