import { Messages } from "@/types";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import target from "@/public/target.svg";
import money from "@/public/dollar.svg";
import books from "@/public/books.svg";
import landing1 from "@/public/landing_1.png";
import landing2 from "@/public/landing_2.png";
import Image from "next/image";
import Welcome from "@/app/_components/organisms/welcome";
import Testimonials from "@/app/_components/organisms/testimonials";
import {
  SectionBtn,
  SectionContainer,
  SectionDescr,
  SectionHeader,
  SectionImg,
  SectionTitle,
  StaticSection,
} from "../_components/molecules/StaticSection";
import WhoAmI from "../_components/organisms/who-am-i";
import { FC } from "react";
import MyServices from "../_components/organisms/my-services";

interface HomeProps {
  params: { locale: string };
}

const Home: FC<HomeProps> = async ({ params: { locale } }) => {
  return (
    <div className=" flex flex-col">
      <Welcome locale={locale} />
      <MyServices locale={locale} />
      <WhoAmI locale={locale} />
      <Testimonials locale={locale} />
    </div>
  );
};
export default Home;
