"use client";

import { useTranslations } from "next-intl";
import { useReserveClass } from "@/contexts/ReserveClass";
import ReserveFooter from "./reserve-footer";

import ScheduleContainer from "./schedule-container";
import ConfirmClassPopup from "./confirm-classs-popup";

const ReserveClass = () => {
  const t = useTranslations("reservePage");
  const {isOpenConfirm} = useReserveClass()

  return (
    <>
      <div className=" h-full grid grid-rows-[auto_1fr_auto]">
        <section className=" text-xl font-semibold w-full text-center py-6 border-b">
          {t("title")}
        </section>
        <ScheduleContainer />
        <ReserveFooter />
      </div>
      {isOpenConfirm && <ConfirmClassPopup />}
    </>
  );
};

export default ReserveClass;
