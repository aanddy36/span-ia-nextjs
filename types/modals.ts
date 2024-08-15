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

export interface Classes {
  id: string;
  duration: DurationOptions;
  price: number;
  createdAt: Date;
  startsOn: Date;
  endsOn: Date;
  studentId: string;
  studentPhone: string;
  studentName: string;
  studentEmail: string;
  professorId: string;
  professorPhone: string;
  professorAddress: string;
}

export const sessions: Classes[] = [
/*   {
      id: "65b34246745aba856d3b0f6e",
      duration: DurationOptions.SHORT,
      price: 12,
      startsOn: new Date("2024-01-04T09:00:00.000+00:00"),
      endsOn: new Date("2024-01-04T10:00:00.000+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T05:25:26.996+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b34353745aba856d3b0f70",
      duration: DurationOptions.LONG,
      price: 24,
      startsOn: new Date("2024-01-26T05:30:26.996+00:00"),
      endsOn: new Date("2024-01-26T07:30:26.996+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T05:29:55.825+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b34361745aba856d3b0f72",
      duration: DurationOptions.LONG,
      price: 24,
      startsOn: new Date("2024-01-29T05:30:26.996+00:00"),
      endsOn: new Date("2024-01-29T07:30:26.996+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T05:30:09.397+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b34653099bd3a368eff822",
      duration: DurationOptions.MEDIUM,
      price: 18,
      startsOn: new Date("2024-01-29T09:30:26.996+00:00"),
      endsOn: new Date("2024-01-29T11:00:26.996+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T05:42:43.408+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b3ebff2c95ed2ea86b2d3c",
      duration: DurationOptions.SHORT,
      price: 18,
      startsOn: new Date("2024-01-28T05:30:26.996+00:00"),
      endsOn: new Date("2024-01-28T06:30:26.996+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T17:29:35.553+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b3ec3d2c95ed2ea86b2d3e",
      duration: DurationOptions.MEDIUM,
      price: 18,
      startsOn: new Date("2024-01-26T17:30:00.553+00:00"),
      endsOn: new Date("2024-01-26T19:00:00.553+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T17:30:37.643+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b3ec3d2c95ed2ea86b2d3e",
      duration: DurationOptions.MEDIUM,
      price: 18,
      startsOn: new Date("2024-01-26T17:30:00.553+00:00"),
      endsOn: new Date("2024-01-26T19:00:00.553+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T17:30:37.643+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  },
  {
      id: "65b3ec3d2c95ed2ea86b2d3e",
      duration: DurationOptions.MEDIUM,
      price: 18,
      startsOn: new Date("2024-01-26T17:30:00.553+00:00"),
      endsOn: new Date("2024-01-26T19:00:00.553+00:00"),
      studentId: "12345678",
      studentName: "Andres Del Chiaro",
      studentPhone: "3135948642",
      studentEmail: "anchibro@hotmail.com",
      createdAt: new Date("2024-01-26T17:30:37.643+00:00"),
      professorId: "12345678",
      professorPhone: "3135948642",
      professorAddress: "Cra 43b #84-203"
  } */
];
