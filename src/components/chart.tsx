"use client";

import { useIsMobile } from "@/lib/hooks";
import { ChartData } from "@/lib/types";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

type ChartProps = {
  chartData: ChartData[];
}

export default function Chart({ chartData }: ChartProps) {
  const isMobile = useIsMobile();
  return (
    <ResponsiveContainer width="100%" height={446}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="label"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 14 }}
        />
        {!isMobile && (
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}km`}
            tick={{ fontSize: 14 }}
          />
        )}
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[5, 5, 0, 0]}>
          {isMobile && <LabelList dataKey="value" position="top" />}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
