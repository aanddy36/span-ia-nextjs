import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaBars } from "react-icons/fa";
import { SelectLang } from "./ui/SelectLang";
import { DropdownProfile } from "./ui/DropdownProfile";
import { Dispatch, SetStateAction } from "react";
import NavbarLink from "@/app/_components/ui/NavbarLink";
import usePaths from "@/hooks/usePaths";

const Topbar = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { locale } = usePaths();
  const isLoggedIn = false;
  const t = useTranslations("navbar");

  return (
    <nav className="px-10 py-4 flex justify-between w-full items-center shadow-md shadow-black/10">
      <Link href={`/${locale}`}>
        <Image src={logo} alt="Logo" />
      </Link>
      <ul className="miniFull:flex gap-6 full:gap-10 items-center text-[15px] hidden ">
        <NavbarLink linkPath="home" route="home" />
        <NavbarLink linkPath="about" />
        <NavbarLink linkPath="reserve" />
      </ul>
      <ul className="flex gap-4 items-center">
        {!isLoggedIn ? (
          <div className="miniFull:flex gap-4 full:gap-10 items-center text-[15px] hidden">
            <NavbarLink linkPath="login" />
            <Link
              className="px-4 py-2 text-white bg-red rounded-lg
              transition-colors duration-200 hover:bg-hoverRed"
              href={`/${locale}/signup`}
            >
              {t("signup")}
            </Link>
          </div>
        ) : (
          <DropdownProfile />
        )}

        <SelectLang />
        <FaBars
          className="border-none bg-transparent transition-transform duration-200 hover:rotate-90 scale-[1.2] miniFull:hidden 
        cursor-pointer"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        />
      </ul>
    </nav>
  );
};

export default Topbar;
