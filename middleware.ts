import { NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { getPathname } from "@/utils/getPathname";
import { isProtectedRoute } from "@/utils/isProtectedRoute";
import { isAuthRoute } from "./utils/isAuthRoute";

// Configuración de next-intl
const intlMiddleware = createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

// Configuración de authJs con Prisma
const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const [locale, path] = getPathname(nextUrl.pathname);
  const isLoggedIn = !!req.auth;
  const isProtected = isProtectedRoute(nextUrl.pathname);
  const isAuth = isAuthRoute(nextUrl.pathname);

  //AUTENTICACION

  // Si el usuario no esta autenticado y quiere entrar a una ruta protegida
  if (!isLoggedIn && isProtected) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  // Si el usuario esta autenticado y quiere entrar a una ruta auth (/login o /signup)
  if (isLoggedIn && isAuth) {
    return Response.redirect(new URL("/", nextUrl));
  }

  // Si la ruta no requiere autenticación, manejamos solo la internacionalización
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    return intlResponse;
  }

  // Si no se cumplen las condiciones anteriores, continuar con la respuesta siguiente
  return NextResponse.next();
});

// Configuración de los patrones de coincidencia
export const config = {
  matcher: ["/", "/not-found", "/not-allowed", "/login", "/(es|en)/:path*"],
};
