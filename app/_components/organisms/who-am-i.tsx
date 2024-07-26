import {
  SectionBtn,
  SectionContainer,
  SectionDescr,
  SectionHeader,
  SectionImg,
  SectionTitle,
  StaticSection,
} from "@/app/_components/molecules/StaticSection";
import { Messages } from "@/global";
import landing2 from "@/public/landing_2.png";
import { getMessages } from "next-intl/server";
import { FC } from "react";

interface WhoAmIProps {
  locale: string;
}

const WhoAmI: FC<WhoAmIProps> = async ({ locale }) => {
  const path = `/${locale}/about`;
  const {
    homePage: { whoAmI },
  } = (await getMessages({ locale })) as Messages;
  const { title, header, description, btn, altBtn } = whoAmI;
  return (
    <StaticSection>
      <SectionImg image={landing2} alt={altBtn} />
      <SectionContainer className=" laptop:text-left">
        <SectionTitle>{title}</SectionTitle>
        <SectionHeader>{header}</SectionHeader>
        <SectionDescr>{description}</SectionDescr>
        <SectionBtn path={path}>{btn}</SectionBtn>
      </SectionContainer>
    </StaticSection>
  );
};

export default WhoAmI;
