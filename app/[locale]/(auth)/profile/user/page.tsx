
import { Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";

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
  const { userPage } = (await getMessages({ locale })) as Messages;
  return <div>{userPage.title}</div>;
};

export default page;