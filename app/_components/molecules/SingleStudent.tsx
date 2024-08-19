import { AdminStudents } from "@/types/modals";
import { useTranslations } from "next-intl";
import Image from "next/image";
import noPhoto from "@/public/no-photo.jpg";

const SingleStudent = ({
  name,
  email,
  _count: { classes },
  image,
}: AdminStudents) => {
  const t = useTranslations("adminPage.studentsPage");
  const thePhoto = image ? image : noPhoto;
  return (
    <tr
      className="bg-white px-6 py-4 grid grid-cols-7 gap-[20px] text-[14px]
         opacity-80 border-b items-center"
    >
      <td className="col-span-1">
        <Image
          src={thePhoto}
          alt={t("altImage")}
          width={36}
          height={36}
          className="rounded-full border mx-auto"
        />
      </td>
      <td className="col-span-2">{name}</td>
      <td className="col-span-2">{email}</td>
      <td className="col-span-2">{classes}</td>
    </tr>
  );
};

export default SingleStudent;
