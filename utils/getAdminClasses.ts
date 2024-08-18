import db from "@/lib/db";
import { SortBySlug, StatusSlug } from "@/types/modals";

export const getAdminClasses = async (
  status: StatusSlug | "",
  sortBy: SortBySlug | ""
) => {
  /* let formatedClasses: MiniClasses[] = []; */

  const orderBy = sortBy === SortBySlug.DATE_LAST ? "asc" : "desc";
  try {
    const totalClasses = await db.singleClass.count();

    const classes = await db.singleClass.findMany({
      orderBy: {
        startOn: orderBy,
      },
      select: {
        id: true,
        price: true,
        startOn: true,
        endsOn: true,
        student: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });

    /* formatedClasses = classes.map((cl) => {
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
      }); */
    return { classes, totalClasses };
  } catch (error) {
    throw new Error();
  }
};
