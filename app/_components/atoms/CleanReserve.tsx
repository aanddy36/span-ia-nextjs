import { useReserveClass } from "@/contexts/ReserveClass";
import { useTranslations } from "next-intl";
import React from "react";
import { FaXmark } from "react-icons/fa6";

const CleanReserve = () => {
  const t = useTranslations("reservePage");
  const { setSelectedSlots } = useReserveClass();
  return (
    <div
      className=" bg-[#d47676] text-white rounded-full text-[14px] py-[2px] px-3 border border-[#d47676] font-medium 
      transition-all duration-200 flex items-center gap-4 cursor-pointer hover:bg-red"
      onClick={() => setSelectedSlots([])}
    >
      <FaXmark /> {t("clean")}
    </div>
  );
};

export default CleanReserve;
