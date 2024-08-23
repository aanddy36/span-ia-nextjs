import ScheduleLegend from "@/app/_components/molecules/ScheduleLegend";
import { FaClock } from "react-icons/fa6";
import { DurationOptions } from "@/types/modals";
import { useReserveClass } from "@/contexts/ReserveClass";
import ScheduleDates from "@/app/_components/organisms/schedule-dates";
import { ReserveHeaderRow } from "@/app/_components/molecules/ReserveHeaderRow";
import Schedule from "@/app/_components/organisms/schedule";
import { AvailableLabel } from "@/app/_components/atoms/AvailableLabel";

const ScheduleContainer = () => {
  const { duration, setDuration, hoveredSlots } = useReserveClass();

  return (
    <section className=" w-[928px] mx-auto flex flex-col justify-center gap-4">
      <nav className=" flex justify-between items-center w-full ">
        <ScheduleLegend />
        <form className="flex items-center gap-2">
          <label className="opacity-50">
            <FaClock />
          </label>
          <select
            className="text-xs font-medium opacity-80"
            onChange={(e) => setDuration(e.target.value as DurationOptions)}
            value={duration}
          >
            <option value={DurationOptions.SHORT}>60 min</option>
            <option value={DurationOptions.MEDIUM}>90 min</option>
            <option value={DurationOptions.LONG}>120 min</option>
          </select>
        </form>
        <ScheduleDates />
      </nav>
      <section className=" w-full h-[318px] border rounded-lg ">
        <div className="grid grid-cols-8 h-[48px]">
          <div className="text-xs grid place-content-center font-medium border-b border-r text-black/50">
            UTC - 05:00
          </div>
          <ReserveHeaderRow />
        </div>
        <Schedule />
        {hoveredSlots && <AvailableLabel />}
      </section>
    </section>
  );
};

export default ScheduleContainer;
