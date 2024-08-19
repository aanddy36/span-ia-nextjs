import Image from "next/image";
import pres from "@/public/presentations.svg";
import dollar from "@/public/money.svg";
import studentsPhoto from "@/public/students.svg";
import clock from "@/public/clock.svg";
import { getMessages } from "next-intl/server";
import { Messages } from "@/types/modals";
import { formatPrice } from "@/utils/formatPrice";
import { fetchRequest } from "@/utils/fetchRequest";

interface AdminStatsProps {
  locale: string;
}

const AdminStats = async ({ locale }: AdminStatsProps) => {
  const {
    adminPage: {
      homePage: {
        altClasses,
        altHours,
        altSales,
        altStudents,
        sales,
        classes,
        students,
        hours,
        errorFetchingStats,
      },
    },
  } = (await getMessages({ locale })) as Messages;

  const data = await fetchRequest("/api/admin/classes/summary");
  const summary = data?.success;

  if (data.error) {
    return (
      <div className=" bg-white rounded-[10px] w-full p-4 flex justify-center items-center border italic text-black/60">
        {errorFetchingStats}
      </div>
    );
  }

  return (
    <section className=" flex gap-[30px]">
      <div className=" bg-white rounded-[10px] w-full p-4 flex justify-start gap-[15px] items-center border">
        <span className=" w-16 h-16 rounded-full bg-[#E0F2FE] grid place-content-center">
          <Image src={pres} width={25} height={25} alt={altClasses} />
        </span>
        <div className="flex flex-col items-start">
          <span className="uppercase font-semibold text-[12px]">{classes}</span>
          <span className=" text-2xl font-medium">{summary?.nClasses}</span>
        </div>
      </div>
      <div className=" bg-white rounded-[10px] w-full p-4 flex justify-start gap-[15px] items-center border">
        <span className=" w-16 h-16 rounded-full bg-[#DCFCE7] grid place-content-center">
          <Image src={dollar} width={25} height={25} alt={altSales} />
        </span>
        <div className="flex flex-col items-start">
          <span className="uppercase font-semibold text-[12px]">{sales}</span>
          <span className=" text-2xl font-medium">
            {formatPrice(summary?.totalSales)}
          </span>
        </div>
      </div>
      <div className=" bg-white rounded-[10px] w-full p-4 flex justify-start gap-[15px] items-center border">
        <span className=" w-16 h-16 rounded-full bg-[#E0E7FF] grid place-content-center">
          <Image src={studentsPhoto} width={25} height={25} alt={altStudents} />
        </span>
        <div className="flex flex-col items-start">
          <span className="uppercase font-semibold text-[12px]">
            {students}
          </span>
          <span className=" text-2xl font-medium">{summary?.nStudents}</span>
        </div>
      </div>
      <div className=" bg-white rounded-[10px] w-full p-4 flex justify-start gap-[15px] items-center border">
        <span className=" w-16 h-16 rounded-full bg-[#FEF9C3] grid place-content-center">
          <Image src={clock} width={25} height={25} alt={altHours} />
        </span>
        <div className="flex flex-col items-start">
          <span className="uppercase font-semibold text-[12px]">{hours}</span>
          <span className=" text-2xl font-medium">{summary?.totalHours}</span>
        </div>
      </div>
    </section>
  );
};

export default AdminStats;
