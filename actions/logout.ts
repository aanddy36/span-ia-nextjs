"use server";

import { signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const logout = async () => {
  try { 
    await signOut({ redirect: false });
  } catch (error) {
    console.log(error);
  }
};
