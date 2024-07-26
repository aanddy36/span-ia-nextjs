import { ReviewType } from "@/types";
import React, { FC } from "react";
import Image from "next/image";
import maleUser from "@/public/maleUser.svg";
import femaleUser from "@/public/femaleUser.svg";

interface ExtraProps {
  message: string;
}

const SingleTestimony: FC<ReviewType & ExtraProps> = ({
  sex,
  name,
  classes,
  review,
  message,
}) => {
  return (
    <div className="flex flex-col gap-7 items-center">
      <div className="w-full flex justify-between items-start">
        <div className=" flex gap-5 items-center">
          <Image
            src={sex === "men" ? maleUser : femaleUser}
            alt="No photo male user"
          />
          <div>
            <h3 className=" font-semibold text-[16px]">{name}</h3>
            <span className=" font-light text-[13px]">
              {classes} {message}
            </span>
          </div>
        </div>
        <span className=" text-red text-[128px] font-special leading-none h-[12px]">
          "
        </span>
      </div>
      <span className=" text-[14px] font-light max-w-[336px] text-justify">
        {review}
      </span>
    </div>
  );
};

export default SingleTestimony;
