import db from "@/lib/db";

const colors = {
  "60": "#84cc16",
  "90": "#f97316",
  "120": "#ef4444",
};

export const getDurationPie = async () => {
  try {
    const duration = await db.singleClass.groupBy({
      by: ["duration"],
      _count: true,
    });

    const formattedDuration = duration.map((item) => ({
      duration: `${item.duration} min`,
      value: item._count,
      color: colors[item.duration as "60" | "90" | "120"],
    }));

    return formattedDuration;
  } catch (error) {
    throw new Error("Error en getDurationPie");
  }
};
