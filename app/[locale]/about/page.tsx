
import { Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";
import { FC } from "react";
import Testimonials from "@/app/_components/organisms/testimonials";
import Javier from "@/app/_components/organisms/javier";
import MoreAboutMe from "@/app/_components/organisms/more-about-me";
import AboutEveryone from "@/app/_components/organisms/about-everyone";

interface AboutProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    aboutPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page: FC<AboutProps> = async ({ params: { locale } }) => {
  return (
    <div className=" flex flex-col">
      <Javier locale={locale} />
      <MoreAboutMe locale={locale} />
      <AboutEveryone locale={locale} />
      <Testimonials locale={locale} />
    </div>
  );
};

export default page;
