import { Messages } from "@/types";
import { getMessages } from "next-intl/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = (await getMessages({ locale })) as Messages;

  return (
    <main>
      <span>{messages.homePage.title}</span>
    </main>
  );
}
