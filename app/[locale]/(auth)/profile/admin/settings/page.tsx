import LoadingInfo from "@/app/_components/atoms/LoadingInfo";
import AdminSettings from "@/app/_components/organisms/admin-settings";
import { Messages } from "@/global";
import { auth } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    adminPage: {
      metadata: { titleSettings, descriptionSettings },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title: titleSettings, description: descriptionSettings };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const {
    adminPage: { settingsPage },
  } = (await getMessages({ locale })) as Messages;
  const session = await auth();

  if (session?.user.role !== UserRole.ADMIN) {
    redirect("/not-allowed");
  }

  return (
    <>
      <h1 className=" text-[32px] font-medium">{settingsPage.title}</h1>
      <div className="bg-white mt-[32px] w-full border rounded-lg px-10 py-6 flex flex-col">
        <Suspense
          fallback={
            <div className="text-center">
              <LoadingInfo />
            </div>
          }
        >
          <AdminSettings />
        </Suspense>
      </div>
    </>
  );
};

export default page;
