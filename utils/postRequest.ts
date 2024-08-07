

export const postRequest = async (path: string, parameter: Object) => { 
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parameter),
  });
  const data = await res.json();
  return data;
};
