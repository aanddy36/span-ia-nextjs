import React, { FC } from "react";
import {
  SectionContainer,
  SectionHeader,
  StaticSection,
  SectionDescr,
  SectionImg,
} from "@/app/_components/molecules/StaticSection";

import javier2 from "@/public/javier2.png";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/modals";

interface MoreAboutMeProps {
  locale: string;
}

const MoreAboutMe: FC<MoreAboutMeProps> = async ({ locale }) => {
  const {
    aboutPage: { moreAbout },
  } = (await getMessages({ locale })) as Messages;
  const { title, description, alt } = moreAbout;
  return (
    <div className=" bg-homeBg">
      <StaticSection>
        <SectionImg image={javier2} alt={alt} />
        <SectionContainer className="laptop:text-left">
          <SectionHeader variant="sm">{title}</SectionHeader>
          <SectionDescr className=" text-[20px]">{description}</SectionDescr>
        </SectionContainer>
      </StaticSection>
    </div>
  );
};

export default MoreAboutMe;
