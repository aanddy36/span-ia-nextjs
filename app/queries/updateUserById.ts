import db from "@/lib/db";

export const updateUserById = async (id: string, data: object) => {
  try {
    const updateUser = await db.user.update({
      where: {
        id,
      },
      data,
    });
    return updateUser;
  } catch (error) {
    throw new Error()
  }
};
