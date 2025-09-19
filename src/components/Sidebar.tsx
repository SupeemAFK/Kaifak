"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "แดชบอร์ดสรุปผลโดยรวม", href: "/dashboard" },
  { label: "งานขายฝาก", href: "/kaifak" },
  { label: "งานจำนอง", href: "/jamnong" },
  { label: "ติดตามรายการของผู้ทำสัญญาทั้งหมด", href: "/follows" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center text-lg font-semibold">
            JD
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">ยินดีต้อนรับ!</p>
            <p className="text-xs text-gray-500 truncate">สมเกียรติ</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    "block rounded-md px-3 py-2 text-sm transition-colors " +
                    (isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900")
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 text-xs text-gray-400">
        <span>v1.0.0</span>
      </div>
    </aside>
  );
}


