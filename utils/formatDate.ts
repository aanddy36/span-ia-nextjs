export const formatDate = (date: Date, locale: string) => {
  let lang = "en-US";
  if (locale === "es") lang = "es";
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
