import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getPathname } from "./utils/getPathname";
import { isProtectedRoute } from "./utils/isProtectedRoute";

// Definir rutas que requieren autenticación
const authPaths = ["/en/profile", "/es/profile"];

// Configuración de next-intl
const intlMiddleware = createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

// Configuración de authJs con Prisma
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const [locale, path] = getPathname(nextUrl.pathname);
  const isLoggedIn = !!req.auth;
  const isProtected = isProtectedRoute(nextUrl.pathname);
  console.log(isProtected);

  // Primero manejamos la autenticación
  if (!isLoggedIn && isProtected) {
    return Response.redirect(new URL(`/${locale}/login`, nextUrl));
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
  matcher: ["/", "/(es|en)/:path*"],
};
