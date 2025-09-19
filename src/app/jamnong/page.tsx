"use client";

import * as React from "react";
import { FaRegFileAlt, FaRegMoneyBillAlt, FaRegListAlt, FaRegBookmark, FaRegClipboard } from "react-icons/fa";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
};

const items: MenuItem[] = [
  { label: "ใบคำนวณยอดจำนอง", icon: <FaRegFileAlt /> },
  { label: "ใบรับเงิน", icon: <FaRegMoneyBillAlt /> },
  { label: "รายละเอียดการชำระดอกเบี้ย", icon: <FaRegListAlt /> },
  { label: "หนังสือยินยอมให้โอนเข้าบัญชี", icon: <FaRegBookmark /> },
  { label: "ตารางแสดงภาระหนี้ตามสัญญาเงินกู้ (นำส่งภธ. 40)", icon: <FaRegClipboard /> },
  { label: "สัญญาต่อท้าย", icon: <FaRegFileAlt /> },
  { label: "สัญญาจำนอง", icon: <FaRegFileAlt /> },
];

export default function JamnongPage() {
  return (
    <div className="p-6 md:p-8 min-h-screen bg-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-black">งานจำนอง</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <button
            key={item.label}
            className="cursor-pointer flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-colors"
          >
            <span className="text-xl text-indigo-600">{item.icon}</span>
            <span className="text-sm text-gray-800 text-left">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

  