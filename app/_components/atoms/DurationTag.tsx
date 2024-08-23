import { useReserveClass } from "@/contexts/ReserveClass";
import { FaClock } from "react-icons/fa6";

const DurationTag = () => {
  const { duration } = useReserveClass();
  return (
    <div
      className="bg-notAvail rounded-full text-[14px] py-[2px] px-6 border font-medium opacity-80 
        flex items-center gap-4"
    >
      <FaClock className="opacity-60" />
      {duration} min
    </div>
  );
};

export default DurationTag;
