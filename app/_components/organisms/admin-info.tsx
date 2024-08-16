"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../shadcn/button";
import { ConfigutationType } from "@/types/modals";
import { useForm } from "react-hook-form";
import {
  AdminSettingsSchemaType,
  useAdminSettingsSchema,
} from "@/schemas/adminSettings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

const AdminInfo = ({
  address,
  phone,
  pricePerHour,
}: Pick<ConfigutationType, "address" | "phone" | "pricePerHour">) => {
  const initialValues = {
    address,
    phone,
    pricePerHour: String(pricePerHour),
  };

  const t = useTranslations("adminPage.settingsPage");
  const [isChanged, setIsChanged] = useState(false);
  const AdminSettingsSchema = useAdminSettingsSchema();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AdminSettingsSchemaType>({
    resolver: zodResolver(AdminSettingsSchema),
    defaultValues: initialValues,
  });

  let pricePerHourField = watch("pricePerHour");
  let phoneField = watch("phone");
  let addressField = watch("address");

  useEffect(() => {
    const isSamePrice = initialValues.pricePerHour === pricePerHourField;
    const isSamePhone = initialValues.phone === phoneField;
    const isSameAddress = initialValues.address === addressField;

    // Update the isChanged state based on comparison
    if (!isSamePrice || !isSamePhone || !isSameAddress) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [pricePerHourField, phoneField, addressField]);

  const onSubmit = (data: AdminSettingsSchemaType) => {
    console.log(data);
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full pb-3 border-b flex items-center gap-[10px] justify-start pt-3">
        <label
          className=" w-[240px] text-start text-[14px] font-medium"
          htmlFor="price"
        >
          {t("priceLabel")}
        </label>
        <div className="flex flex-col items-start">
          <input
            className="py-1 px-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2 focus:ring-red
          border-neutral-300"
            id="price"
            type="number"
            {...register("pricePerHour")}
          />
          {errors.pricePerHour && (
            <span className="text-red font-medium text-[12px] mt-2">
              {errors.pricePerHour.message}
            </span>
          )}
        </div>
      </div>
      <div className="w-full pb-3 border-b flex items-center gap-[10px] justify-start pt-3">
        <label
          className=" w-[240px] text-start text-[14px] font-medium"
          htmlFor="phone"
        >
          {t("phoneLabel")}
        </label>
        <div className="flex flex-col items-start">
          <input
            className="py-1 px-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2 focus:ring-red
       border-neutral-300"
            id="phone"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-red font-medium text-[12px] mt-2">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>
      <div className="w-full pb-3 border-b flex items-center gap-[10px] justify-start pt-3">
        <label
          className=" w-[240px] text-start text-[14px] font-medium"
          htmlFor="address"
        >
          {t("addressLabel")}
        </label>
        <div className="flex flex-col items-start">
          <input
            className="py-1 px-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2 focus:ring-red
            border-neutral-300"
            id="address"
            {...register("address")}
          />
          {errors.address && (
            <span className="text-red font-medium text-[12px] mt-2">
              {errors.address.message}
            </span>
          )}
        </div>
      </div>
      <Button
        variant="red"
        className=" h-fit px-3 py-1 w-fit mt-6"
        disabled={!isChanged}
      >
        {t("submitBtn")}
      </Button>
    </form>
  );
};

export default AdminInfo;
