import {
  SectionBtn,
  SectionContainer,
  SectionDescr,
  SectionHeader,
  SectionImg,
  SectionTitle,
  StaticSection,
} from "@/app/_components/molecules/StaticSection";
import landing1 from "@/public/landing_1.png";
import { Messages } from "@/types";
import { getMessages } from "next-intl/server";
import { FC } from "react";

interface WelcomeProps {
  locale: string;
}

const Welcome: FC<WelcomeProps> = async ({ locale }) => {
  const path = `/${locale}/reserve`;
  const {
    homePage: { welcome },
  } = (await getMessages({ locale })) as Messages;
  const { title, header, description, btn, altBtn } = welcome;
  return (
    <StaticSection>
      <SectionContainer className=" laptop:text-left">
        <SectionTitle>{title}</SectionTitle>
        <SectionHeader>{header}</SectionHeader>
        <SectionDescr>{description}</SectionDescr>
        <SectionBtn path={path}>{btn}</SectionBtn>
      </SectionContainer>
      <SectionImg image={landing1} alt={altBtn} />
    </StaticSection>
  );
};

export default Welcome;
