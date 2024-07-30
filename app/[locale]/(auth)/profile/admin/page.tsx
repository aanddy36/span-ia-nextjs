
import { Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    adminPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { adminPage } = (await getMessages({ locale })) as Messages;
  return <div>{adminPage.title}</div>;
};

export default page;