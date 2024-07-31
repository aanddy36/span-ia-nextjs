import { Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";
import { FC } from "react";
import {
  SectionContainer,
  SectionDescr,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/molecules/StaticSection";
import Link from "next/link";

interface NotFoundProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    notFoundPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page: FC<NotFoundProps> = async ({ params: { locale } }) => {
  const { notFoundPage } = (await getMessages({ locale })) as Messages;
  const { title, header, descr, btn } = notFoundPage;
  return (
    <SectionContainer className="py-20">
      <SectionTitle>{title}</SectionTitle>
      <SectionHeader>{header}</SectionHeader>
      <SectionDescr className=" text-[20px]">{descr}</SectionDescr>
      <Link
        href="/"
        className=" rounded-md bg-red text-white font-medium px-8 py-1 w-fit transition-colors mt-8 capitalize
      duration-200 hover:bg-hoverRed mx-auto"
      >
        {btn}
      </Link>
    </SectionContainer>
  );
};

export default page;
