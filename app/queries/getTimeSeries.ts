import db from "@/lib/db";

const transformDate = (isoDate: Date) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() devuelve el mes de 0 a 11, por lo que se suma 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getTimeSeries = async () => {
  try {
    const timeSeries = await db.singleClass.groupBy({
      by: ["createdAt"],
      _sum: {
        price: true,
      },
    });

    const formattedTimeseries = timeSeries.map((item) => ({
      label: transformDate(item.createdAt),
      sales: item._sum.price,
    }));

    const reducedData = formattedTimeseries.reduce((acc: any, curr) => {
      const existing = acc.find((item: any) => item.label === curr.label);

      if (existing) {
        existing.sales += curr.sales;
      } else {
        acc.push({ ...curr }); // Agrega una copia del objeto actual
      }

      return acc;
    }, []);

    const sortedData = reducedData.sort(
      (a: any, b: any) =>
        new Date(a.label).getDate() - new Date(b.label).getDate()
    );

    return sortedData;
  } catch (error) {
    throw new Error("Error en getTimeSeries");
  }
};
