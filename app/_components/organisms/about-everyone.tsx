import React, { FC } from "react";
import {
  SectionContainer,
  SectionHeader,
  StaticSection,
  SectionDescr,
  SectionImg,
} from "@/app/_components/molecules/StaticSection";

import javier3 from "@/public/javier3.png";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types";

interface AboutEveryoneProps {
  locale: string;
}

const AboutEveryone: FC<AboutEveryoneProps> = async ({ locale }) => {
  const {
    aboutPage: { everyStudent },
  } = (await getMessages({ locale })) as Messages;
  const { title, description, alt } = everyStudent;
  return (
    <StaticSection>
      <SectionContainer className="laptop:text-left">
        <SectionHeader variant="sm">{title}</SectionHeader>
        <SectionDescr className=" text-[20px]">{description}</SectionDescr>
      </SectionContainer>
      <SectionImg image={javier3} alt={title} />
    </StaticSection>
  );
};

export default AboutEveryone;
