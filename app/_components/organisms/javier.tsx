import React, { FC } from "react";
import {
  SectionContainer,
  SectionHeader,
  StaticSection,
  SectionDescr,
  SectionImg,
} from "@/app/_components/molecules/StaticSection";

import javier1 from "@/public/javier1.png";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/modals";

interface JavierProps {
  locale: string;
}

const Javier: FC<JavierProps> = async ({ locale }) => {
  const {
    aboutPage: { javier },
  } = (await getMessages({ locale })) as Messages;
  const { title, description, alt } = javier;
  return (
    <StaticSection>
      <SectionContainer className="laptop:text-left">
        <SectionHeader>{title}</SectionHeader>
        <SectionDescr className=" text-[20px]">{description}</SectionDescr>
      </SectionContainer>
      <SectionImg image={javier1} alt={alt} />
    </StaticSection>
  );
};

export default Javier;
