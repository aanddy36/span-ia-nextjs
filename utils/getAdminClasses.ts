import db from "@/lib/db";
import { SortBySlug, StatusSlug } from "@/types/modals";

export const getAdminClasses = async (
  status: StatusSlug | "",
  sortBy: SortBySlug | "",
  page: string
) => {
  /* let formatedClasses: MiniClasses[] = []; */

  const orderBy = sortBy === SortBySlug.DATE_LAST ? "asc" : "desc";

  try {
    const totalClasses = await db.singleClass.count();

    //Este es el número de página más alto que hay, si se pasa de este, se debe hacer que la página sea 1.
    const maxPossiblePage = Math.ceil(totalClasses / 10);

    //Si se pasa de la página más alta, se hace 1
    let finalPage = Math.floor(Number(page));
    if (finalPage > maxPossiblePage) finalPage = 1;
    console.log(finalPage);

    const classes = await db.singleClass.findMany({
      orderBy: {
        startOn: orderBy,
      },
      take: 10,
      skip: (finalPage - 1) * 10,
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
    return { classes, totalClasses, page:finalPage };
  } catch (error) {
    throw new Error();
  }
};
