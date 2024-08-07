import { ClassesType, Messages } from "@/types/modals";
import { getMessages } from "next-intl/server";
import { FC } from "react";

interface UserClassesProps {
  locale: string;
  classes: ClassesType[];
}

const UserClasses: FC<UserClassesProps> = async ({ locale, classes }) => {
  const {
    userPage: { classesList },
  } = (await getMessages({ locale })) as Messages;

  return (
    <section className="grow bg-white rounded-lg py-6 px-3 laptop:px-6 flex flex-col">
      <div className=" text-2xl border-b pb-2">{classesList.title}</div>
      <ul className=" grow overflow-auto pt-2 max-h-[290px]">
        {!classes.length ? (
          <div className=" py-6 italic opacity-50 h-full text-center text-xl">
            {classesList.empty}
          </div>
        ) : (
          <>
            {classes.map((item) => {
              return {
                /* <MiniClass key={item.id} {...item} /> */
              };
            })}
          </>
        )}
      </ul>
    </section>
  );
};

export default UserClasses;
