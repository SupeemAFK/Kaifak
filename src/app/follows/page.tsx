"use client";

import * as React from "react";

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
  const [filter, setFilter] = React.useState<ContractType | "all">("all");

  const filteredItems = React.useMemo(() => {
    if (filter === "all") return MOCK_ITEMS;
    return MOCK_ITEMS.filter((i) => i.type === filter);
  }, [filter]);

  return (
    <div className="p-6 md:p-8 min-h-screen bg-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-black">ติดตามสถานะ (Follows)</h1>

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

      <ul className="space-y-4">
        {filteredItems.map((item) => (
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
    </div>
  );
}
