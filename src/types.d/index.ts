import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface BaseContainerType {
  children: ReactNode;
  className?: string;
}

export interface HeroProps {
  title: string;
  upTitle?: string;
  contentText?: string;
  actionText?: string;
  image: StaticImageData;
}
