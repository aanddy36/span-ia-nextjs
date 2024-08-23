import db from "@/lib/db";
import { SortBySlug, StatusSlug } from "@/types/modals";

export const getAdminClasses = async (
  status: StatusSlug | "",
  sortBy: SortBySlug | "",
  page: string
) => {
  //Definir el orden por 'sortBy'
  const orderBy = sortBy === SortBySlug.DATE_LAST ? "asc" : "desc";

  //Definir el filtro por 'status'
  const now = new Date();
  let where = {};

  switch (status) {
    case StatusSlug.DONE:
      where = {
        endsOn: {
          lt: now,
        },
      };
      break;
    case StatusSlug.IN_COMING:
      where = {
        startOn: {
          gt: now,
        },
      };
      break;
    case StatusSlug.IN_PROGRESS:
      where = {
        endsOn: {
          gte: now,
        },
        startOn: {
          lte: now,
        },
      };
  }

  try {
    const totalClasses = await db.singleClass.count({ where });

    //Este es el número de página más alto que hay, si se pasa de este, se debe hacer que la página sea 1.
    const maxPossiblePage = Math.ceil(totalClasses / 10);

    //Si se pasa de la página más alta, se hace 1
    let finalPage = Math.floor(Number(page));
    if (finalPage > maxPossiblePage) finalPage = 1;

    const classes = await db.singleClass.findMany({
      orderBy: {
        startOn: orderBy,
      },
      where,
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
    return { classes, totalClasses, page: finalPage };
  } catch (error) {
    throw new Error();
  }
};
