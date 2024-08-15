import db from "@/lib/db";
import { MiniClasses } from "@/types/modals";

export const getUserMiniClassesById = async (id: string) => {
  let formatedClasses: MiniClasses[] = [];
  try {
    const classes = await db.singleClass.findMany({
      where: { studentId: id },
      include: {
        configuration: {
          select: {
            address: true,
            phone: true,
          },
        },
      },
    });

    formatedClasses = classes.map((cl) => {
      const {
        id,
        price,
        startOn,
        endsOn,
        configuration: { address, phone },
      } = cl;
      return {
        id,
        price,
        startOn,
        endsOn,
        professorAddress: address,
        professorPhone: phone,
      };
    });
    return formatedClasses;
  } catch (error) {
    console.log(error);
  }
};
