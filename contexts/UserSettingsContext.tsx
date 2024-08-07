"use client";

import { UserSettings } from "@/types/modals";
import { createContext, FC, useContext, useState } from "react";

interface UserSettingsContextProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  user: UserSettings;
}

const UserSettingsContext = createContext<UserSettingsContextProps | undefined>(
  undefined
);

interface UserSettingsProviderProps {
  children: React.ReactNode;
  user: UserSettings;
}

const UserSettingsProvider: FC<UserSettingsProviderProps> = ({
  children,
  user,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <UserSettingsContext.Provider value={{ isModalOpen, setIsModalOpen, user }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

const useUserSettings = () => {
  const { isModalOpen, setIsModalOpen, user } = useContext(
    UserSettingsContext
  ) as UserSettingsContextProps;
  return { isModalOpen, setIsModalOpen, user };
};

export { useUserSettings, UserSettingsProvider };
