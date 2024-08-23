import { TeacherHoursStatus } from "@/types/modals";

export const addSlotColor = (
  hourStatus: TeacherHoursStatus,
  isAHoveredCell: boolean | undefined,
  isASelectedCell: boolean
): string => {
  //Si el slot no está disponible
  if (hourStatus === TeacherHoursStatus.NOT_AVAILABLE) {
    return "#F5F6F9";
  }

  //Si el slot está reservado
  if (hourStatus === TeacherHoursStatus.RESERVED) {
    return "#CCCCCC";
  }

  //Si el slot está seleccionado
  if (isASelectedCell) {
    //Si es hovered
    if (isAHoveredCell) {
      return "#008080";
    }
    //Si solo es seleccionado
    return "#00B3BD"
  }

  //Si el slot está disponible y es hovered
  if (isAHoveredCell) {
    return "#85B754";
  }
  //Si solo está disponible
  return "#98D45F";
};
