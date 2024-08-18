"use client";

import Link from "next/link";
import house from "@/public/home.svg";
import calendar from "@/public/calendar.svg";
import students from "@/public/students.svg";
import settings from "@/public/setting.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import usePaths from "@/hooks/usePaths";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const t = useTranslations("adminPage.sidebar");
  const { locale, path } = usePaths();

  return (
    <section className="grid grid-cols-[260px_auto] h-full">
      <ul className=" flex flex-col border-r pt-6 items-center">
        <Link
          href={`/${locale}/profile/admin`}
          className={`px-6 py-3 text-lg rounded-lg flex gap-4 transition-all duration-200 hover:pl-10 w-[85%] h-auto ${
            path === "/admin" ? "bg-notAvail" : ""
          } `}
        >
          <Image alt={t("altHome")} src={house}/>
          {t("home")}
        </Link>
        <Link
          href={`/${locale}/profile/admin/classes`}
          className={`px-6 py-3 text-lg rounded-lg flex gap-4 transition-all duration-200 hover:pl-10 w-[85%] ${
            path === "/classes" ? "bg-notAvail" : ""
          } `}
        >
          <Image alt={t("altClasses")} src={calendar} />
          {t("classes")}
        </Link>
        <Link
          href={`/${locale}/profile/admin/students`}
          className={`px-6 py-3 text-lg rounded-lg flex gap-4 transition-all duration-200 hover:pl-10 w-[85%] ${
            path === "/students" ? "bg-notAvail" : ""
          } `}
        >
          <Image alt={t("altStudents")} src={students} />
          {t("students")}
        </Link>
        <Link
          href={`/${locale}/profile/admin/settings`}
          className={`px-6 py-3 text-lg rounded-lg flex gap-4 transition-all duration-200 hover:pl-10 w-[85%] ${
            path === "/settings" ? "bg-notAvail" : ""
          } `}
        >
          <Image alt={t("altSettings")} src={settings} />
          {t("settings")}
        </Link>
      </ul>
      <div className="bg-notAvail px-12 py-10 h-full grow">
        {children}
      </div>
    </section>
  );
};

export default AdminLayout;
