"use client";

import { LoginSchemaType, useLoginSchema } from "@/schemas/login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/app/_components/atoms/Input";
import { Button } from "@/app/_components/shadcn/button";
import { FC, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import FormError from "@/app/_components/molecules/FormError";
import FormSuccess from "@/app/_components/molecules/FormSuccess";
import { login } from "@/actions/login";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

interface LoginFormProps {
  locale: string;
}

export const LoginForm: FC<LoginFormProps> = ({ locale }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const t = useTranslations("loginPage");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? t("sameProviderError")
      : "";
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

  const loginWithLocale = login.bind(null, locale);

  const onSubmit = (data: LoginSchemaType) => {
    setError("");
    setSuccess("");
    try {
      startTransition(async () => {
        const res = await loginWithLocale(data);
        if (res) {
          const { success, error } = res;
          setError(error);
          setSuccess(success);
        }
      });
    } catch (error) {
      setError(t("unexpectedError"));
    }
  };
  return (
    <form className="mt-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-4">
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
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
      <Button className="w-full" size="sm" variant="red" disabled={isPending}>
        {isPending ? <ClipLoader color=" white" size={20} /> : t("loginBtn")}
      </Button>
    </form>
  );
};
