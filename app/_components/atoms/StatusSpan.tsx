"use client";

import { ClassesStatus } from "@/types/modals";
import { useTranslations } from "next-intl";

export const StatusSpan = ({ status }: { status: ClassesStatus }) => {
  const t = useTranslations("globals");
  const text =
    status === ClassesStatus.DONE
      ? t("done")
      : status === ClassesStatus.IN_COMING
      ? t("in-coming")
      : t("in-progress");
  return (
    <span
      className={`rounded-full px-2 tablet:px-4 py-[2px] text-[14px] ${
        status === ClassesStatus.DONE
          ? " bg-green"
          : status === ClassesStatus.IN_COMING
          ? " bg-blue"
          : status === ClassesStatus.IN_PROGRESS
          ? " bg-yellow"
          : " bg-rose-300"
      }`}
    >
      {text}
    </span>
  );
};
