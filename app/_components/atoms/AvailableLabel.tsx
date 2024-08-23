import { useReserveClass } from "@/contexts/ReserveClass";
import usePaths from "@/hooks/usePaths";
import { DurationOptions } from "@/types/modals";
import { formatDayOfTheWeek } from "@/utils/formatDayOfTheWeek";
import { formatMonth } from "@/utils/formatMonth";
import { stringedHour } from "@/utils/stringedHour";

export const AvailableLabel = () => {
  const { hoveredSlots, duration } = useReserveClass();
  const { locale } = usePaths();
  let date = new Date(hoveredSlots?.date as number);
  const theDay = formatDayOfTheWeek(date.getDay(), locale);
  const theMonth = formatMonth(date.getMonth(), locale);
  const theHour = stringedHour(date);
  let newDate = new Date(date);
  if (duration === DurationOptions.MEDIUM) {
    newDate.setHours(newDate.getHours() + Number(duration) / 60);
    newDate.setMinutes(newDate.getMinutes() + 30);
  } else {
    newDate.setHours(newDate.getHours() + Number(duration) / 60);
  }
  const finishingHour = stringedHour(newDate);
  return (
    <div
      className="absolute"
      style={{
        top: `${hoveredSlots?.y}px`,
        left: `${hoveredSlots?.x}px`,
      }}
    >
      <div
        className=" rounded-lg bg-black/70 text-white p-3 font-medium text-xs flex flex-col
        gap-1 items-center"
      >
        <span>{`${theDay} ${theMonth} ${date.getDate()}`}</span>
        <span>
          {theHour} - {finishingHour}
        </span>
      </div>
    </div>
  );
};
