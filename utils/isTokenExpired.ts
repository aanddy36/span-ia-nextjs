export const isTokenExpired = (exp: number | undefined) => {
  if (!exp) {
    return false;
  }
  const currentTimestamp = Math.floor(Date.now() / 1000); // Obtener el timestamp actual en segundos
  return exp < currentTimestamp;
};
