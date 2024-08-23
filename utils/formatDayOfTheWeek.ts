export const formatDayOfTheWeek = (day: number, locale: string) => {
  const daysOfTheWeek = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  };
  return daysOfTheWeek[locale as "en" | "es"][day];
};
