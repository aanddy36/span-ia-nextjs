"use server";

import db from "@/lib/db";
import { SignupSchema, SignupSchemaType } from "@/schemas/signup";
import { Messages } from "@/types";
import { getUserByEmail } from "@/utils/getUserBy";
import bcrypt from "bcryptjs";
import { getMessages } from "next-intl/server";

export const signup = async (locale: string, formData: SignupSchemaType) => {
  const {
    actions: { signup },
  } = (await getMessages({ locale })) as Messages;
  const { invalidFields, unknown, userCreated } = signup;

  const validatedFields = SignupSchema.safeParse(formData);
  
  if (!validatedFields.success) {
    return { error: invalidFields, success: "" };
  }

  try {
    const { email, name, password, phone } = validatedFields.data;
    const foundEmail = await getUserByEmail(email);
    if (foundEmail) {
      return { error: signup.foundEmail, success: "" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });
    return { error: "", success: userCreated };
  } catch (error) {
    console.log(error);
    return { error: unknown, success: "" };
  }
};
