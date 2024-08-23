import React from "react";

const ScheduleColumnHeader = () => {
  const halfHourArray = [] as string[];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute of ["00", "30"]) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute}`;
      halfHourArray.push(timeString);
    }
  }

  return (
    <div className="flex flex-col relative bottom-[15px]">
      {halfHourArray.map((data) => {
        return (
          <div
            key={data}
            className="text-xs font-medium grid place-content-center w-full h-[30px] border-r"
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleColumnHeader;
