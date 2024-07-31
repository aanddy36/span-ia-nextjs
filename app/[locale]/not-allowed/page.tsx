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
import ReturnButton from "@/app/_components/atoms/ReturnButton";

interface UnauthorizedProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const {
    notAllowedPage: {
      metadata: { title, description },
    },
  } = (await getMessages({ locale })) as Messages;
  return { title, description };
}

const page: FC<UnauthorizedProps> = async ({ params: { locale } }) => {
  const { notAllowedPage } = (await getMessages({ locale })) as Messages;
  const { title, header, descr, btn } = notAllowedPage;
  return (
    <SectionContainer className="py-20">
      <SectionTitle>{title}</SectionTitle>
      <SectionHeader>{header}</SectionHeader>
      <SectionDescr className=" text-[20px]">{descr}</SectionDescr>
      <ReturnButton>{btn}</ReturnButton>
    </SectionContainer>
  );
};

export default page;
