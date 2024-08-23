import { Slot, TeacherHoursStatus } from "@/types/modals";
import { stringedHour } from "./stringedHour";
import { AvailableHours } from "@prisma/client";

export const generateTeacherGrid = (
  leftLimit: number,
  availableHours: AvailableHours[]
  /* 
    reservedClasses: { id: string; hour: number }[] */
): Slot[][] => {
  //firstDay es el día desde que se hará el grid. Empezará a las 00:00:00
  const firstDay = new Date(leftLimit);
  firstDay.setDate(firstDay.getDate());
  firstDay.setHours(0, 0, 0, 0);

  //lastDay es el último de los 7 días del grid. Terminará a las 23:59:59
  const lastDay = new Date(firstDay);
  lastDay.setDate(lastDay.getDate() + 6);
  lastDay.setHours(23, 59, 59, 999);

  /* let theReservedOnes = reservedClasses.map((clas) => {
    return { ...clas, hour: new Date(clas.hour) };
  }); */

  //grid será la matriz 7x48
  let grid = [];

  //va hasta 7 por la cantidad de días de la semana. No significa que empiece el domingo o lunes.
  for (let m = 0; m < 7; m++) {
    //dayAfterMDays es la fecha para el día M. Empieza en 00:00:00
    const dayAfterMDays = new Date(firstDay);
    dayAfterMDays.setDate(dayAfterMDays.getDate() + m);
    dayAfterMDays.setHours(0, 0, 0, 0);

    //dayDates serán los 48 slots posibles por cada día. Son intervalos de 30 min.
    let dayDates = [];
    let k = 0;
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 2; j++) {
        //slotOf30min serán slots de 30 min en el día M. al final crearemos 48 de estos para completar el día
        let slotOf30min = new Date(dayAfterMDays.setHours(i));
        slotOf30min.setMinutes(j * 30);

        //slotsObject se crea para comparar si este slot ya fue reservado.
        let slotsObject = {
          dayInTheWeek: slotOf30min.getDay(),
          time: stringedHour(slotOf30min),
        };

        //isAvailable checkea que este slot esté disponible de acuerdo al horario del profesor
        const isAvailable = availableHours?.some(
          (slot) =>
            slot.dayInTheWeek === slotsObject.dayInTheWeek &&
            slot.time === slotsObject.time
        );

        //En la posición k se agrega un objeto con un id único y el tiempo que representa.
        dayDates[k] = {
          id: `${m}_${k}`,
          time: slotOf30min.getTime(),
          hourStatus: isAvailable
            ? TeacherHoursStatus.AVAILABLE
            : TeacherHoursStatus.NOT_AVAILABLE,
          /* hourStatus: theReservedOnes.some(
            (asd) =>
              JSON.stringify({
                dayInTheWeek: asd.hour.getDay(),
                time: stringedHour(asd.hour),
              }) === JSON.stringify(slotsObject)
          )
            ? TeacherHoursStatus.RESERVED
            : availableHours.some(
                (asd) => JSON.stringify(asd) === JSON.stringify(slotsObject)
              )
            ? TeacherHoursStatus.AVAILABLE
            : TeacherHoursStatus.NOT_AVAILABLE, */
        };
        k++;
      }
    }

    //luego de crear dayDates, este array con 48 datos se agrega a su día correspondiente
    grid[m] = dayDates;
  }
  return grid;
};
