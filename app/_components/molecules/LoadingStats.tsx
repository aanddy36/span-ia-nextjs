import React from "react";
import LoadingInfo from "../atoms/LoadingInfo";

const LoadingStats = () => {
  return (
    <div className=" bg-white rounded-[10px] w-full p-4 flex justify-center items-center border">
      <LoadingInfo />
    </div>
  );
};

export default LoadingStats;
