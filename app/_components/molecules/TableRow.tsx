import { AdminClasses } from "@/types/modals";
import { classStatus } from "@/utils/classStatus";
import { formatDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/formatPrice";
import { stringedHour } from "@/utils/stringedHour";
import React from "react";
import { StatusSpan } from "@/app/_components/atoms/StatusSpan";

const TableRow = ({
  id,
  student: { name, email },
  startOn,
  endsOn,
  price,
}: AdminClasses) => {
  const starting = new Date(startOn);
  const ending = new Date(endsOn);
  const status = classStatus(starting, ending);
  return (
    <tr
      className="bg-white px-6 py-4 grid grid-cols-5 gap-[20px] text-[14px]
             opacity-80 font-semibold border-b"
    >
      <td>{id.slice(0, 16)}</td>
      <td className="flex flex-col items-start gap-[7px]">
        {name}
        <span className=" text-xs font-normal opacity-80">{email}</span>
      </td>
      <td className="flex flex-col items-start gap-[7px]">
        {`${stringedHour(starting)} - ${stringedHour(ending)}`}
        <span className=" text-xs font-normal opacity-80">
          {formatDate(starting)}
        </span>
      </td>
      <td>
        <StatusSpan status={status} />
      </td>
      <td>{formatPrice(price)}</td>
    </tr>
  );
};

export default TableRow;
