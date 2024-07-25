import { Messages } from "@/types";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    loginPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { loginPage } = (await getMessages({ locale })) as Messages;
  return <div>{loginPage.title}</div>;
};

export default page;