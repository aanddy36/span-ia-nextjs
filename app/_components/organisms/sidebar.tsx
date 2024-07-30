import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import close from "@/public/close.svg";
import { useTranslations } from "next-intl";
import { Dispatch, FC, SetStateAction } from "react";
import usePaths from "@/hooks/usePaths";
import NavbarLink from "@/app/_components/atoms/NavbarLink";
import { useSession } from "@/contexts/SessionContext";
import { signOut } from "next-auth/react";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { locale } = usePaths();
  const t = useTranslations("navbar");
  const { isLoggedIn } = useSession();

  return (
    <nav
      className={`fixed top-0 left-0 h-full z-10 bg-white miniFull:hidden w-[200px]
       shadow-black/50 flex flex-col items-center gap-6 pt-16 transition-transform duration-200
       ${
         isSidebarOpen
           ? "translate-x-[0%] shadow-xl"
           : "translate-x-[-100%] shadow-none"
       }`}
    >
      <Image
        src={close}
        alt="Close logo"
        onClick={() => setIsSidebarOpen(false)}
        className=" absolute top-4 right-4 transition-transform duration-200 hover:rotate-90 scale-[0.7] cursor-pointer"
      />

      <Link href={`/${locale}`} onClick={() => setIsSidebarOpen(false)}>
        <Image src={logo} alt="Logo" />
      </Link>
      <ul className=" flex flex-col w-full">
        <NavbarLink
          linkPath="home"
          variant="nb"
          route="home"
          onClick={() => setIsSidebarOpen(false)}
        />
        <NavbarLink
          linkPath="about"
          variant="nb"
          onClick={() => setIsSidebarOpen(false)}
        />
        <NavbarLink
          linkPath="reserve"
          variant="nb"
          onClick={() => setIsSidebarOpen(false)}
        />
        {!isLoggedIn ? (
          <>
            <NavbarLink
              linkPath="login"
              variant="nb"
              onClick={() => setIsSidebarOpen(false)}
            />
            <NavbarLink
              linkPath="signup"
              variant="nb"
              onClick={() => setIsSidebarOpen(false)}
            />
          </>
        ) : (
          <>
            <NavbarLink
              linkPath="profile"
              variant="nb"
              onClick={() => setIsSidebarOpen(false)}
            />
            <button
              className="border-transparent text-black  transition-all duration-200 hover:px-8 px-4 py-3 text-left"
              onClick={() => {
                signOut()
                setIsSidebarOpen(false);
              }}
            >
              {t("logout")}
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};
