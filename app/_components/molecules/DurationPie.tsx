"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import LoadingInfo from "@/app/_components/atoms/LoadingInfo";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { DurationPieType } from "@/types/modals";

export const DurationPie = () => {
  const t = useTranslations("adminPage.homePage");

  const [pieChart, setPieChart] = useState<DurationPieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch("/api/admin/classes/duration");
        const data = await res.json();
        if (data.error) {
          setIsError(true);
        }
        setPieChart(data.success);
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
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie
            data={pieChart}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {pieChart?.map((entries) => (
              <Cell
                fill={entries.color}
                stroke={entries.color}
                key={entries.duration}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
