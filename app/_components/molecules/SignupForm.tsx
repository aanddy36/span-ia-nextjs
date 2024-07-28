"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../atoms/Input";
import { Button } from "@/app/_components/shadcn/button";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { SignupSchemaType, useSignupSchema } from "@/schemas/signup";

interface SignupFormProps {
  locale: string;
}

export const SignupForm: FC<SignupFormProps> = ({ locale }) => {
  const t = useTranslations("signupPage");
  const SignupSchema = useSignupSchema();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupSchemaType) => {
    console.log(data);
  };
  return (
    <form className="mt-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className=" font-semibold">
            {t("nameLabel")}
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="John Doe"
            /* disabled={isPending} */
          />
          {errors.name && (
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

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
          <label htmlFor="phone" className=" font-semibold">
            {t("phoneLabel")}
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="3135948642"
            /* disabled={isPending} */
          />
          {errors.phone && (
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.phone.message}
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
        {t("signupBtn")}
      </Button>
    </form>
  );
};
