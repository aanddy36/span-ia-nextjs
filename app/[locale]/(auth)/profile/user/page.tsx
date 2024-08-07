import { auth } from "@/lib/auth";
import { ClassesType, Messages } from "@/types/modals";
import { UserRole } from "@prisma/client";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import UserInfo from "@/app/_components/organisms/user-info";
import UserClasses from "@/app/_components/organisms/user-classes";
import UserContainer from "@/app/_components/organisms/user-container";
import { UserSettingsProvider } from "@/contexts/UserSettingsContext";
import LoadingInfo from "@/app/_components/atoms/LoadingInfo";
import { Suspense, use } from "react";
import { fetchRequest } from "@/utils/fetchRequest";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    userPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const session = await auth();
  const user = await fetchRequest(
    `/api/user/settings/${session?.user.id}`,
    "settings"
  );

  const classes: ClassesType[] = [];

  if (session?.user.role !== UserRole.USER) {
    redirect("/not-allowed");
  }

  return (
    <UserSettingsProvider user={user}>
      <UserContainer>
        <section
          className=" laptop:w-[300px] bg-white rounded-lg flex flex-col items-center relative min-h-full justify-center
          px-6 pt-16 pb-10 w-full"
        >
          {
            <Suspense fallback={<LoadingInfo />}>
              <UserInfo locale={locale} id={session.user.id as string} />
            </Suspense>
          }
        </section>
        <UserClasses locale={locale} classes={classes} />
      </UserContainer>
    </UserSettingsProvider>
  );
};

export default page;
