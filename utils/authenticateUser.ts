import { getToken } from "next-auth/jwt";
import { isTokenExpired } from "@/utils/isTokenExpired";

export async function authenticateUser(req: Request, userId: string) {
  const secret = process.env.AUTH_SECRET;
  // Verificar que el JWT tenga un secret
  if (!secret) {
    return "AUTH_SECRET is not defined.";
    
  }

  // Recuperar el token

  
  const token = await getToken({ req, secret });
  console.log(`token:${token}`);

  // Si el token no existe, rechazar el request
  if (!token) {
    return "No token provided";
  }

  // Si el token expiró, rechazar el request
  const tokenExpired = isTokenExpired(token.exp);
  if (tokenExpired) {
    return "Expired token";
  }

  // Si el id del usuario no es el del token, rechazar el request
  if (userId !== token.sub) {
    return "You are not authorized";
  }

  return "";
}
