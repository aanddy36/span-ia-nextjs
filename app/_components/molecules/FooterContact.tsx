"use client";

import { useConfiguration } from "@/contexts/Configuration";
import { useTranslations } from "next-intl";

const FooterContact = () => {
  const { address, phone } = useConfiguration();
  const t = useTranslations("footer.contact");
  const email = "anchibro@hotmail.com";
  return (
    <ul className="flex flex-col gap-5 items-start">
      <li className=" font-semibold text-[16px]">{t("title")}</li>
      <li className="max-w-[180px]">{address}</li>
      <li>{phone}</li>
      <li>{email}</li>
    </ul>
  );
};

export default FooterContact;
