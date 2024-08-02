import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export default function HeroImage({
  heroImage,
  className,
}: {
  heroImage: StaticImageData;
  className?: string;
}) {
  return (
    <article className={cn("flex justify-center  mx-auto flex-[1]", className)}>
      <Image src={heroImage} alt="" className="aspect-square" />
    </article>
  );
}
