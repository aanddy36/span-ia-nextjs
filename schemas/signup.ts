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
    phone: z.string().regex(phoneRegex, t("phoneError")),
  });
};

//For validation in backend
const phoneRegex = /^[0-9]{10}$/;
export const SignupSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" })
    .max(16, { message: "Password must have maxium 16 characters" }),
  name: z.string().min(1, { message: "Name is required" }),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid phone number. It should be 10 digits long."),
});
