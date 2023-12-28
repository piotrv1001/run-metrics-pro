"use client";

import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Mon",
    uv: 4000,
  },
  {
    name: "Tue",
    uv: 3000,
  },
  {
    name: "Wed",
    uv: 2000,
  },
  {
    name: "Thu",
    uv: 2780,
  },
  {
    name: "Fri",
    uv: 1890,
  },
  {
    name: "Sat",
    uv: 2390,
  },
  {
    name: "Sun",
    uv: 3490,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={318}>
      <BarChart data={data}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Bar dataKey="uv" fill="hsl(var(--primary))" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
