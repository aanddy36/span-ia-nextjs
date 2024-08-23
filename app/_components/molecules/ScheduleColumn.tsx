import { Slot } from "@/types/modals";
import React, { FC } from "react";
import { SingleSlot } from "@/app/_components/atoms/SingleSlot";

interface ScheduleColumnProps {
  slots: Slot[];
  nCol: number;
}

const ScheduleColumn: FC<ScheduleColumnProps> = ({ slots, nCol }) => {
  return (
    <div className="flex flex-col">
      {slots.map((slot, row) => (
        <SingleSlot key={slot.id} slot={slot} nCol={nCol} row={row} />
      ))}
    </div>
  );
};

export default ScheduleColumn;
