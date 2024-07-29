/**
 * Returns a boolean saying if the path is protected or not.
 * @param {string} fullPath The current path
 */

const authPaths = ["profile"];

export const isProtectedRoute = (fullPath: string) => {
  const pathArray = fullPath.split("/"); //['','es','profile']
  const path = pathArray[2]; // profile
  return authPaths.includes(path);
};
