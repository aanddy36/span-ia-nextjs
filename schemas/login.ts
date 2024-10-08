import { z } from "zod";

export interface LoginSchemaType {
  email: string;
  password: string;
}

import { useTranslations } from "next-intl";

export const useLoginSchema = () => {
  const t = useTranslations("loginPage");

  return z.object({
    email: z.string().email({ message: t("emailError") }),
    password: z.string().min(1, { message: t("passwordError") }),
  });
};

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" })
});
