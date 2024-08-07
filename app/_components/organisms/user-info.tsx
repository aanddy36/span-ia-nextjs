import thePhoto from "@/public/no-photo.jpg";
import { Messages } from "@/types/modals";
import { Session } from "next-auth";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import { FC } from "react";
import UserSettingsBtn from "../atoms/UserSettingsBtn";
import { getUserInfo } from "@/utils/getUserInfo";
import { fetchRequest } from "@/utils/fetchRequest";

interface UserInfoProps {
  locale: string;
  id: string;
}

const UserInfo: FC<UserInfoProps> = async ({ locale, id }) => {
  const {
    userPage: { userInfo },
  } = (await getMessages({ locale })) as Messages;
  const URL = process.env.WEB_URL;
  const res = await fetch(`${URL}/api/user/settings/${id}`, {
    next: { tags: ["settings"] },
  });
  const user = await res.json();
  console.log(user);

  return (
    <>
      <UserSettingsBtn />
      <div className="border relative rounded-full mx-auto">
        <Image
          src={user?.image ? user.image : thePhoto}
          alt="No photo"
          className=" w-[91px] h-[91px] rounded-full"
          width={100}
          height={100}
        />
      </div>
      <h1 className=" text-2xl font-medium mt-6 text-center">{user?.name}</h1>
      <ul className=" opacity-50 text-[14px] mt-6 flex flex-col gap-2 w-full">
        <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.classes}</span>
          <span>0 {userInfo.classes}</span>
        </li>
        <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.email}</span>
          <span>{user?.email}</span>
        </li>
        <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.phone}</span>
          <span>{user?.phone ? user.phone : userInfo.empty}</span>
        </li>
        {/* <li className=" flex flex-col items-start gap-1">
          <span className=" font-semibold capitalize">{userInfo.joinedIn}</span>
          <span> Jun 4,2024</span>
        </li> */}
      </ul>
    </>
  );
};

export default UserInfo;
