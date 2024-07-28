import { z } from "zod";

export interface SignupSchemaType {
  name: string;
  email: string;
  password: string;
  phone: string;
}

import { useTranslations } from "next-intl";

export const useSignupSchema = () => {
  const t = useTranslations("signupPage");
  const phoneRegex = /^[0-9]{10}$/;

  return z.object({
    email: z.string().email({ message: t("emailError") }),
    password: z
      .string()
      .min(6, { message: t("minPasswordError") })
      .max(16, { message: t("maxPasswordError") }),
    name: z.string().min(1, { message: t("nameError") }),
    phone: z
      .string()
      .regex(phoneRegex, t("phoneError")),
  });
};

/* export type SignupSchemaType = z.infer<typeof SignupSchema>; */
