import { useUser } from "@/contexts/UserContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DurationTag from "@/app/_components/atoms/DurationTag";
import { useReserveClass } from "@/contexts/ReserveClass";
import { formatPrice } from "@/utils/formatPrice";
import { ClipLoader } from "react-spinners";
import { SelectedTag } from "../atoms/SelectedTag";
import CleanReserve from "../atoms/CleanReserve";

const ReserveFooter = () => {
  const t = useTranslations("reservePage");
  const { user } = useUser();
  const { price, selectedSlots, setIsOpenConfirm } = useReserveClass();

  const thePhoto = user?.image ? user.image : "/no-photo.jpg";
  return (
    <section className="border h-[71px] flex items-center justify-between px-6">
      <div className="flex items-center gap-14">
        <Image
          src={thePhoto}
          alt={t("altImage")}
          width={40}
          height={40}
          className="rounded-full border"
        />
        <div className="flex items-center gap-8">
          <DurationTag />
          {selectedSlots.length ? (
            <>
              <SelectedTag /> <CleanReserve />{" "}
            </>
          ) : null}
        </div>
      </div>
      <div className="flex gap-6 items-center">
        {!price ? (
          <ClipLoader color="#E31010" size={30} />
        ) : (
          <span className=" text-2xl">{formatPrice(price)}</span>
        )}
        <button
          className="text-white bg-red rounded-lg py-1 px-3 uppercase font-semibold
          transition-all duration-200 hover:bg-red/50 disabled:bg-red/50 disabled:cursor-not-allowed"
          disabled={!selectedSlots.length}
          onClick={() => setIsOpenConfirm(true)}
        >
          {t("nextBtn")}
        </button>
      </div>
    </section>
  );
};

export default ReserveFooter;
