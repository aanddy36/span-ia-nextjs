import en from "@/messages/en.json";
import { User, UserRole } from "@prisma/client";
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

//ENUMS
export enum DurationOptions {
  SHORT = "60",
  MEDIUM = "90",
  LONG = "120",
}

export enum ClassesStatus {
  ALL = "All",
  DONE = "Done",
  IN_PROGRESS = "In progress",
  IN_COMING = "In coming",
}

export interface ClassesType {
  id: string;
  duration: DurationOptions;
  price: number;
  createdAt: Date;
  startsOn: Date;
  endsOn: Date;
  status: ClassesStatus;
  studentId: string;
  studentPhone: string;
  studentName: string;
  studentEmail: string;
  professorId: string;
  professorPhone: string;
  professorAddress: string;
}

export interface ExtendedUser extends User {
  role: UserRole;
  phone: string | null;
}

export interface UserSettings {
  name: string;
  phone: string | null;
  image: string | null;
}
