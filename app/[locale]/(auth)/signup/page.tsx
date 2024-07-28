import { SignupForm } from "@/app/_components/molecules/SignupForm";
import Socials from "@/app/_components/molecules/Socials";
import { Messages } from "@/types";
import { getMessages } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    signupPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { signupPage } = (await getMessages({ locale })) as Messages;
  const { title, alreadySignedUp1, alreadySignedUp2 } = signupPage;
  return (
    <div className=" w-[98%] laptop:w-[591px] rounded-lg mx-auto px-5 py-12">
      <h1 className=" text-[32px] font-medium">{title}</h1>
      <SignupForm locale={locale} />
      <Socials />
      <div className="text-[14px] text-red font-medium w-fit mx-auto mt-4">
        <span className="text-muted-foreground ">{alreadySignedUp1}</span>{" "}
        <Link
          href={`/${locale}/login`}
          className="cursor-pointer transition-all duration-200 hover:underline"
        >
          {alreadySignedUp2}
        </Link>
      </div>
    </div>
  );
};

export default page;
