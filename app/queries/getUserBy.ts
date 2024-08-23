import db from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const foundUser = await db.user.findUnique({ where: { email } });
    
    return foundUser;
  } catch (error) {
    throw new Error()
  }
};

export const getUserById = async (id: string) => {
    try {
      const foundUser = await db.user.findUnique({ where: { id } });
      return foundUser;
    } catch (error) {
      throw new Error()
    }
  };