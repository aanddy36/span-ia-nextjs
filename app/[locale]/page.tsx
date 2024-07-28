import Welcome from "@/app/_components/organisms/welcome";
import Testimonials from "@/app/_components/organisms/testimonials";

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
