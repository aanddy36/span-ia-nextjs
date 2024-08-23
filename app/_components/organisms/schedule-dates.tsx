import { useReserveClass } from "@/contexts/ReserveClass";
import usePaths from "@/hooks/usePaths";
import { formatDate } from "@/utils/formatDate";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ScheduleDates = () => {
  const { leftLimit, setLeftLimit } = useReserveClass();
  const { locale } = usePaths();

  const dateAfter6Days = new Date(leftLimit);
  dateAfter6Days.setDate(dateAfter6Days.getDate() + 6);

  const increaseDate = () => {
    //dayAfterLeftLimit es el día siguiente a nuestro límite
    const dayAfterLeftLimit = new Date(leftLimit);
    dayAfterLeftLimit.setDate(dayAfterLeftLimit.getDate() + 1);

    //Hallamos la diferencia entre el día siguiente al límite y hoy
    const differenceInDays =
      (new Date(dayAfterLeftLimit).getTime() - new Date().getTime()) / 86400000;

    // En este if checkeamos si la diferencia es menor a 1, en caso de que sí, se aumenta un solo día, sino 7.
    if (differenceInDays < 1) {
      setLeftLimit(dayAfterLeftLimit.getTime());
    } else {
      const leftLimitAfter7Days = new Date(leftLimit);
      setLeftLimit(
        leftLimitAfter7Days.setDate(leftLimitAfter7Days.getDate() + 7)
      );
    }
  };

  const reduceDate = () => {
    //Hallamos la fecha 6 dias antes de leftLimit
    const dateBefore6Days = new Date(leftLimit);
    dateBefore6Days.setDate(dateBefore6Days.getDate() - 6);

    //Verificamos que haya pasado 1 semana
    let pastWeek =
      (new Date(dateBefore6Days).getTime() - new Date().getTime()) / 86400000 <
      0;
    const dateBeforeXDays = new Date(leftLimit);
    if (!pastWeek) {
      setLeftLimit(dateBeforeXDays.setDate(dateBeforeXDays.getDate() - 7));
    } else {
      setLeftLimit(dateBeforeXDays.setDate(dateBeforeXDays.getDate() - 1));
    }
  };

  return (
    <ul className="flex items-center gap-[21px]">
      <button
        className=" bg-notAvail rounded-full w-8 h-8 grid place-content-center cursor-pointer
            opacity-50 transition-opacity duration-200 hover:opacity-100 hover:bg-reserved
            disabled:cursor-not-allowed disabled:opacity-10"
        onClick={reduceDate}
        disabled={
          (new Date(leftLimit).getTime() - new Date().getTime()) / 86400000 < 0
        }
      >
        <FaChevronLeft />
      </button>
      <li>
        {formatDate(new Date(leftLimit), locale)} -{" "}
        {formatDate(dateAfter6Days, locale)}
      </li>
      <li
        className=" bg-notAvail rounded-full w-8 h-8 grid place-content-center cursor-pointer
            opacity-50 transition-opacity duration-200 hover:opacity-100 hover:bg-reserved"
        onClick={increaseDate}
      >
        <FaChevronRight />
      </li>
    </ul>
  );
};

export default ScheduleDates;
