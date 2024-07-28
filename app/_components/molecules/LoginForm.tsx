"use client";

import { LoginSchemaType, useLoginSchema } from "@/schemas/login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../atoms/Input";
import { Button } from "@/app/_components/shadcn/button";
import { FC } from "react";
import { useTranslations } from "next-intl";

interface LoginFormProps {
  locale: string;
}

export const LoginForm: FC<LoginFormProps> = ({ locale }) => {
  const t = useTranslations("loginPage");
  const LoginSchema = useLoginSchema();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };
  return (
    <form className="mt-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-2">
          <label htmlFor="email" className=" font-semibold">
            {t("emailLabel")}
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john.doe@example.com"
            /* disabled={isPending} */
          />
          {errors.email && (
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className=" flex flex-col gap-2">
          <label htmlFor="password" className=" font-semibold">
            {t("passwordLabel")}
          </label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            placeholder="******"
            /* disabled={isPending} */
          />
          {errors.password && (
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <Button className="w-full" size="sm" variant="red">
        {t("loginBtn")}
      </Button>
    </form>
  );
};
