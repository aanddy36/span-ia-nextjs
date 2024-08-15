import { ClassesStatus } from "@/types/modals";

export const classStatus = (startOn: Date, endsOn: Date): ClassesStatus => {
  const now = new Date();

  if (now < startOn) {
    return ClassesStatus.IN_COMING; // La clase aún no ha comenzado
  } else if (now >= startOn && now <= endsOn) {
    return ClassesStatus.IN_PROGRESS; // La clase está en progreso
  } else {
    return ClassesStatus.DONE; // La clase ya terminó
  }
};
