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
import { ClipLoader } from "react-spinners";
import { showToast } from "@/utils/showToast";
import { postRequest } from "@/utils/postRequest";
import { useRouter } from "next/navigation";

const AdminInfo = ({
  address,
  phone,
  pricePerHour,
}: Pick<ConfigutationType, "address" | "phone" | "pricePerHour">) => {
  const t = useTranslations("adminPage.settingsPage");
  const router = useRouter();
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const AdminSettingsSchema = useAdminSettingsSchema();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AdminSettingsSchemaType>({
    resolver: zodResolver(AdminSettingsSchema),
    defaultValues: {
      address,
      phone,
      pricePerHour: String(pricePerHour),
    },
  });

  let pricePerHourField = watch("pricePerHour");
  let phoneField = watch("phone");
  let addressField = watch("address");

  useEffect(() => {
    const isSamePrice = String(pricePerHour) === pricePerHourField;
    const isSamePhone = phone === phoneField;
    const isSameAddress = address === addressField;

    // Update the isChanged state based on comparison
    if (!isSamePrice || !isSamePhone || !isSameAddress) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [
    pricePerHourField,
    phoneField,
    addressField,
    address,
    phone,
    pricePerHour,
  ]);

  const onSubmit = async (data: AdminSettingsSchemaType) => {
    setIsLoading(true);
    try {
      const res = await postRequest("/api/admin/settings", data);
      if (res.success) {
        showToast("success", t("updateSuccess"));
        router.refresh();
      } else {
        showToast("error", t("updateError"));
      }
    } catch (error) {
      showToast("error", t("updateError"));
    } finally {
      setIsLoading(false);
    }
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
          border-neutral-300 disabled:bg-notAvail disabled:opacity-70"
            id="price"
            type="number"
            {...register("pricePerHour")}
            disabled={isLoading}
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
       border-neutral-300 disabled:bg-notAvail disabled:opacity-70"
            id="phone"
            {...register("phone")}
            disabled={isLoading}
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
            border-neutral-300 disabled:bg-notAvail disabled:opacity-70"
            id="address"
            {...register("address")}
            disabled={isLoading}
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
        className=" h-fit px-3 py-1 w-[200px] mt-6"
        disabled={!isChanged || isLoading}
      >
        {isLoading ? <ClipLoader color=" white" size={20} /> : t("submitBtn")}
      </Button>
    </form>
  );
};

export default AdminInfo;
