import Link from "next/link";
import { ElementType } from "react";

export const HeroContentAction = ({
  text,
  Icon,
}: {
  text: string;
  Icon: ElementType;
}) => {
  return (
    <Link
      href="#"
      className=" flex gap-2 items-center rounded-3xl text-lg bg-observatory-500 md:w-[fit-content] p-4 text-observatory-50"
    >
      <Icon />
      <span>{text}</span>
    </Link>
  );
};
