"use server";

import { Messages } from "@/global";
import { signIn } from "@/lib/auth";
import { LoginSchema, LoginSchemaType } from "@/schemas/login";
import { getAdminOrUser } from "@/utils/getAdminOrUser";
import { getUserByEmail } from "@/utils/getUserBy";
import { UserRole } from "@prisma/client";
import { AuthError } from "next-auth";
import { getMessages } from "next-intl/server";

export const login = async (locale: string, formData: LoginSchemaType) => {
  const {
    actions: { login },
  } = (await getMessages({ locale })) as Messages;
  const { invalidFields, unknown, success, credentialsError } = login;

  const validatedFields = LoginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: invalidFields, success: "" };
  }

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  const path = getAdminOrUser(existingUser?.role);
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: `/${locale}/profile/${path}`,
    });

    return { error: "", success };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: "", error: credentialsError };
        default:
          return { success: "", error: unknown };
      }
    }
    throw error;
  }
};
