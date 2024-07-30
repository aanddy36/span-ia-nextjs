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
import { Session } from "next-auth";

interface SessionContextProps {
  session: Session | null;
  setSession: Dispatch<SetStateAction<Session | null>>;
  isLoggedIn: boolean;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

interface SessionProviderProps {
  children: React.ReactNode;
  authSession: Session | null;
}

const SessionProvider: FC<SessionProviderProps> = ({
  children,
  authSession,
}) => {
  const [session, setSession] = useState<Session | null>(authSession);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setSession(authSession);
    setIsLoggedIn(authSession ? true : false);
    
  }, [authSession]);

  return (
    <SessionContext.Provider value={{ session, setSession, isLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  const { session, setSession, isLoggedIn } = useContext(
    SessionContext
  ) as SessionContextProps;
  return { session, setSession,isLoggedIn };
};

export { SessionProvider, useSession };
