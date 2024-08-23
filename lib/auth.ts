import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/app/queries/getUserBy";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", maxAge: 60 * 24 * 60 },
  ...authConfig,
  pages: {
    signIn: "/login",
    error: "/[locale]/error",
  },
  callbacks: {
    async jwt({ token }) {

      if (token.sub) {
        const user = await getUserById(token.sub);

        if (user) {
          token.role = user?.role;
          token.phone = user?.phone;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.role = token.role as any;
        session.user.phone = token.phone as any;
        session.user.id = token.sub;
      }
      return session;
    },
  },
  trustHost: true,
});
