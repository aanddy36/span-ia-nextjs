import { useTranslations } from "next-intl";
import React from "react";

const ScheduleLegend = () => {
  const t = useTranslations("reservePage");
  return (
    <ul className="flex gap-[21px] items-center">
      <div className=" flex items-center gap-[11px]">
        <span className=" rounded-full w-[15px] h-[15px] bg-green"></span>
        <span className=" text-sm opacity-50">{t("availableLabel")}</span>
      </div>
      <div className=" flex items-center gap-[11px]">
        <span className=" rounded-full w-[15px] h-[15px] bg-notAvail border"></span>
        <span className=" text-sm opacity-50">{t("notAvailableLabel")}</span>
      </div>
      <div className=" flex items-center gap-[11px]">
        <span className=" rounded-full w-[15px] h-[15px] bg-reserved"></span>
        <span className=" text-sm opacity-50">{t("reservedLabel")}</span>
      </div>
    </ul>
  );
};

export default ScheduleLegend;
