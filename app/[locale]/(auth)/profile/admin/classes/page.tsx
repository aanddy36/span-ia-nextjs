import AdminClassesList from "@/app/_components/organisms/admin-classes-list";
import ClassesParams from "@/app/_components/organisms/classes-params";
import { Messages } from "@/global";
import { auth } from "@/lib/auth";
import { SortBySlug, StatusSlug } from "@/types/modals";
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
      metadata: { titleClasses, descriptionClasses },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title: titleClasses, description: descriptionClasses };
}

const page = async ({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { status?: StatusSlug; sortBy?: SortBySlug };
}) => {
  const {
    adminPage: { classesPage },
  } = (await getMessages({ locale })) as Messages;
  const session = await auth();

  if (session?.user.role !== UserRole.ADMIN) {
    redirect("/not-allowed");
  }

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className=" text-[32px] font-medium">{classesPage.title}</h1>
        <ClassesParams />
      </section>

      <AdminClassesList locale={locale} searchParams={searchParams} />
    </>
  );
};

export default page;
