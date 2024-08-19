import React, { FC } from "react";
import LoadingInfo from "@/app/_components/atoms/LoadingInfo";
import { useTranslations } from "next-intl";
import { AdminStudents } from "@/types/modals";
import SingleStudent from "../molecules/SingleStudent";

interface StudentsListProps {
  isLoading: boolean;
  students: AdminStudents[];
  isError: boolean;
}

const StudentsList: FC<StudentsListProps> = ({
  isLoading,
  students,
  isError,
}) => {
  const t = useTranslations("adminPage.studentsPage");
  if (isLoading) {
    return (
      <tr>
        <td className="bg-white py-6 text-center italic opacity-75">
          <LoadingInfo />
        </td>
      </tr>
    );
  }

  if (isError) {
    return (
      <tr>
        <td className="bg-white py-6 text-center italic opacity-75">
          {t("errorFetching")}
        </td>
      </tr>
    );
  }

  if (!students.length) {
    return (
      <tr>
        <td className="bg-white py-6 text-center italic opacity-75">
          {t("emptyStudents")}
        </td>
      </tr>
    );
  }

  return (
    <>
      {students?.map((student) => (
        <SingleStudent key={student.id} {...student} />
      ))}
    </>
  );
};

export default StudentsList;
