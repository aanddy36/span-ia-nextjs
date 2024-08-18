import React from "react";
import ClassFilter from "@/app/_components/atoms/ClassFilter";
import { ClassFilters, StatusSlug } from "@/types/modals";
import { useTranslations } from "next-intl";

interface ClassFilterListProps {
  addFilterToUrl: any;
}

const ClassFilterList = ({ addFilterToUrl }: ClassFilterListProps) => {
  const t = useTranslations("adminPage.classesPage");
  const filters: ClassFilters[] = [
    { label: t("allFilter"), slug: StatusSlug.ALL },
    { label: t("doneFilter"), slug: StatusSlug.DONE },
    { label: t("inProgressFilter"), slug: StatusSlug.IN_PROGRESS },
    { label: t("inComingFilter"), slug: StatusSlug.IN_COMING },
  ];
  return (
    <ul className=" rounded-lg p-1 flex items-center gap-[10px] border bg-white">
      {filters.map((filter) => {
        return (
          <ClassFilter
            key={filter.slug}
            {...filter}
            addFilterToUrl={addFilterToUrl}
          />
        );
      })}
    </ul>
  );
};

export default ClassFilterList;
