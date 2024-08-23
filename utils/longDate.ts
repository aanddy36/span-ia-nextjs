export const longDate = (date: Date, locale: string) => {
  const newDate = new Date(date);
  const theDate = newDate.getDay();
  const theMonth = newDate.getMonth();
  const theDay = newDate.getDate();

  const dateOfTheWeek = {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    es: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
  };
  const monthArray = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octuber",
      "November",
      "December",
    ],
    es: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
  };
  let stringedDay: number | string = theDay;
  if (locale === "en") {
    if (theDay == 1) {
      stringedDay = `${theDay}st`;
    } else if (theDay == 2) {
      stringedDay = `${theDay}nd`;
    } else if (theDay == 3) {
      stringedDay = `${theDay}rd`;
    } else {
      stringedDay = `${theDay}th`;
    }
  }

  return `${dateOfTheWeek[locale as "en" | "es"][theDate]}, ${
    monthArray[locale as "en" | "es"][theMonth]
  } ${stringedDay}`;
};
