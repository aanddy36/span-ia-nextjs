import db from "@/lib/db";
import { UserRole } from "@prisma/client";

export const getAllStudents = async (queryName: string) => {
  let name = {};
  if (queryName) {
    name = {
      contains: queryName,
      mode: "insensitive",
    };
  }
  try {
    const students = db.user.findMany({
      where: { role: UserRole.USER, name },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        _count: { select: { classes: true } },
      },
    });
    return students;
  } catch (error) {
    throw new Error("Error en el getAllStudents");
  }
};
