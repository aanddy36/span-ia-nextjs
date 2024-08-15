/**
 * Returns the JSON of a GET request.
 * @param {string} path Ex: "/api/user/settings/1234343"
 */

export const fetchRequest = async (path: string) => {
  const URL = process.env.WEB_URL;
  const res = await fetch(`${URL}${path}`);
  const data = await res.json();

  return data;
};
