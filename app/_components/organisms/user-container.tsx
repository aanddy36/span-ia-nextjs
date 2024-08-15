"use client";

import { FC } from "react";
import UserChangeSettings from "./user-change-settings";
import { useUserSettings } from "@/contexts/UserSettingsContext";

interface UserContainerProps {
  children: React.ReactNode;
}

const UserContainer: FC<UserContainerProps> = ({ children }) => {
  const { isModalOpen } = useUserSettings();
  return (
    <div className=" bg-notAvail py-8 px-2 tablet:px-6 flex flex-col gap-5 full:px-24 laptop:flex-row relative flex-grow min-h-full">
      {isModalOpen && <UserChangeSettings />}
      {children}
    </div>
  );
};

export default UserContainer;
