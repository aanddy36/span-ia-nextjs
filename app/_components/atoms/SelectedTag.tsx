import { useReserveClass } from "@/contexts/ReserveClass";
import usePaths from "@/hooks/usePaths";
import { formatDayOfTheWeek } from "@/utils/formatDayOfTheWeek";
import { formatMonth } from "@/utils/formatMonth";
import { stringedHour } from "@/utils/stringedHour";
import { FaCalendarDays } from "react-icons/fa6";

export const SelectedTag = () => {
  const { selectedSlots } = useReserveClass();
  const { locale } = usePaths();

  let startDate = selectedSlots && new Date(selectedSlots[0].time);
  let endingDate =
    selectedSlots && new Date(selectedSlots[selectedSlots.length - 1].time);
  endingDate?.setMinutes(endingDate.getMinutes() + 30);
  let theDay = formatDayOfTheWeek(startDate.getDay(), locale);
  let theMonth = formatMonth(startDate.getMonth(), locale);
  let theDate = startDate.getDate();
  let startingHour = stringedHour(startDate as Date);
  let endingHour = stringedHour(endingDate as Date);

  return (
    <div
      className="bg-notAvail rounded-full text-[14px] py-[2px] px-6 border font-medium opacity-80 
    flex items-center gap-4"
    >
      <FaCalendarDays className="opacity-60" />
      {`${theDay} ${theMonth} ${theDate} | ${startingHour} - ${endingHour}`}
    </div>
  );
};
