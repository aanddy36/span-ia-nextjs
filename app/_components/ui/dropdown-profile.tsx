import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/shadcn/dropdown-menu";
import Image from "next/image";
import thePhoto from "@/public/no-photo.jpg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import settings from "@/public/setting.svg";
import logout from "@/public/logout.svg";
import { usePathname } from "next/navigation";
import { getPathname } from "@/utils/getPathname";

export const DropdownProfile = () => {
  const fullPath = usePathname();
  const [locale, _] = getPathname(fullPath);
  const t = useTranslations("navbar");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none rounded-full">
        <Image
          src={thePhoto}
          alt="Profile photo"
          className="w-[40px] h-[40px] rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={`/${locale}/profile`}>
          <DropdownMenuItem className=" cursor-pointer space-x-3">
            <Image src={settings} alt="Settings logo" />
            <span>{t("profile")}</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className=" cursor-pointer space-x-3">
          <Image src={logout} alt="Logout logo" />
          <span>{t("logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
