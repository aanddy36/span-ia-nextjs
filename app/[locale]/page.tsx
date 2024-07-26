import { Messages } from "@/types";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import landing1 from "@/public/landing_1.png";
import target from "@/public/target.svg";
import money from "@/public/dollar.svg";
import books from "@/public/books.svg";
import landing2 from "@/public/landing_2.png";
import Image from "next/image";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = (await getMessages({ locale })) as Messages;

  return (
    <div className=" pb-20 flex flex-col">
      <section className="w-full py-12 px-8">
        <div className="grid gap-10 grid-cols-1 laptop:grid-cols-2 max-w-[1128px] mx-auto">
          <div className=" flex flex-col gap-3 justify-center text-center laptop:text-left">
            <h3 className="font-medium text-red text-lg">Welcome To My Site</h3>
            <h1 className=" font-extrabold text-[40px] tablet:text-[50px] full:text-[60px] laptop:max-w-[540px]
             tablet:leading-[76px] leading-[60px]">
              New Way To Learn <span className="text-red">Spanish</span>
            </h1>
            <h4 className="text-[14px] font-light laptop:max-w-[385px]">
              Domain the written and spoken skills of the Spanish language with
              engaging lessons and fast resaults!
            </h4>
            <Link
              href="/es/reserve"
              className=" rounded-md bg-red text-white font-medium px-8 py-1 w-fit mt-8
           transition-colors duration-200 hover:bg-hoverRed mx-auto laptop:mx-0"
            >
              Start Now
            </Link>
          </div>
          <div>
            <Image
              src={landing1}
              quality={100}
              alt="Landing photo"
              className=" aspect-auto w-full max-w-[500px] mx-auto laptop:max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 items-center py-20 bg-homeBg px-8">
        <h3 className="font-medium text-red text-lg">My Services</h3>
        <h2 className="text-[32px] tablet:text-[40px] font-semibold text-center">
          Provided Features
        </h2>
        <ul className=" flex flex-col max-w-[1128px] justify-between w-full gap-12 items-center mt-10 full:flex-row">
          <div className="flex flex-col gap-2 items-center">
            <Image src={target} alt="Private Target icon" />
            <h3 className=" font-semibold text-[24px]">Private Target</h3>
            <span className=" text-[14px] font-light max-w-[259px] text-center">
              Classes are just for one person, so they will be personalized to
              your level and progress.{" "}
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src={money} alt="Economic Classes icon" />
            <h3 className=" font-semibold text-[24px]">Economic Classes</h3>
            <span className=" text-[14px] font-light max-w-[259px] text-center">
              Take advantage of the economic prices for our lessons.
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src={books} alt="Modern Method icon" />
            <h3 className=" font-semibold text-[24px]">Modern Method</h3>
            <span className=" text-[14px] font-light max-w-[259px] text-center">
              You will be taught with the most advanced and effective learning
              methods.
            </span>
          </div>
        </ul>
      </section>

      <section
        className="flex gap-10 flex-col full:flex-row-reverse full:justify-between full:pl-12 mt-24
       mb-12"
      >
        <div className=" flex flex-col gap-3 full:pt-12">
          <h3 className="font-medium text-red text-lg">Who Am I?</h3>
          <h1
            className=" font-extrabold text-[36px] full:text-[48px] max-w-[631px] full:leading-[62px]
           leading-[46px]"
          >
            Hi, I’m Javier, I’ll be teaching you Spanish
          </h1>
          <h4 className="text-[14px] font-light max-w-[385px]">
            Discover what makes my lessons so effective
          </h4>
          <Link
            href="about"
            className=" rounded-md bg-red text-white font-medium px-8 py-1 w-fit mt-8
           transition-colors duration-200 hover:bg-hoverRed"
          >
            About Me
          </Link>
        </div>
        <Image
          src={landing2}
          alt="Landing photo"
          className="full:max-h-[470px] full:max-w-[600px]"
        />
      </section>

      {/* <Testimonials /> */}
    </div>
  );
}
