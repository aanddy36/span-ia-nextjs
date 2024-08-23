import React, { FC } from "react";
import { Button } from "@/app/_components/shadcn/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useTranslations } from "next-intl";

interface Props {
  changeMode: (value: boolean) => void;
}

const SignUpPopup: FC<Props> = ({ changeMode }) => {
  const t = useTranslations("reservePage.signup");
  return (
    <>
      <h5 className=" text-sm font-light">{t("subText")}</h5>
      <div className=" flex flex-col items-center w-full gap-4">
        <Button
          size="sm"
          variant="outline"
          className="w-full grid grid-cols-3"
          /*  onClick={() => handleClick("google")} */
        >
          <FcGoogle className="h-5 w-5" /> {t("google")}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="w-full grid grid-cols-3"
          /* onClick={() => handleClick("github")} */
        >
          <FaGithub className="h-5 w-5" /> {t("github")}
        </Button>
        <div className="text-[14px] text-red font-medium w-fit mx-auto">
          <span className=" text-black font-light">{t("account")}</span>{" "}
          <button
            onClick={() => changeMode(true)}
            className="cursor-pointer transition-all duration-200 hover:underline"
          >
            {t("logIn")}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpPopup;
