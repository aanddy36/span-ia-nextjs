import db from "@/lib/db";
import { UserRole } from "@prisma/client";

export const getSummaryClasses = async () => {
  try {
    const [nClasses, totalSales, nStudents, totalHours] = await Promise.all([
      db.singleClass.count(),
      db.singleClass.aggregate({
        _sum: {
          price: true,
        },
      }),
      db.user.count({ where: { role: UserRole.USER } }),
      db.singleClass.findMany({
        select: { duration: true },
      }),
    ]);
    const summary = {
      nClasses,
      totalSales: totalSales._sum.price,
      nStudents,
      totalHours: (totalHours
        .map((hour) => Number(hour.duration))
        .reduce((acc, cv) => acc + cv))/60,
    };
    return summary;
  } catch (error) {
    throw new Error("Error en getSummaryClasses");
  }
};
