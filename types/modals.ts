import en from "@/messages/en.json";
import { AvailableHours, User, UserRole } from "@prisma/client";
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
  duration: DurationOptions;
  value: number;
  color: string;
}

export interface TimeSeriesType {
  label: string;
  sales: number;
}

export interface Slot {
  id: string;
  time: number;
  hourStatus: TeacherHoursStatus;
}

export enum TeacherHoursStatus {
  NOT_AVAILABLE = "NOT_AVAILABLE",
  AVAILABLE = "AVAILABLE",
  RESERVED = "RESERVED",
}

export interface HoveredSlotLabel {
  slots: Slot[];
  x: number;
  y: number;
  date: number;
}

export const tempAvailableHours: AvailableHours[] = [
  {
    id: "65b9c4e8d911fba4b5924a62",
    dayInTheWeek: 2,
    time: "04:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a63",
    dayInTheWeek: 2,
    time: "05:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a64",
    dayInTheWeek: 2,
    time: "06:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a65",
    dayInTheWeek: 2,
    time: "06:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a66",
    dayInTheWeek: 2,
    time: "07:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a67",
    dayInTheWeek: 0,
    time: "05:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a68",
    dayInTheWeek: 0,
    time: "06:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a69",
    dayInTheWeek: 0,
    time: "06:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a6a",
    dayInTheWeek: 1,
    time: "01:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a6b",
    dayInTheWeek: 1,
    time: "02:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a6c",
    dayInTheWeek: 1,
    time: "02:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a6d",
    dayInTheWeek: 5,
    time: "07:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a6e",
    dayInTheWeek: 5,
    time: "08:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a6f",
    dayInTheWeek: 5,
    time: "07:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a70",
    dayInTheWeek: 4,
    time: "07:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a71",
    dayInTheWeek: 4,
    time: "06:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a72",
    dayInTheWeek: 3,
    time: "07:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a73",
    dayInTheWeek: 3,
    time: "07:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a74",
    dayInTheWeek: 3,
    time: "09:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a75",
    dayInTheWeek: 2,
    time: "10:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a76",
    dayInTheWeek: 1,
    time: "10:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a77",
    dayInTheWeek: 0,
    time: "11:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a78",
    dayInTheWeek: 3,
    time: "11:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a79",
    dayInTheWeek: 3,
    time: "10:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a7a",
    dayInTheWeek: 3,
    time: "10:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a7b",
    dayInTheWeek: 1,
    time: "10:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a7c",
    dayInTheWeek: 2,
    time: "11:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a7d",
    dayInTheWeek: 0,
    time: "10:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a7e",
    dayInTheWeek: 0,
    time: "09:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a7f",
    dayInTheWeek: 0,
    time: "08:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a80",
    dayInTheWeek: 0,
    time: "09:00",
  },
  {
    id: "65b9c4e8d911fba4b5924a81",
    dayInTheWeek: 5,
    time: "08:30",
  },
  {
    id: "65b9c4e8d911fba4b5924a82",
    dayInTheWeek: 5,
    time: "09:00",
  },
];
