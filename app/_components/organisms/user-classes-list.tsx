"use client";
import React, { useEffect, useState } from "react";
import { SectionBtn } from "@/app/_components/molecules/StaticSection";
import LoadingInfo from "@/app/_components/atoms/LoadingInfo";
import usePaths from "@/hooks/usePaths";
import { useTranslations } from "next-intl";
import { MiniClasses } from "@/types/modals";
import MiniClass from "@/app/_components/molecules/MiniClass";
import { useUser } from "@/contexts/UserContext";

const UserClassesList = () => {
  const { locale } = usePaths();
  const t = useTranslations("userPage.classesList");
  const [classes, setClasses] = useState<MiniClasses[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/user/classes/${user?.id}`);
        const ans = await res.json();

        if (ans.error) {
          setError(true);
        } else {
          setClasses(ans.success);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user?.id]);

  if (error) {
    return (
      <span className=" pt-6 italic opacity-50 text-center text-lg">
        {t("error")}
      </span>
    );
  }

  if (isLoading) {
    return (
      <div className="h-full grid place-content-center">
        <LoadingInfo />
      </div>
    );
  }

  return (
    <ul className=" grow overflow-auto flex flex-col items-center justify-start max-h-[400px]">
      {!classes.length ? (
        <>
          <span className=" pt-6 italic opacity-50 text-center text-lg">
            {t("empty")}
          </span>
          <SectionBtn path={`/${locale}/reserve`}>{t("startNow")}</SectionBtn>
        </>
      ) : (
        <>
          {classes.map((item) => {
            return <MiniClass key={item.id} {...item} />;
          })}
        </>
      )}
    </ul>
  );
};

export default UserClassesList;
