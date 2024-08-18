import { ClassFilters, StatusSlug } from "@/types/modals";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface ClassFilterProps {
  addFilterToUrl: any;
}

const ClassFilter = ({
  label,
  slug,
  addFilterToUrl,
}: ClassFilters & ClassFilterProps) => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const isSelected =
    slug === StatusSlug.ALL ? status === slug || !status : status === slug;

  return (
    <button
      className={`text-[14px] px-2 py-1 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-red hover:text-white 
        relative disabled:hover:cursor-not-allowed  ${
          isSelected ? "bg-red text-white" : " bg-white text-black"
        }`}
      onClick={() => addFilterToUrl("status", slug)}
      disabled={isSelected}
    >
      {label}
    </button>
  );
};

export default ClassFilter;
