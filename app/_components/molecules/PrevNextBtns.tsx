"use client";

import { FiltersKeys } from "@/types/modals";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PrevNextBtnsProps {
  page: number;
  lastNumber: number;
  totalClasses: number;
}

const PrevNextBtns: FC<PrevNextBtnsProps> = ({
  page,
  lastNumber,
  totalClasses,
}) => {
  const router = useRouter();
  const t = useTranslations("adminPage.classesPage");

  const addFilterToUrl = (key: FiltersKeys, value: string) => {
    const url = new URL(window.location.href);
    const alreadyExist = url.searchParams.has(key);
    if (alreadyExist) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.append(key, value);
    }
    router.push(url.toString());
  };

  return (
    <div className=" flex items-center gap-[10px]">
      <button
        className="rounded-lg transition-colors duration-200 hover:bg-red hover:text-white
                    flex items-center gap-[10px] text-[14px] py-[6px] px-3 disabled:opacity-50
                    disabled:cursor-not-allowed"
        onClick={() => addFilterToUrl("page", String(page - 1))}
        disabled={page === 1}
      >
        <FaChevronLeft />
        {t("previous")}
      </button>
      <button
        className="rounded-lg transition-colors duration-200 hover:bg-red hover:text-white
                    flex items-center gap-[10px] text-[14px] py-[6px] px-3 disabled:opacity-50
                    disabled:cursor-not-allowed"
        onClick={() => addFilterToUrl("page", String(page + 1))}
        disabled={lastNumber === totalClasses}
      >
        {t("next")}
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PrevNextBtns;
