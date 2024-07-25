import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getPathname } from "@/utils/getPathname";
import close from "@/public/close.svg";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

export const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const fullPath = usePathname();
  const [locale, path] = getPathname(fullPath);
  const t = useTranslations("navbar");
  const isLoggedIn = true;

  return (
    <nav
      className={`fixed top-0 left-0 h-full z-10 bg-white laptop:hidden w-[200px]
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
        <Link
          href={`/${locale}`}
          className={` border-b ${
            path === `/${locale}`
              ? " text-red px-4 py-3"
              : " text-black  transition-all duration-200 hover:px-8 px-4 py-3"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          {t("home")}
        </Link>
        <Link
          href={`/${locale}/about`}
          className={` border-b ${
            path === "/about"
              ? " text-red px-4 py-3"
              : " text-black  transition-all duration-200 hover:px-8 px-4 py-3"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          {t("about")}
        </Link>
        <Link
          href={`/${locale}/reserve`}
          className={` border-b ${
            path === "/reserve"
              ? " text-red px-4 py-3"
              : " text-black  transition-all duration-200 hover:px-8 px-4 py-3"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          {t("reserve")}
        </Link>
        {!isLoggedIn ? (
          <>
            <Link
              href={`/${locale}/login`}
              className={` border-b ${
                path === "/login"
                  ? " text-red px-4 py-3"
                  : " text-black  transition-all duration-200 hover:px-8 px-4 py-3"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {t("login")}
            </Link>
            <Link
              href={`/${locale}/signup`}
              className={` border-b ${
                path === "/signup"
                  ? " text-red px-4 py-3"
                  : " text-black  transition-all duration-200 hover:px-8 px-4 py-3"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {t("signup")}
            </Link>
          </>
        ) : (
          <>
            <Link
              href={`/${locale}/profile`}
              className={` border-b ${
                path === "/profile"
                  ? " text-red px-4 py-3"
                  : " text-black  transition-all duration-200 hover:px-8 px-4 py-3"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {t("profile")}
            </Link>
            <button
              className="border-transparent text-black  transition-all duration-200 hover:px-8 px-4 py-3 text-left"
              onClick={() => setIsSidebarOpen(false)}
            >
              {t("logout")}
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};
