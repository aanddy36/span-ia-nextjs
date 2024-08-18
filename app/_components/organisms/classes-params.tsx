"use client";

import { FiltersKeys, SortBySlug, StatusSlug } from "@/types/modals";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import ClassFilterList from "@/app/_components/organisms/class-filters-list";

const ClassesParams = () => {
  const router = useRouter();
  const t = useTranslations("adminPage.classesPage");

  const addFilterToUrl = (key: FiltersKeys, value: StatusSlug | SortBySlug) => {
    const url = new URL(window.location.href);
    const alreadyExist = url.searchParams.has(key);
    if (alreadyExist) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.append(key, value);
    }
    router.push(url.toString());
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    addFilterToUrl("sortBy", e.target.value as SortBySlug);
  };

  return (
    <div className="flex items-center gap-[15px]">
      <ClassFilterList addFilterToUrl={addFilterToUrl} />
      <select
        onChange={(e) => handleChange(e)}
        className=" px-3 py-2 border rounded-lg focus:outline-none focus:ring-red focus:ring-2
        text-[14px]"
      >
        <option value={SortBySlug.DATE_FIRST}>{t("sortByDateFirst")}</option>
        <option value={SortBySlug.DATE_LAST}>{t("sortByDateLate")}</option>
      </select>
    </div>
  );
};

export default ClassesParams;
