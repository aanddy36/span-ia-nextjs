"use client";

import React from "react";
import { Button } from "../shadcn/button";
import { useTranslations } from "next-intl";

const AdminSchedule = () => {
  const t = useTranslations("adminPage.settingsPage");
  return (
    <form className="w-full pb-3 border-b flex items-center gap-[10px] justify-start pt-3">
      <label
        className=" w-[240px] text-start text-[14px] font-medium"
        htmlFor="price"
      >
        {t("modifyLabel")}
      </label>
      <Button variant="red" className=" h-fit px-3 py-1">
        {t("modifyBtn")}
      </Button>
    </form>
  );
};

export default AdminSchedule;
