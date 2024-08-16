import db from "@/lib/db";

export const updateAdminSettings = async (data: object) => {
  try {
    const newConfigs = await db.configuration.update({
      where: {
        id: "clzt9y2bx00005iar7irczhcc",
      },
      data,
    });

    return newConfigs;
  } catch (error) {
    throw new Error()
  }
};
