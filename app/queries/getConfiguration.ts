import db from "@/lib/db";

export const getConfiguration = async () => {
  try {
    const settings = await db.configuration.findUnique({
      where: { id: "clzt9y2bx00005iar7irczhcc" },
      select: { address: true, phone: true, pricePerHour: true },
    });

    return settings;
  } catch (error) {
    throw new Error()
  }
};
