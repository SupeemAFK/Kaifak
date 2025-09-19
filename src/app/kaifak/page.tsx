"use client";

import * as React from "react";
import { FaRegFileAlt, FaRegMoneyBillAlt, FaRegListAlt, FaRegBookmark, FaRegClipboard } from "react-icons/fa";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
};

const items: MenuItem[] = [
  { label: "ใบคำนวณยอดขายฝาก", icon: <FaRegFileAlt /> },
  { label: "ใบรับเงิน", icon: <FaRegMoneyBillAlt /> },
  { label: "รายละเอียดการชำระดอกเบี้ย", icon: <FaRegListAlt /> },
  { label: "หนังสือยินยอมให้โอนเข้าบัญชี", icon: <FaRegBookmark /> },
  { label: "บันทึกการรับเงิน และการหักค่าสินไถ่ล่วงหน้า", icon: <FaRegClipboard /> },
  { label: "สัญญาเช่าทรัพย์", icon: <FaRegFileAlt /> },
  { label: "สัญญาซื้อขายทรัพย์", icon: <FaRegFileAlt /> },
  { label: "สัญญาอุ้มทรัพย์", icon: <FaRegFileAlt /> },
  { label: "หนังสือขยายขายฝาก", icon: <FaRegFileAlt /> },
  { label: "หนังสือแจ้งวันไถ่ถอนพร้อมสินไถ่", icon: <FaRegFileAlt /> },
];

export default function KaifakPage() {
  return (
    <div className="p-6 md:p-8 min-h-screen bg-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-black">งานขายฝาก</h1>

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
