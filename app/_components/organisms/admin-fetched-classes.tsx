import { fetchRequest } from "@/utils/fetchRequest";
import React, { FC } from "react";
import TableRow from "@/app/_components/molecules/TableRow";
import { AdminClasses, Messages, SortBySlug, StatusSlug } from "@/types/modals";
import { getMessages } from "next-intl/server";
import ErrorFetchingClass from "../atoms/ErrorFetchingClass";
import { validPage } from "@/utils/formatPage";
import PrevNextBtns from "../molecules/PrevNextBtns";

interface AdminClassesListProps {
  locale: string;
  searchParams: { status?: StatusSlug; sortBy?: SortBySlug; page?: string };
}

const AdminFetchedClasses: FC<AdminClassesListProps> = async ({
  locale,
  searchParams,
}) => {
  const status = searchParams.status ? searchParams.status : "";
  const sortBy = searchParams.sortBy ? searchParams.sortBy : "";
  const queryPage = validPage(searchParams.page);

  const {
    adminPage: { classesPage },
  } = (await getMessages({ locale })) as Messages;

  const { success, error } = await fetchRequest(
    `/api/admin/classes?status=${status}&sortBy=${sortBy}&page=${queryPage}`
  );

  if (error) {
    return <ErrorFetchingClass>{classesPage.errorFetching}</ErrorFetchingClass>;
  }

  const classes: AdminClasses[] = success.classes;
  const totalClasses: number = success.totalClasses;
  const page: number = success.page;
  const thisPageClassesLength = classes.length;
  const lastNumber = (page - 1) * 10 + thisPageClassesLength;
  const { showing, to, of, results, emptyClasses } = classesPage;

  return (
    <>
      <tbody>
        {!thisPageClassesLength ? (
          <tr>
            <td className="bg-white py-6 text-center italic opacity-75">
              {emptyClasses}
            </td>
          </tr>
        ) : (
          classes.map((cl) => {
            return <TableRow key={cl.id} {...cl} locale={locale}/>;
          })
        )}
      </tbody>
      <tfoot className="">
        {!thisPageClassesLength ? (
          <tr>
            <td></td>
          </tr>
        ) : (
          <tr className=" px-6 py-3 flex justify-between text-[14px] items-center">
            <td colSpan={2}>
              <span>
                {showing} {(page - 1) * 10 + 1} {to} {lastNumber} {of}{" "}
                {totalClasses} {results}
              </span>
            </td>
            <td colSpan={2}>
              <PrevNextBtns
                page={page}
                totalClasses={totalClasses}
                lastNumber={lastNumber}
              />
            </td>
          </tr>
        )}
      </tfoot>
    </>
  );
};

export default AdminFetchedClasses;
