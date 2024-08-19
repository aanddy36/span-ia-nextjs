"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export const DurationPie = () => {
  const pieChart = [
    {
      duration: "60 min",
      value: 9,
      color: "#84cc16",
    },
    {
      duration: "120 min",
      value: 7,
      color: "#ef4444",
    },
    {
      duration: "90 min",
      value: 6,
      color: "#f97316",
    },
  ];
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
