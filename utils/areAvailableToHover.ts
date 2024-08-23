/**
 * This function is used in SingleCell.tsx to check if a specific cell should be hovered (change color and show text).
 * It does it based on the duration (60 min, 90, 120) and the amount of slots that follows the cell.
 * @param {DurationOptions} status Ex: "DurationOptions.SHORT"
 * @param {Slot[][]} teachersSchedule Ex: "This is the schedule"
 * @param {number} col Ex: "0. It ranges from 0-6"
 * @param {number} row Ex: "2. It ranges from 0-47"
 */

import { DurationOptions, Slot, TeacherHoursStatus } from "@/types/modals";

export const areAvailableToHover = (
  duration: DurationOptions,
  teachersSchedule: Slot[][],
  col: number,
  row: number
) => {
  //nCells son la cantidad de slots. Si son 60 min son 2, si es 90 min 3, y 120 min son 4.
  let nCells = Number(duration) / 30;
  let j = 1;

  //checkedCells va a contener los slots que serán evaluados si se les puede hacer hover o no.
  let checkedCells = [];
  for (let i = 0; i < nCells; i++) {
    //Este caso ocurre cuando es el último slot de un día. 23:30
    if (row + i > 47) {
      //Este caso es cuando es el último de los 6 días.
      if (col > 5) {
        //Se toma el slot [0][0] y los siguientes. Ademas se debe cambiar el id.
        let temp = { ...teachersSchedule[0][j - 1], id: `6_${j - 1}` };
        checkedCells.push(temp);
      }
      //Si col <= 5 entonces simplemente se toma el slot de la [columna siguiente][0]
      else {
        checkedCells.push(teachersSchedule[col + j][j - 1]);
      }
      j += 1;
    }
    //Si row + i <= 47 se toma la misma columna, una fila después.
    else {
      checkedCells.push(teachersSchedule[col][row + i]);
    }
  }

  //canBeHovered es un booleano que checkea si cada slot es AVAILABLE y si además es de una hora superior a la actual.
  const canBeHovered =
    checkedCells.every(
      (cell) => cell.hourStatus === TeacherHoursStatus.AVAILABLE
    ) && checkedCells[0].time > new Date().getTime();

  if (canBeHovered) {
    return checkedCells;
  }
  return [];
};
