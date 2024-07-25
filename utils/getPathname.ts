/**
 * Returns an object where the first parameter is the locale and the second one is the last path, ignoraring the other paths. Ej: /en/about/user --> /user.
 * @param {string} path An app path
 */

export const getPathname = (path: string) => {
  
  let temp = path.split("/");
  const locale = temp[1];
  const lastPath = `/${temp[temp.length - 1]}`;
  return [locale, lastPath];
};
