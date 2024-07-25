/**
 * Returns the future path when the path change.
 * @param {string} fullPath The current path
 * @param {string} newLang The new language selected
 */

import { getPathname } from "./getPathname";

export const getFuturePath = (fullPath: string, newLang: string) => {
  const [_, shortPath] = getPathname(fullPath);
  let temp = fullPath.split("/");
  let futurePath = "/";
  if (temp.length === 3) {
    futurePath = `/${newLang}${shortPath}`;
  }
  if (temp.length == 2) {
    futurePath = `/${newLang}`;
  }
  return futurePath
};
