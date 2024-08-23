"use client";

import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ExtendedUser } from "@/types/modals";

interface UserContextProps {
  user: ExtendedUser | null;
  setUser: Dispatch<SetStateAction<ExtendedUser | null>>;
  isLoggedIn: boolean;
  isOpenAuthModal: boolean;
  setIsOpenAuthModal: Dispatch<SetStateAction<boolean>>;
}

const SessionContext = createContext<UserContextProps | undefined>(undefined);

interface SessionProviderProps {
  children: React.ReactNode;
  authUser: ExtendedUser | null;
}

const UserProvider: FC<SessionProviderProps> = ({ children, authUser }) => {
  const [user, setUser] = useState<ExtendedUser | null>(authUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  useEffect(() => {
    setUser(authUser);
    setIsLoggedIn(authUser ? true : false);
  }, [authUser]);

  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        isOpenAuthModal,
        setIsOpenAuthModal,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useUser = () => {
  const { user, setUser, isLoggedIn, isOpenAuthModal, setIsOpenAuthModal } =
    useContext(SessionContext) as UserContextProps;
  return { user, setUser, isLoggedIn, isOpenAuthModal, setIsOpenAuthModal };
};

export { UserProvider, useUser };
