import ScheduleColumnHeader from "../molecules/ScheduleColumnHeader";
import { useReserveClass } from "@/contexts/ReserveClass";
import ScheduleColumn from "../molecules/ScheduleColumn";

const Schedule = () => {
  const { teachersSchedule } = useReserveClass();
  return (
    <div className="grid grid-cols-8 h-[270px] overflow-y-scroll border-red-scroll">
      <ScheduleColumnHeader />
      {teachersSchedule.map((col, nCol) => (
        <ScheduleColumn key={nCol} slots={col} nCol={nCol} />
      ))}
    </div>
  );
};

export default Schedule;
