import thePhoto from "@/public/no-photo.jpg";
import { Messages } from "@/types/modals";
import { Session } from "next-auth";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import { FC } from "react";
import UserSettingsBtn from "../atoms/UserSettingsBtn";
import { getUserInfo } from "@/app/queries/getUserInfo";
import { fetchRequest } from "@/utils/fetchRequest";

interface UserInfoProps {
  locale: string;
  id: string;
}

const UserInfo: FC<UserInfoProps> = async ({ locale, id }) => {
  const {
    userPage: { userInfo },
  } = (await getMessages({ locale })) as Messages;

  const { success, error } = await fetchRequest(`/api/user/settings/${id}`);

  if (error) {
    return <span className=" text-center italic opacity-60">{error}</span>;
  }

  return (
    <>
      <UserSettingsBtn />
      <div className="border relative rounded-full mx-auto">
        <Image
          src={success?.image ? success.image : thePhoto}
          alt="No photo"
          className=" w-[91px] h-[91px] rounded-full"
          width={100}
          height={100}
        />
      </div>
      <h1 className=" text-2xl font-medium mt-6 text-center">
        {success?.name}
      </h1>
      <ul className=" opacity-50 text-[14px] mt-6 flex flex-col gap-2 w-full">
        <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.classes}</span>
          <span>{success?.classes} {userInfo.classes}</span>
        </li>
        <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.email}</span>
          <span>{success?.email}</span>
        </li>
        <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.phone}</span>
          <span>{success?.phone ? success.phone : userInfo.empty}</span>
        </li>
      </ul>
    </>
  );
};

export default UserInfo;
