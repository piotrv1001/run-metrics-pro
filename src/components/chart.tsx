"use client";

import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Mon",
    uv: 30,
  },
  {
    name: "Tue",
    uv: 20,
  },
  {
    name: "Wed",
    uv: 15,
  },
  {
    name: "Thu",
    uv: 22,
  },
  {
    name: "Fri",
    uv: 17,
  },
  {
    name: "Sat",
    uv: 15,
  },
  {
    name: "Sun",
    uv: 21,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={465}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 14 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}km`}
          tick={{ fontSize: 14 }}
        />
        <Bar dataKey="uv" fill="hsl(var(--primary))" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
