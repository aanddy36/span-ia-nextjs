import { z } from "zod";

export interface AdminSettingsSchemaType {
  pricePerHour: string;
  phone: string;
  address: string;
}

import { useTranslations } from "next-intl";

export const useAdminSettingsSchema = () => {
  const t = useTranslations("adminPage.settingsPage");

  return z.object({
    pricePerHour: z
      .string()
      .regex(/^\d+$/, {
        message: t("priceNotNumberError"),
      })
      .refine((value) => parseFloat(value) > 5, {
        message: t("priceError"),
      }),
    phone: z.string().regex(/^\d{10}$/, { message: t("phoneError") }),
    address: z.string().min(6, { message: t("addressError") }),
  });
};

export const AdminSettingsSchema = z.object({
  pricePerHour: z
    .string()
    .regex(/^\d+$/, {
      message: "The price must be a number",
    })
    .refine((value) => parseFloat(value) > 5, {
      message: "Minimum price per hour must be $5",
    }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "Please write a 10-digits phone number" }),
  address: z.string().min(6, { message: "Please write a valid address" }),
});
