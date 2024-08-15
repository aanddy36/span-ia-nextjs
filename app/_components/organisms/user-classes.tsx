import { Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";
import { FC } from "react";
import ClassesList from "./classes-list";

interface UserClassesProps {
  locale: string;
}

const UserClasses: FC<UserClassesProps> = async ({ locale }) => {
  const {
    userPage: { classesList },
  } = (await getMessages({ locale })) as Messages;

  return (
    <section className="grow bg-white rounded-lg py-6 px-3 laptop:px-6 flex flex-col min-h-full gap-0">
      <div className=" text-2xl border-b pb-2">{classesList.title}</div>
      <ClassesList />
    </section>
  );
};

export default UserClasses;
