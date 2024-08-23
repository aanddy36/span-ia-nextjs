"use client";

import {
  DurationOptions,
  HoveredSlotLabel,
  Slot,
  tempAvailableHours,
} from "@/types/modals";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useConfiguration } from "./Configuration";
import { AvailableHours } from "@prisma/client";
import { generateTeacherGrid } from "@/utils/generateGrid";

interface ReserveClassContextProps {
  duration: DurationOptions;
  setDuration: Dispatch<SetStateAction<DurationOptions>>;
  price: number;
  leftLimit: number;
  setLeftLimit: Dispatch<SetStateAction<number>>;
  availableHours: AvailableHours[];
  teachersSchedule: Slot[][];
  hoveredSlots: HoveredSlotLabel | null;
  setHoveredSlots: Dispatch<SetStateAction<HoveredSlotLabel | null>>;
  selectedSlots: Slot[];
  pickSlot: () => void;
  setSelectedSlots: any;
  isOpenConfirm: boolean;
  setIsOpenConfirm: Dispatch<SetStateAction<boolean>>;
}

const ReserveClassContext = createContext<ReserveClassContextProps | undefined>(
  undefined
);

interface ReserveClassProviderProps {
  children: React.ReactNode;
}

const ReserveClassProvider: FC<ReserveClassProviderProps> = ({ children }) => {
  const { pricePerHour } = useConfiguration();
  const [availableHours, setAvailableHours] = useState(tempAvailableHours);
  const [teachersSchedule, setTeachersSchedule] = useState<Slot[][]>([]);
  const [hoveredSlots, setHoveredSlots] = useState<HoveredSlotLabel | null>(
    null
  );
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [price, setPrice] = useState(pricePerHour);
  const [duration, setDuration] = useState<DurationOptions>(
    DurationOptions.SHORT
  );
  const [leftLimit, setLeftLimit] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  //Sirve para actualizar el precio cada vez que cambian la duración o el precio por hora
  useEffect(() => {
    setPrice(() => (Number(duration) / 60) * Number(pricePerHour));
    setSelectedSlots([])
  }, [duration, pricePerHour]);

  //Genera el horario del profesor cada vez que se cambia el límite o las horas disponibles.
  useEffect(() => {
    setTeachersSchedule(generateTeacherGrid(leftLimit, availableHours));
  }, [availableHours, leftLimit]);

  //Con esta función se seleccionan slots
  const pickSlot = () => {
    if (hoveredSlots) {
      setSelectedSlots(hoveredSlots.slots);
    }
  };

  return (
    <ReserveClassContext.Provider
      value={{
        duration,
        setDuration,
        price,
        leftLimit,
        setLeftLimit,
        availableHours,
        teachersSchedule,
        hoveredSlots,
        setHoveredSlots,
        selectedSlots,
        pickSlot,
        setSelectedSlots,
        isOpenConfirm,
        setIsOpenConfirm,
      }}
    >
      {children}
    </ReserveClassContext.Provider>
  );
};

const useReserveClass = () => {
  const {
    duration,
    setDuration,
    price,
    leftLimit,
    setLeftLimit,
    availableHours,
    teachersSchedule,
    hoveredSlots,
    setHoveredSlots,
    selectedSlots,
    pickSlot,
    setSelectedSlots,
    isOpenConfirm,
    setIsOpenConfirm,
  } = useContext(ReserveClassContext) as ReserveClassContextProps;

  return {
    duration,
    setDuration,
    price,
    leftLimit,
    setLeftLimit,
    availableHours,
    teachersSchedule,
    hoveredSlots,
    setHoveredSlots,
    selectedSlots,
    pickSlot,
    setSelectedSlots,
    isOpenConfirm,
    setIsOpenConfirm,
  };
};

export { ReserveClassProvider, useReserveClass };
