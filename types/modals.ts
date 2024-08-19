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
  DONE = "Done",
  IN_PROGRESS = "In progress",
  IN_COMING = "In coming",
}

/* export interface ClassesType {
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
} */

export interface ExtendedUser extends User {
  role: UserRole;
  phone: string | null;
}

export interface UserSettings {
  name: string;
  phone: string | null;
  image: string | null;
}

export interface MiniClasses {
  id: string;
  price: number;
  startOn: Date;
  endsOn: Date;
  professorPhone: string;
  professorAddress: string;
}

export interface AdminClasses {
  id: string;
  price: number;
  startOn: Date;
  endsOn: Date;
  student: {
    name: string;
    email: string;
  };
}

export interface ClassesType {
  id: string;
  duration: DurationOptions;
  price: number;
  createdAt: Date;
  startOn: Date;
  endsOn: Date;
  studentId: string;
  configurationId: string;
  student: User;
  configuration: ConfigutationType;
}

export interface ConfigutationType {
  id: string;
  address: string;
  phone: string;
  pricePerHour: number;
  image: string;
  classes: ClassesType[];
}

export interface ClassFilters {
  label: string;
  slug: StatusSlug;
}

export type FiltersKeys = "status" | "sortBy" | "page";

export enum StatusSlug {
  ALL = "all",
  DONE = "done",
  IN_PROGRESS = "in-progress",
  IN_COMING = "in-coming",
}

export enum SortBySlug {
  DATE_FIRST = "date-first",
  DATE_LAST = "date-last",
}

export type AdminStudents = Pick<User, "email" | "name" | "image" | "id"> & {
  _count: { classes: number };
};

export interface DurationPieType {
  duration: "60" | "90" | "120";
  value: number;
  color: string;
}

export interface TimeSeriesType {
  label: string;
  sales: number;
}
