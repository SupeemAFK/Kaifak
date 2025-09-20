"use client";

import { useState, useEffect } from "react";

type ContractType = "kaifak" | "jamnong";

type FollowItem = {
  id: string;
  type: ContractType;
  name: string; // ชื่อ
  deedNo: string; // เลขโฉนดที่ดิน
  amphoe: string; // อำเภอ
  tambon: string; // ตำบล
  province: string; // จังหวัด
  area: string; // เนื้อที่ XX_XX_XX
  contractDate: string; // วันที่ทำสัญญา
  redeemDate: string; // วันที่ไถ่ถอน
  status: string; // สถานะ ...
};

const MOCK_ITEMS: FollowItem[] = [
  {
    id: "1",
    type: "kaifak",
    name: "นายสมชาย ใจดี",
    deedNo: "12345",
    amphoe: "เมือง",
    tambon: "ในเมือง",
    province: "เชียงใหม่",
    area: "0_2_35",
    contractDate: "01/06/68",
    redeemDate: "01/06/69",
    status: "สถานะ : ชำระดอกเบี้ยงวดที่ 1",
  },
  {
    id: "2",
    type: "kaifak",
    name: "นางสาวกมลทิพย์ แสงทอง",
    deedNo: "67890",
    amphoe: "แม่ริม",
    tambon: "สันโป่ง",
    province: "เชียงใหม่",
    area: "1_0_0",
    contractDate: "15/05/68",
    redeemDate: "15/05/69",
    status: "สถานะ : ค้างชำระงวดที่ 4",
  },
  {
    id: "3",
    type: "jamnong",
    name: "นายประสิทธิ์ มีสุข",
    deedNo: "24680",
    amphoe: "เมือง",
    tambon: "สุเทพ",
    province: "เชียงใหม่",
    area: "2_1_10",
    contractDate: "10/04/67",
    redeemDate: "10/04/70",
    status: "สถานะ : ต่อสัญญาครั้งที่ 2",
  },
];

export default function FollowsPage() {
  const [items, setItems] = useState<FollowItem[]>(MOCK_ITEMS);
  const [filter, setFilter] = useState<ContractType | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let filteredItems = MOCK_ITEMS;
    
    // Filter by contract type
    if (filter !== "all") {
      filteredItems = filteredItems.filter((i) => i.type === filter);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filteredItems = filteredItems.filter((item) => 
        item.name.toLowerCase().includes(query) ||
        item.deedNo.toLowerCase().includes(query) ||
        item.amphoe.toLowerCase().includes(query) ||
        item.tambon.toLowerCase().includes(query) ||
        item.province.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
      );
    }
    
    setItems(filteredItems);
  }, [filter, searchQuery]);

  return (
    <div className="p-6 md:p-8 min-h-screen bg-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-black">รายการของผู้ทำสัญญาทั้งหมด</h1>

      {/* Search Input */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="ค้นหาตามชื่อ, เลขโฉนด, ที่อยู่, หรือสถานะ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 text-black text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600">
            พบ {items.length} รายการที่ตรงกับการค้นหา "{searchQuery}"
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-md border text-sm ${
            filter === "all"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
          }`}
        >
          ทั้งหมด
        </button>
        <button
          onClick={() => setFilter("kaifak")}
          className={`px-4 py-2 rounded-md border text-sm ${
            filter === "kaifak"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
          }`}
        >
          งานขายฝาก
        </button>
        <button
          onClick={() => setFilter("jamnong")}
          className={`px-4 py-2 rounded-md border text-sm ${
            filter === "jamnong"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
          }`}
        >
          งานจำนอง
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchQuery ? "ไม่พบรายการที่ตรงกับการค้นหา" : "ไม่มีรายการ"}
          </h3>
          <p className="text-gray-500">
            {searchQuery 
              ? `ลองค้นหาด้วยคำอื่น หรือลบคำค้นหาปัจจุบัน`
              : "ยังไม่มีข้อมูลในระบบ"
            }
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700 border border-indigo-300 rounded-md hover:bg-indigo-50"
            >
              ล้างการค้นหา
            </button>
          )}
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex flex-col gap-1 text-sm text-gray-800">
                <div>
                  <span className="text-gray-500">ชื่อ</span> {item.name}
                </div>
                <div>
                  <span className="text-gray-500">เลขโฉนดที่ดิน</span> {item.deedNo}
                </div>
                <div className="flex flex-wrap gap-x-6">
                  <span><span className="text-gray-500">อำเภอ</span> {item.amphoe}</span>
                  <span><span className="text-gray-500">ตำบล</span> {item.tambon}</span>
                  <span><span className="text-gray-500">จังหวัด</span> {item.province}</span>
                </div>
                <div>
                  <span className="text-gray-500">เนื้อที่</span> {item.area}
                </div>
                <div className="flex flex-wrap gap-x-6">
                  <span><span className="text-gray-500">วันที่ทำสัญญา</span> {item.contractDate}</span>
                  <span><span className="text-gray-500">วันที่ไถ่ถอน</span> {item.redeemDate}</span>
                </div>
                <div className="mt-2 font-medium text-indigo-700">{item.status}</div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                ประเภท: {item.type === "kaifak" ? "งานขายฝาก" : "งานจำนอง"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
