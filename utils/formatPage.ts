export function isConvertibleToNumber(str: string) {
  return !isNaN(Number(str));
}

export const validPage = (page: string | undefined) => {
  if (!page || !isConvertibleToNumber(page) || Number(page) < 1) {
    return "1";
  }
  return page;
};
