import { Messages } from "@/types/modals";
import Link from "next/link";
import React, { FC } from "react";
import FooterContact from "../molecules/FooterContact";

interface FooterType {
  messages: Messages;
  locale: string;
}

export const Footer: FC<FooterType> = ({ messages, locale }) => {
  const {
    footer: { connect, links, copyright, contact },
  } = messages;

  return (
    <div
      className=" w-full laptop:h-[316px] bg-black flex flex-col laptop:gap-5 laptop:items-center text-[13px] 
        text-white font-[200] justify-center gap-32 items-start p-10 laptop:p-0"
    >
      <div className=" flex gap-20 laptop:gap-36 items-start laptop:justify-center flex-col laptop:flex-row">
        <ul className="flex flex-col gap-5 items-start">
          <li className=" font-semibold text-[16px]">{connect.title}</li>
          <a target="_blank" href="https://www.linkedin.com/in/delchiaroa/">
            LinkedIn
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            Instagram
          </a>
          <a target="_blank" href="https://www.facebook.com/">
            Facebook
          </a>
          <a target="_blank" href="https://twitter.com/?lang=es">
            Twitter
          </a>
        </ul>
        <ul className="flex flex-col gap-5 items-start">
          <li className=" font-semibold text-[16px]">{links.title}</li>
          <Link href={`/${locale}`}>{links.home}</Link>
          <Link href={`/${locale}/about`}>{links.about}</Link>
          <Link href={`/${locale}/reserve`}>{links.reserve}</Link>
        </ul>
        <FooterContact />
      </div>
      <span className=" text-white/70 mx-auto">
        Copyright ©2023 {copyright}
      </span>
    </div>
  );
};
