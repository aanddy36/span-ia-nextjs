"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoadingInfo from "@/app/_components/atoms/LoadingInfo";
import { useTranslations } from "next-intl";
import { TimeSeriesType } from "@/types/modals";

export const TimeSeries = () => {
  const t = useTranslations("adminPage.homePage");

  const [timeSeries, setTimeSeries] = useState<TimeSeriesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch("/api/admin/classes/timeSeries");
        const data = await res.json();
        if (data.error) {
          setIsError(true);
        }
        setTimeSeries(data.success);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isError) {
    return (
      <div className=" h-full grid place-content-center italic opacity-75">
        {t("errorFetchingStats")}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className=" h-full grid place-content-center">
        <LoadingInfo />
      </div>
    );
  }

  return (
    <div className="grow">
      <ResponsiveContainer width="100%">
        <AreaChart data={timeSeries}>
          <XAxis dataKey="label" />
          <YAxis unit="$" />
          <CartesianGrid />
          <Tooltip />
          <Area
            dataKey="sales"
            type="monotone"
            stroke="#4f46e5"
            fill="#c7d2fe"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
