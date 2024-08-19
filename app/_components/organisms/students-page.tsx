"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import StudentsList from "./students-list";
import { fetchRequest } from "@/utils/fetchRequest";
import { AdminStudents } from "@/types/modals";

const StudentsPage = () => {
  const t = useTranslations("adminPage.studentsPage");

  const [searchBar, setSearchBar] = useState("");
  const [students, setStudents] = useState<AdminStudents[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/students?name=${searchBar}`);
        const data = await res.json();
        if (data.error) {
          setIsError(true);
        }
        setStudents(data.success);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchBar]);

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className=" text-[32px] font-medium">{t("title")}</h1>
        <form
          className="relative border border-neutral-300 rounded-lg w-[400px] h-[36px] flex 
            justify-between items-center px-3"
        >
          <input
            type="text"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            placeholder={t("placeholder")}
            className=" absolute inset-0 focus:outline-none bg-transparent text-[14px] py-1 px-10
            placeholder:italic placeholder:font-light focus:ring-2 focus:ring-red rounded-lg"
          />
          <FaMagnifyingGlass className="opacity-40 z-4" />
          {searchBar && (
            <FaXmark
              className="opacity-40 transition-opacity duration-200 hover:opacity-100 text-xl cursor-pointer absolute right-2"
              onClick={() => setSearchBar("")}
            />
          )}
        </form>
      </section>
      <table className="mt-[31px] w-full rounded-lg border">
        <thead className="border-b">
          <tr className=" px-6 py-4 grid grid-cols-7 gap-[20px]">
            <th className=" uppercase text-[14px] font-semibold opacity-80 text-left col-span-1"></th>
            <th className=" uppercase text-[14px] font-semibold opacity-80 text-left col-span-2">
              {t("name")}
            </th>
            <th className=" uppercase text-[14px] font-semibold opacity-80 text-left col-span-2">
              {t("email")}
            </th>
            <th className=" uppercase text-[14px] font-semibold opacity-80 text-left col-span-2">
              {t("classes")}
            </th>
          </tr>
        </thead>
        <tbody>
          <StudentsList
            students={students}
            isLoading={isLoading}
            isError={isError}
          />
        </tbody>
        <tfoot className=" px-6 py-3 flex justify-between text-[14px] items-center"></tfoot>
      </table>
    </>
  );
};

export default StudentsPage;
