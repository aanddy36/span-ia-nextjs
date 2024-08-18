import React, { FC, Suspense } from "react";
import { getMessages } from "next-intl/server";
import { Messages, SortBySlug, StatusSlug } from "@/types/modals";
import AdminFetchedClasses from "./admin-fetched-classes";
import LoadingInfo from "../atoms/LoadingInfo";

interface AdminClassesListProps {
  locale: string;
  searchParams: { status?: StatusSlug; sortBy?: SortBySlug; page?: string };
}

const AdminClassesList: FC<AdminClassesListProps> = async ({
  locale,
  searchParams,
}) => {
  const {
    adminPage: { classesPage },
  } = (await getMessages({ locale })) as Messages;

  return (
    <table className="mt-[31px] w-full rounded-lg border">
      <thead className="border-b">
        <tr className=" px-6 py-4 grid grid-cols-5 gap-[20px]">
          <th className=" uppercase text-[14px] font-semibold opacity-80 text-left">
            {classesPage.idHeader}
          </th>
          <th className=" uppercase text-[14px] font-semibold opacity-80 text-left">
            {classesPage.studentHeader}
          </th>
          <th className=" uppercase text-[14px] font-semibold opacity-80 text-left">
            {classesPage.dateHeader}
          </th>
          <th className=" uppercase text-[14px] font-semibold opacity-80 text-left">
            {classesPage.statusHeader}
          </th>
          <th className=" uppercase text-[14px] font-semibold opacity-80 text-left">
            {classesPage.amountHeader}
          </th>
        </tr>
      </thead>

      <Suspense
        key={`status=${searchParams.status}&sortBy=${searchParams.sortBy}`}
        fallback={
          <tbody className="bg-white text-center italic opacity-75">
            <td className=" py-6">
              <LoadingInfo />
            </td>
          </tbody>
        }
      >
        <AdminFetchedClasses locale={locale} searchParams={searchParams} />
      </Suspense>
    </table>
  );
};

export default AdminClassesList;
