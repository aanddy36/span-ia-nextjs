import { z } from "zod";

export interface UserSettingsSchemaType {
  name: string;
  phone: string;
}

import { useTranslations } from "next-intl";

export const useUserSettingsSchema = () => {
  const t = useTranslations("userPage.userInfo");
  const phoneRegex = /^[0-9]{10}$/;

  return z.object({
    name: z
      .string()
      .min(4, { message: t("nameError") })
      .regex(/^[A-Za-z\s]+$/, {
        message: t("nameLetterError"),
      }),
    phone: z
      .string()
      .optional()
      .refine((value) => !value || /^\d{10}$/.test(value), {
        message: t("phoneError"),
      }),
  });
};

export const UserSettingsSchema = z.object({
  name: z
    .string()
    .min(4, { message: "The name must have at least 4 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "The name must only have letters.",
    }),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{10}$/.test(value), {
      message: "The phone number must have 10 digits or be empty.",
    }),
});
