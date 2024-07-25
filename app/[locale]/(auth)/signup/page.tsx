import { Messages } from "@/types";
import { getMessages } from "next-intl/server";

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
  return <div>{signupPage.title}</div>;
};

export default page;