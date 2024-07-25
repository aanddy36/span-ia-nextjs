import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getPathname } from "@/utils/getPathname";
import { useTranslations } from "next-intl";
import { FaBars } from "react-icons/fa";
import { SelectLang } from "./ui/select-lang";
import { DropdownProfile } from "./ui/dropdown-profile";
import { Dispatch, SetStateAction } from "react";

const Topbar = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const fullPath = usePathname();
  const [locale, path] = getPathname(fullPath);
  const isLoggedIn = true;
  const t = useTranslations("navbar");

  return (
    <nav className="px-10 py-4 flex justify-between w-full items-center shadow-md shadow-black/10">
      <Link href={`/${locale}`}>
        <Image src={logo} alt="Logo" />
      </Link>
      <ul className="miniFull:flex gap-6 full:gap-10 items-center text-[15px] hidden ">
        <Link
          href={`/${locale}`}
          className={` border-b-2 py-[2px] ${
            path === `/${locale}`
              ? " border-red text-red"
              : " border-transparent text-black  transition-colors duration-200 hover:text-red"
          }`}
        >
          {t("home")}
        </Link>
        <Link
          href={`/${locale}/about`}
          className={` border-b-2 py-[2px] ${
            path === "/about"
              ? " border-red text-red"
              : " border-transparent text-black  transition-colors duration-200 hover:text-red"
          }`}
        >
          {t("about")}
        </Link>
        <Link
          href={`/${locale}/reserve`}
          className={` border-b-2 py-[2px] ${
            path === "/reserve"
              ? " border-red text-red"
              : " border-transparent text-black  transition-colors duration-200 hover:text-red"
          }`}
        >
          {t("reserve")}
        </Link>
      </ul>
      <ul className="miniFull:flex gap-4 full:gap-10 items-center text-[15px] hidden">
        {!isLoggedIn ? (
          <>
            <Link
              href={`/${locale}/login`}
              className={` border-b-2 py-[2px] ${
                path === "/login"
                  ? " border-red text-red"
                  : " border-transparent text-black  transition-colors duration-200 hover:text-red"
              }`}
            >
              {t("login")}
            </Link>
            <Link
              className="px-4 py-2 text-white bg-red rounded-lg
        transition-colors duration-200 hover:bg-hoverRed"
              href={`/${locale}/signup`}
            >
              {t("signup")}
            </Link>
          </>
        ) : (
          <DropdownProfile />
        )}

        <SelectLang />
      </ul>
      <button
        className="border-none bg-transparent transition-transform duration-200 hover:rotate-90 scale-[1.2] miniFull:hidden 
        cursor-pointer"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Topbar;
