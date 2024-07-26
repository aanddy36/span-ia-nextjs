import { ServiceType } from "@/types";
import React, { FC } from "react";
import Image from "next/image";

const SingleService: FC<ServiceType> = ({ src, alt, title, description }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image src={src} alt={alt} />
      <h3 className=" font-semibold text-[24px]">{title}</h3>
      <span className=" text-[14px] font-light max-w-[259px] text-center">
        {description}
      </span>
    </div>
  );
};

export default SingleService;
