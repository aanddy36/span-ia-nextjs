import AdminStats from "@/app/_components/molecules/AdminStats";
import { DurationPie } from "@/app/_components/molecules/DurationPie";
import LoadingStats from "@/app/_components/molecules/LoadingStats";
import { TimeSeries } from "@/app/_components/molecules/TimeSeries";
import { auth } from "@/lib/auth";
import { Messages } from "@/types/modals";
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

  return (
    <div className="flex flex-col gap-[31px]">
      <h1 className=" text-[32px] font-medium">{homePage.title}</h1>
      <Suspense fallback={<LoadingStats />}>
        <AdminStats locale={locale} />
      </Suspense>
      <section className=" grid grid-cols-2 gap-[40px] h-[350px]">
        <div className="rounded-[10px] grow border bg-white py-6 px-8 flex flex-col gap-2">
          <h1 className=" text-[20px] font-medium">
            {homePage.timeSeriesLabel}
          </h1>
          <TimeSeries />
        </div>
        <div className="rounded-[10px] grow border bg-white py-6 px-8 flex flex-col gap-2">
          <h1 className=" text-[20px] font-medium">
            {homePage.durationPieLabel}
          </h1>
          <DurationPie />
        </div>
      </section>
    </div>
  );
};

export default page;
