import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/molecules/StaticSection";
import SingleService from "../molecules/SingleService";
import { Messages, ServiceType } from "@/types/modals";
import target from "@/public/target.svg";
import money from "@/public/dollar.svg";
import books from "@/public/books.svg";
import { getMessages } from "next-intl/server";
import { FC } from "react";

interface WhoAmIProps {
  locale: string;
}

const MyServices: FC<WhoAmIProps> = async ({ locale }) => {
  const {
    homePage: { services },
  } = (await getMessages({ locale })) as Messages;
  
  const info: ServiceType[] = [
    {
      src: target,
      alt: services.service1TitleAlt,
      title: services.service1Title,
      description: services.service1Descr,
    },
    {
      src: money,
      alt: services.service2TitleAlt,
      title: services.service2Title,
      description: services.service2Descr,
    },
    {
      src: books,
      alt: services.service3TitleAlt,
      title: services.service3Title,
      description: services.service3Descr,
    },
  ];

  return (
    <SectionContainer className=" bg-homeBg px-8 py-20">
      <SectionTitle>{services.title}</SectionTitle>
      <SectionHeader variant="sm">{services.header}</SectionHeader>
      <ul className=" flex flex-col max-w-[1128px] mx-auto justify-between w-full gap-12 items-center mt-10 full:flex-row">
        {info.map((service) => {
          return <SingleService key={service.alt} {...service} />;
        })}
      </ul>
    </SectionContainer>
  );
};

export default MyServices;
