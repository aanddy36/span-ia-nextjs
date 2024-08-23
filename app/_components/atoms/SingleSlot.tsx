import { useReserveClass } from "@/contexts/ReserveClass";
import { Slot, TeacherHoursStatus } from "@/types/modals";
import { addSlotColor } from "@/utils/addSlotColor";
import { areAvailableToHover } from "@/utils/areAvailableToHover";

export const SingleSlot = ({
  slot,
  nCol,
  row,
}: {
  slot: Slot;
  nCol: number;
  row: number;
}) => {
  const {
    duration,
    teachersSchedule,
    setHoveredSlots,
    hoveredSlots,
    pickSlot,
    selectedSlots,
  } = useReserveClass();

  //Cada vez que se hace hover, con esta función se agregan los cells que deben ser mostrados como hovered.
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (slot.hourStatus === TeacherHoursStatus.AVAILABLE) {
      const checkedCells = areAvailableToHover(
        duration,
        teachersSchedule,
        nCol,
        row
      );
      if (checkedCells.length) {
        setHoveredSlots({
          slots: checkedCells,
          y: (e.target as HTMLDivElement).getBoundingClientRect().y,
          x: (e.target as HTMLDivElement).offsetLeft + 130,
          date: slot.time,
        });
      }
    }
  };

  //En base a selectedSlots se evalua si este slot es seleccionado o no.
  const isASelectedCell = selectedSlots?.some(
    (selectedSlot) => selectedSlot.time === slot.time
  );

  //En base a hoveredCells se evalua si este slot es hovered o no.
  const isAHoveredCell = hoveredSlots?.slots?.some(
    (hoveredSlot) => hoveredSlot.id === slot.id
  );

  //Un condicional para saber cuál es el color del slot
  let slotColor = addSlotColor(
    slot.hourStatus,
    isAHoveredCell,
    isASelectedCell
  );

  return (
    <div
      className={`h-[30px] w-full border-b border-r transition-colors duration-200 cursor-default relative group ${
        isAHoveredCell && "cursor-pointer"
      }`}
      style={{ backgroundColor: slotColor }}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={() => setHoveredSlots(null)}
      onClick={pickSlot}
    ></div>
  );
};
