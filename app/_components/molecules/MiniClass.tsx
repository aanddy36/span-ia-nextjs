import { MiniClasses } from "@/types/modals";
import { formatDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/formatPrice";
import { stringedHour } from "@/utils/stringedHour";
import { StatusSpan } from "@/app/_components/atoms/StatusSpan";
import { classStatus } from "@/utils/classStatus";
import usePaths from "@/hooks/usePaths";

const MiniClass = ({
  startOn,
  endsOn,
  professorAddress,
  professorPhone,
  price,
}: MiniClasses) => {
  const { locale } = usePaths();

  const starting = new Date(startOn);
  const ending = new Date(endsOn);
  const formattedDate = formatDate(starting, locale);
  const status = classStatus(starting, ending);
  return (
    <li className="border-t flex justify-between items-start py-3 px-2 w-full">
      <div className="flex flex-col gap-[2px] max-w-[50%]">
        <span className=" text-lg font-medium">
          {stringedHour(starting)} - {stringedHour(ending)} | {formattedDate}
        </span>
        <span className="text-[14px] opacity-70">{professorAddress}</span>
        <span className="text-[14px] opacity-70">{professorPhone}</span>
      </div>
      <div className=" flex flex-col items-end gap-2 font-medium">
        <StatusSpan status={status} />
        <span className=" text-[16px]">{formatPrice(price)}</span>
      </div>
    </li>
  );
};

export default MiniClass;
