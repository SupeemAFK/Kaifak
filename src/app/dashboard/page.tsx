"use client";

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashboardPage() {
  // ข้อมูลทางการเงินตัวอย่างสำหรับ 6 เดือนที่ผ่านมา
  const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."];
  const incomeData = [1200000, 1500000, 1800000, 2200000, 2500000, 2800000];
  const expenseData = [800000, 950000, 1100000, 1300000, 1500000, 1700000];
  const profitData = incomeData.map((income, index) => income - expenseData[index]);

  const barXAxis = [
    {
      id: "months",
      data: months,
      scaleType: "band" as const,
    },
  ];

  const barSeries = [
    { 
      id: "income", 
      label: "รายได้", 
      data: incomeData,
      color: "#10b981" // Green for income
    },
    { 
      id: "expenses", 
      label: "ค่าใช้จ่าย", 
      data: expenseData,
      color: "#ef4444" // Red for expenses
    },
    { 
      id: "profit", 
      label: "กำไร", 
      data: profitData,
      color: "#3b82f6" // Blue for profit
    },
  ];

  // คำนวณยอดรวมสำหรับแผนภูมิวงกลม
  const totalIncome = incomeData.reduce((sum, val) => sum + val, 0);
  const totalExpenses = expenseData.reduce((sum, val) => sum + val, 0);
  const totalProfit = profitData.reduce((sum, val) => sum + val, 0);

  const pieSeries = [
    {
      data: [
        { id: 0, value: totalIncome, label: "รายได้รวม", color: "#10b981" },
        { id: 1, value: totalExpenses, label: "ค่าใช้จ่ายรวม", color: "#ef4444" },
        { id: 2, value: totalProfit, label: "กำไรรวม", color: "#3b82f6" },
      ],
      innerRadius: 30,
      paddingAngle: 2,
      cornerRadius: 4,
    },
  ];

  // แผนภูมิเส้นสำหรับแนวโน้มกำไร
  const lineXAxis = [{ data: months }];
  const lineSeries = [
    { 
      id: "profitTrend", 
      label: "แนวโน้มกำไร", 
      data: profitData,
      color: "#3b82f6"
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold">แดชบอร์ด</h1>
          <p className="text-gray-500 mt-1">ภาพรวมของตัวชี้วัดสำคัญ</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <section className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">รายได้ vs ค่าใช้จ่าย vs กำไร</h2>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px]">
                <BarChart 
                  xAxis={barXAxis} 
                  series={barSeries} 
                  height={400}
                  yAxis={[{
                    scaleType: 'linear',
                    valueFormatter: (value) => `${value.toLocaleString()} บาท`
                  }]}
                />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">ภาพรวมทางการเงิน</h2>
            <PieChart 
              series={pieSeries} 
              height={400}
            />
          </section>

          <section className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">แนวโน้มกำไร</h2>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px]">
                <LineChart 
                  xAxis={lineXAxis} 
                  series={lineSeries} 
                  height={400}
                  yAxis={[{
                    scaleType: 'linear',
                    valueFormatter: (value) => `${value.toLocaleString()} บาท`
                  }]}
                />
              </div>
            </div>
          </section>
        </div>

        {/* การ์ดสรุป */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">รายได้รวม</p>
                <p className="text-2xl font-bold text-green-600">{totalIncome.toLocaleString()} บาท</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">ค่าใช้จ่ายรวม</p>
                <p className="text-2xl font-bold text-red-600">{totalExpenses.toLocaleString()} บาท</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">กำไรรวม</p>
                <p className="text-2xl font-bold text-blue-600">{totalProfit.toLocaleString()} บาท</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


