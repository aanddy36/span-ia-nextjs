"use client";

import Image from "next/image";
import close from "@/public/close.svg";
import { useTranslations } from "next-intl";
import { useUserSettings } from "@/contexts/UserSettingsContext";
import Input from "@/app/_components/atoms/Input";
import { Button } from "@/app/_components/shadcn/button";
import { useForm } from "react-hook-form";
import {
  UserSettingsSchemaType,
  useUserSettingsSchema,
} from "@/schemas/userSettings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { postRequest } from "@/utils/postRequest";
import { showToast } from "@/utils/showToast";
import { ClipLoader } from "react-spinners";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";

const UserChangeSettings = () => {
  const t = useTranslations("userPage.userInfo");
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setIsModalOpen, user } = useUserSettings();
  const { user: session } = useUser();
  const router = useRouter()

  const initialValues = {
    name: user?.name,
    phone: user?.phone ? user.phone : "",
  };

  const UserSettingsSchema = useUserSettingsSchema();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<UserSettingsSchemaType>({
    resolver: zodResolver(UserSettingsSchema),
    defaultValues: initialValues,
  });
  let nameField = watch("name");
  let phoneField = watch("phone");

  const onSubmit = async (data: UserSettingsSchemaType) => {
    setIsLoading(true);
    //CAMBIAR
    try {
      const res = await postRequest(`/api/user/settings/${session?.id}`, data);
      setIsModalOpen(false);
      setIsLoading(false);
      if (res.success) {
        showToast("success", t("updateSuccess"));
        router.refresh()
      } else {
        showToast("error", t("updateError"));
      }
    } catch (error) {
      setIsModalOpen(false);
      setIsLoading(false);
      showToast("error", t("updateError"));
    }
  };

  // Use useEffect to track changes in nameField and phoneField
  useEffect(() => {
    const isSameName = initialValues.name === nameField;
    const isSamePhone = initialValues.phone === phoneField;

    // Update the isChanged state based on comparison
    if (!isSameName || !isSamePhone) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [nameField, phoneField]);

  return (
    <section className="absolute inset-0 bg-black/50 z-[2]">
      <div
        className=" w-[98%] laptop:w-[591px] bg-white rounded-lg absolute px-5 tablet:px-8 py-8 flex flex-col gap-12
      top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] shadow-md shadow-black/30"
      >
        <div className="border-b pb-2 w-full flex justify-between">
          <span className=" text-2xl font-semibold ">{t("settings")}</span>
          <button
            className=" cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <Image
              src={close}
              alt="Close image"
              className="transition-transform duration-200 hover:rotate-90 w-3"
            />
          </button>
        </div>

        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-2">
            <label htmlFor="name" className=" font-semibold">
              {t("nameLabel")}
            </label>
            <Input
              id="name"
              {...register("name")}
              /* disabled={isPending} */
            />
            {errors.name && (
              <p className="text-[0.8rem] font-medium text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="phone" className=" font-semibold">
              {t("phone")}
            </label>
            <Input
              id="phone"
              {...register("phone")}
              /* disabled={isPending} */
            />
            {errors.phone && (
              <p className="text-[0.8rem] font-medium text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className=" flex items-center w-full gap-2 mt-4">
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
              disabled={isLoading}
            >
              {t("cancelBtn")}
            </Button>
            <Button
              size="sm"
              variant="red"
              className="w-full"
              disabled={!isChanged || isLoading}
            >
              {isLoading ? (
                <ClipLoader color=" white" size={20} />
              ) : (
                t("confirmBtn")
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserChangeSettings;
