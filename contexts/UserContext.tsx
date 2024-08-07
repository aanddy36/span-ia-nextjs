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
}

const SessionContext = createContext<UserContextProps | undefined>(
  undefined
);

interface SessionProviderProps {
  children: React.ReactNode;
  authUser: ExtendedUser | null;
}

const UserProvider: FC<SessionProviderProps> = ({
  children,
  authUser,
}) => {
  const [user, setUser] = useState<ExtendedUser | null>(authUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setUser(authUser);
    setIsLoggedIn(authUser ? true : false);
  }, [authUser]);

  return (
    <SessionContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
};

const useUser = () => {
  const { user, setUser, isLoggedIn } = useContext(
    SessionContext
  ) as UserContextProps;
  return { user, setUser, isLoggedIn };
};

export { UserProvider, useUser };
