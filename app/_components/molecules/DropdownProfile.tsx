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
import logoutLogo from "@/public/logout.svg";
import usePaths from "@/hooks/usePaths";
import { signOut } from "next-auth/react";
import { useSession } from "@/contexts/SessionContext";
import { getAdminOrUser } from "@/utils/getAdminOrUser";

export const DropdownProfile = () => {
  const { locale } = usePaths();
  const t = useTranslations("navbar");
  const { session } = useSession();
  const path = getAdminOrUser(session?.user.role);

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
        <Link href={`/${locale}/profile/${path}`}>
          <DropdownMenuItem className=" cursor-pointer space-x-3">
            <Image src={settings} alt="Settings logo" />
            <span>{t("profile")}</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className=" cursor-pointer space-x-3"
          onClick={() => signOut()}
        >
          <Image src={logoutLogo} alt="Logout logo" />
          <span>{t("logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
