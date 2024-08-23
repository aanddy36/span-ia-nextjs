import React, { FC } from "react";
import { Button } from "@/app/_components/shadcn/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Input from "@/app/_components/atoms/Input";
import { useTranslations } from "next-intl";

interface Props {
  changeMode: (value: boolean) => void;
}

const LoginPopup: FC<Props> = ({ changeMode }) => {
  const t = useTranslations("reservePage.login");
  return (
    <>
      <h5 className=" text-sm font-light">{t("subText")}</h5>
      <div className=" flex items-center w-full gap-4">
        <Button
          size="sm"
          variant="outline"
          className="w-full "
          /*  onClick={() => handleClick("google")} */
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="w-full "
          /* onClick={() => handleClick("github")} */
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
      <div className=" relative mt-2 mb-2 w-full">
        <div className="border-t border border-notAvail"></div>
        <div className=" text-reserved absolute bg-white left-1/2 top-1/2 px-2 -translate-x-1/2 -translate-y-1/2">
          {t("or")}
        </div>
      </div>
      <form className=" space-y-8" /* onSubmit={handleSubmit(onSubmit)} */>
        <div className=" flex flex-col gap-4">
          {/* <FormError message={error || urlError} />
        <FormSuccess message={success} /> */}
          <div className=" flex flex-col gap-2">
            <label htmlFor="email">{t("email")}</label>
            <Input
              id="email"
              type="email"
              /* {...register("email")} */
              placeholder="john.doe@example.com"
              /* disabled={isPending} */
            />
            {/* {errors.email && (
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.email.message}
            </p>
          )} */}
          </div>

          <div className=" flex flex-col gap-2">
            <label htmlFor="password">{t("password")}</label>
            <Input
              id="password"
              type="password"
              /* {...register("password")} */
              placeholder="******"
              /* disabled={isPending} */
            />
            {/* {errors.password && (
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.password.message}
            </p>
          )} */}
          </div>
        </div>
        <Button
          className="w-full"
          size="sm"
          variant="red" /* disabled={isPending} */
        >
          {t("login")}
          {/* {isPending ? <ClipLoader color=" white" size={20} /> : t("loginBtn")} */}
        </Button>
      </form>
      <div className="text-[14px] text-red font-medium w-fit mx-auto">
        <span className=" text-black font-light">{t("noAccount")}</span>{" "}
        <button
          onClick={() => changeMode(false)}
          className="cursor-pointer transition-all duration-200 hover:underline"
        >
          {t("signUp")}
        </button>
      </div>
    </>
  );
};

export default LoginPopup;
