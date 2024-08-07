/**
 * Returns the JSON of a GET request.
 * @param {string} path Ex: "/api/user/settings/1234343"
 */

export const fetchRequest = async (path: string, tag:string) => {
    console.log("Hola");
    
  const URL = process.env.WEB_URL;
  const res = await fetch(`${URL}${path}`, { next: { tags: [tag] } });
  const data = await res.json();
  return data;
};
