import db from "@/lib/db";

export const getUserInfo = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        phone: true,
        image: true,
        classes: true,
      },
    });
    const formatUser = {
      ...user,
      classes: user?.classes.length,
    };

    return formatUser;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
