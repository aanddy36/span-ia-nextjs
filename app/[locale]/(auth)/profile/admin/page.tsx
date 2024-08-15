import { auth } from "@/lib/auth";
import { Messages } from "@/types/modals";
import { UserRole } from "@prisma/client";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    adminPage: {
      metadata: { titleHome, descriptionHome },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title: titleHome, description: descriptionHome };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const {
    adminPage: { homePage },
  } = (await getMessages({ locale })) as Messages;
  const session = await auth();

  if (session?.user.role !== UserRole.ADMIN) {
    redirect("/not-allowed");
  }

  return <div className="bg-notAvail h-full">{homePage.title}</div>;
};

export default page;
