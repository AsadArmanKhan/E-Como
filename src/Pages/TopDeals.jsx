import React from "react";

export default function TopDeals() {
  return (
    <section className="bg-[#F6F7F8]">
      <h2 className="text-xl font-semibold mb-4 ml-4">HotDeals</h2>
      <div className="flex justify-between p-4 hover:bg-gray-100 rounded cursor-pointer">
        <span>Nike</span>
        <span className="text-gray-400">2</span>
      </div>
      <div className="flex justify-between p-4 text-[#33A0FF] font-medium hover:bg-blue-50 rounded cursor-pointer">
        <span>Airmax</span>
        <span>48</span>
      </div>
      <div className="flex justify-between p-4 hover:bg-gray-100 rounded cursor-pointer">
        <span>Adidas</span>
        <span className="text-gray-400">14</span>
      </div>
      <div className="flex justify-between p-4 hover:bg-gray-100 rounded cursor-pointer">
        <span>Vans</span>
        <span className="text-gray-400">15</span>
      </div>
      <div className="flex justify-between p-4 hover:bg-gray-100 rounded cursor-pointer">
        <span>All Stars</span>
        <span className="text-gray-400">23</span>
      </div>
      <div className="flex justify-between p-4 hover:bg-gray-100 rounded cursor-pointer">
        <span>Nike</span>
        <span className="text-gray-400">1</span>
      </div>
      <div className="flex justify-between p-4 hover:bg-gray-100 rounded cursor-pointer">
        <span>Adidas</span>
        <span className="text-gray-400">95</span>
      </div>
    </section>
  );
}
