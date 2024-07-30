import usePaths from "@/hooks/usePaths";
import { NavbarMessages } from "@/types/modals";
import { useTranslations } from "next-intl";
import Link, { LinkProps } from "next/link";

interface NavbarLinkProps extends Omit<LinkProps, "href"> {
  linkPath: NavbarMessages;
  route?: "other" | "home";
  variant?: "tp" | "nb";
}

const NavbarLink = ({
  linkPath,
  route = "other",
  variant = "tp",
  ...props
}: NavbarLinkProps) => {
  const { locale, path } = usePaths();
  const t = useTranslations("navbar");

  const href = route === "other" ? `/${locale}/${linkPath}` : `/${locale}`;
  const classPath = route === "other" ? `/${linkPath}` : `/${locale}`;

  const topbarStyles = `border-b-2 py-[2px] ${
    path === classPath
      ? "border-red text-red"
      : "border-transparent text-black transition-colors duration-200 hover:text-red"
  }`;

  const sidebarStyles = `border-b py-3 px-4 transition-all duration-200 hover:px-8 ${
    path === classPath ? "text-red" : "text-black"
  }`;

  const selectedStyles = variant === "tp" ? topbarStyles : sidebarStyles;

  return (
    <Link href={href} {...props} className={selectedStyles}>
      {t(linkPath)}
    </Link>
  );
};

export default NavbarLink;
