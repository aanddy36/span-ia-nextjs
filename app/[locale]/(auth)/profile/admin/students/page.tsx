import { Messages } from "@/global";
import { auth } from "@/lib/auth";
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
      metadata: { titleStudents, descriptionStudents },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title: titleStudents, description: descriptionStudents };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const {
    adminPage: { studentsPage },
  } = (await getMessages({ locale })) as Messages;
  const session = await auth();

  if (session?.user.role !== UserRole.ADMIN) {
    redirect("/not-allowed");
  }

  return <div className="bg-notAvail h-full">{studentsPage.title}</div>;
};

export default page;