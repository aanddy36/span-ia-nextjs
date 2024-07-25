import { Messages } from "@/types";
import Link from "next/link";
import React from "react";

export const Footer = ({
  messages,
  locale,
}: {
  messages: Messages;
  locale: string;
}) => {
  const {
    footer: { connect, links, copyright, contact },
  } = messages;
  //SACAR DE LA API
  const phone = "+1(123)-456-7890";
  const address = "43 Raymouth Rd. Baltemoer, London 3910";
  const email = "anchibro@hotmail.com";
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
        <ul className="flex flex-col gap-5 items-start">
          <li className=" font-semibold text-[16px]">{contact.title}</li>
          <li className="max-w-[180px]">{address}</li>
          <li>{phone}</li>
          <li>{email}</li>
        </ul>
      </div>
      <span className=" text-white/70 mx-auto">
        Copyright ©2023 {copyright}
      </span>
    </div>
  );
};
