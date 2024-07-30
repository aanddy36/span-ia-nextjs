import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/organisms/navbar";
import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Footer } from "../_components/organisms/footer";

import { auth } from "@/lib/auth";
import { SessionProvider } from "@/contexts/SessionContext";
import { Messages } from "@/global";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    homePage: { metadata },
  } = (await getMessages({ locale })) as Messages;
  return {
    title: {
      template: "%s | SpanIA",
      default: `${metadata.title} | SpanIA`,
    },
    description: `${metadata.description}`,
    icons: {
      icon: "/icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = (await getMessages({ locale })) as Messages;
  const session = await auth();
/*   console.log("Session:");

  console.log(session); */

  return (
    <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        <SessionProvider authSession={session}>
          <main className="min-h-screen flex flex-col ">
            <Navbar/>
            <div className="grow w-full">{children}</div>
            <Footer messages={messages} locale={locale} />
          </main>
        </SessionProvider>
      </NextIntlClientProvider>
    </body>
  );
}
