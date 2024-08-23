import { useReserveClass } from "@/contexts/ReserveClass";
import usePaths from "@/hooks/usePaths";
import { formatDayOfTheWeek } from "@/utils/formatDayOfTheWeek";

export const ReserveHeaderRow = () => {
  const { leftLimit } = useReserveClass();
  const { locale } = usePaths();
  let myArray = [0, 1, 2, 3, 4, 5, 6];
  return (
    <>
      {myArray.map((day) => {
        //dayOfTheWeek será la fecha después de (day) días para completar los 7 días desde leftLimit
        const dayOfTheWeek = new Date(leftLimit);
        dayOfTheWeek.setDate(dayOfTheWeek.getDate() + day);

        //dayOfTheMonth. Eg: 26, refiriendose al dia 26 del mes
        let dayOfTheMonth = dayOfTheWeek.getDate();
        return (
          <div
            key={day}
            className="text-xs flex flex-col font-medium border-b border-r items-center gap-1 justify-center"
          >
            <span className=" text-xs opacity-70 font-medium uppercase">
              {formatDayOfTheWeek(dayOfTheWeek.getDay(), locale)}
            </span>
            <span className=" text-xs font-medium">
              {dayOfTheMonth < 10 ? `0${dayOfTheMonth}` : dayOfTheMonth}
            </span>
          </div>
        );
      })}
    </>
  );
};
