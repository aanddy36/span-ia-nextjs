import { formatPrice } from "@/utils/formatPrice";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Button } from "@/app/_components/shadcn/button";
import { useReserveClass } from "@/contexts/ReserveClass";
import { useTranslations } from "next-intl";
import { useConfiguration } from "@/contexts/Configuration";
import { stringedHour } from "@/utils/stringedHour";
import usePaths from "@/hooks/usePaths";
import { longDate } from "@/utils/longDate";
import { useUser } from "@/contexts/UserContext";
import AuthPopup from "@/app/_components/organisms/auth-popup";

const ConfirmClassPopup = () => {
  const t = useTranslations("reservePage.popup");
  const { locale } = usePaths();
  const { phone, address } = useConfiguration();
  const { setIsOpenConfirm, price, selectedSlots } = useReserveClass();
  const { user, setIsOpenAuthModal, isOpenAuthModal } = useUser();

  let startDate = selectedSlots && new Date(selectedSlots[0].time);
  let endingDate =
    selectedSlots && new Date(selectedSlots[selectedSlots.length - 1].time);
  endingDate?.setMinutes(endingDate.getMinutes() + 30);

  const formattedDate = longDate(startDate as Date, locale);
  let startingHour = stringedHour(startDate as Date);
  let endingHour = stringedHour(endingDate as Date);

  const handleClick = () => {
    if (!user) {
      setIsOpenAuthModal(true);
      return;
    }
    setIsOpenConfirm(false);
  };

  return (
    <div className=" fixed inset-0 bg-black/50 z-[10]">
      <div
        className=" w-[98%] laptop:w-[591px] bg-white rounded-lg absolute px-5 tablet:px-8 pb-8
        top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] shadow-md shadow-black/30 pt-12
        flex flex-col gap-8"
      >
        <FaXmark
          className="absolute top-6 right-6 transition-transform duration-200 hover:rotate-90 cursor-pointer text-3xl"
          onClick={() => setIsOpenConfirm(false)}
        />
        <h3 className=" text-[32px] font-medium">{t("title")}</h3>
        <ul className="flex flex-col gap-3">
          <li className=" text-base font-normal">
            <span className="font-semibold">{t("date")}</span> {formattedDate}
          </li>
          <li className=" text-base font-normal">
            <span className="font-semibold">{t("hour")}</span> {startingHour} -{" "}
            {endingHour}
          </li>
          <li className=" text-base font-normal">
            <span className="font-semibold">{t("phone")}</span> {phone}
          </li>
          <li className=" text-base font-normal">
            <span className="font-semibold">{t("location")}</span> {address}
          </li>
          <li className=" text-base font-normal">
            <span className="font-semibold">{t("price")}</span>{" "}
            {formatPrice(price)}
          </li>
        </ul>
        <Button onClick={handleClick} variant="red">
          {t("btn")}
        </Button>
      </div>
      {isOpenAuthModal && <AuthPopup />}
    </div>
  );
};

export default ConfirmClassPopup;
