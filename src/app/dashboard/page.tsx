"use client";

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashboardPage() {
  const barXAxis = [
    {
      id: "months",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      scaleType: "band" as const,
    },
  ];

  const barSeries = [
    { id: "revenue", label: "Revenue", data: [12, 18, 15, 22, 28, 30] },
    { id: "expenses", label: "Expenses", data: [8, 11, 9, 14, 18, 20] },
  ];

  const lineXAxis = [{ data: [1, 2, 3, 4, 5, 6] }];
  const lineSeries = [
    { id: "activeUsers", label: "Active Users", data: [120, 140, 135, 160, 190, 230] },
  ];

  const pieSeries = [
    {
      data: [
        { id: 0, value: 44, label: "Desktop" },
        { id: 1, value: 36, label: "Mobile" },
        { id: 2, value: 20, label: "Tablet" },
      ],
      innerRadius: 30,
      paddingAngle: 2,
      cornerRadius: 4,
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold">Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of key metrics</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <section className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Revenue vs Expenses</h2>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[480px]">
                <BarChart xAxis={barXAxis} series={barSeries} height={320} />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Traffic by Device</h2>
            <PieChart series={pieSeries} height={320} />
          </section>

          <section className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Active Users</h2>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[480px]">
                <LineChart xAxis={lineXAxis} series={lineSeries} height={320} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


