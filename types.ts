import en from "@/messages/en.json";
import { StaticImageData } from "next/image";

export type Messages = typeof en;

export type NavbarMessages = keyof typeof en.navbar;

export interface ServiceType {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export interface ReviewType {
  sex: "men" | "women";
  name: string;
  classes: number;
  review: string;
}
