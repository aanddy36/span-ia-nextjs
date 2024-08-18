import { fetchRequest } from "@/utils/fetchRequest";
import React, { FC } from "react";
import TableRow from "@/app/_components/molecules/TableRow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AdminClasses, Messages, SortBySlug, StatusSlug } from "@/types/modals";
import { getMessages } from "next-intl/server";
import ErrorFetchingClass from "../atoms/ErrorFetchingClass";

interface AdminClassesListProps {
  locale: string;
  searchParams: { status?: StatusSlug; sortBy?: SortBySlug };
}

const AdminFetchedClasses: FC<AdminClassesListProps> = async ({
  locale,
  searchParams,
}) => {
  const status = searchParams.status ? searchParams.status : "";
  const sortBy = searchParams.sortBy ? searchParams.sortBy : "";

  const {
    adminPage: { classesPage },
  } = (await getMessages({ locale })) as Messages;

  const { success, error } = await fetchRequest(
    `/api/admin/classes?status=${status}&sortBy=${sortBy}`
  );
  /* console.log(success); */

  if (error) {
    return <ErrorFetchingClass>{classesPage.errorFetching}</ErrorFetchingClass>;
  }

  const classes: AdminClasses[] = success.classes;
  const totalClasses: number = success.totalClasses;
  const thisPageClassesLength = classes.length;
  const { showing, to, of, results, previous, next } = classesPage;
  const page = 1;

  return (
    <>
      <tbody>
        {!thisPageClassesLength ? (
          <tr>
            <td className="bg-white py-6 text-center italic opacity-75">
              {classesPage.emptyClasses}
            </td>
          </tr>
        ) : (
          classes.map((cl) => {
            return <TableRow key={cl.id} {...cl} />;
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
                {showing} {(page - 1) * 10 + 1} {to} {thisPageClassesLength}{" "}
                {of} {totalClasses} {results}
              </span>
            </td>
            <td colSpan={2}>
              <div className=" flex items-center gap-[10px]">
                <button
                  className="rounded-lg transition-colors duration-200 hover:bg-red hover:text-white
                    flex items-center gap-[10px] text-[14px] py-[6px] px-3 disabled:opacity-50
                    disabled:cursor-not-allowed"
                  /* onClick={() => setPage(page - 1)} */
                  disabled={page === 1}
                >
                  <FaChevronLeft />
                  {previous}
                </button>
                <button
                  className="rounded-lg transition-colors duration-200 hover:bg-red hover:text-white
                    flex items-center gap-[10px] text-[14px] py-[6px] px-3 disabled:opacity-50
                    disabled:cursor-not-allowed"
                  /* onClick={() => setPage(page + 1)} */
                  disabled={thisPageClassesLength === totalClasses}
                >
                  {next}
                  <FaChevronRight />
                </button>
              </div>
            </td>
          </tr>
        )}
      </tfoot>
    </>
  );
};

export default AdminFetchedClasses;
