/**
 * Returns a boolean saying if the path is an auth route or not.
 * @param {string} fullPath The current path
 */

const authPaths = ["login", "signup"];

export const isAuthRoute = (fullPath: string) => {
  const pathArray = fullPath.split("/"); //['','es','login']
  const path = pathArray[2]; // login
  return authPaths.includes(path);
};
