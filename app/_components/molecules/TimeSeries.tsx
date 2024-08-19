"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const TimeSeries = () => {
  const timeSeries = [
    {
      label: "2024-01-04",
      sales: 12,
    },
    {
      label: "2024-01-21",
      sales: 48,
    },
    {
      label: "2024-01-22",
      sales: 18,
    },
    {
      label: "2024-01-26",
      sales: 42,
    },
    {
      label: "2024-01-27",
      sales: 36,
    },
    {
      label: "2024-01-28",
      sales: 18,
    },
    {
      label: "2024-01-29",
      sales: 84,
    },
    {
      label: "2024-02-03",
      sales: 14,
    },
    {
      label: "2024-02-05",
      sales: 42,
    },
    {
      label: "2024-02-06",
      sales: 14,
    },
    {
      label: "2024-02-16",
      sales: 12,
    },
    {
      label: "2024-02-18",
      sales: 12,
    },
    {
      label: "2024-02-21",
      sales: 12,
    },
    {
      label: "2024-02-23",
      sales: 24,
    },
    {
      label: "2024-07-01",
      sales: 12,
    },
  ];
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
