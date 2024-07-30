"use server";

import { signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const logout = async () => {
  try {
    console.log("Signout");
    
    await signOut({ redirect: false });
  } catch (error) {
    console.log(error);
  }
};
