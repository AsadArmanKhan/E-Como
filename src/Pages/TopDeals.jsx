import React from "react";
import { topDealsData } from "../data/topDeals";

export default function TopDeals({ selected, onSelect }) {
  return (
    <section className="bg-[#F6F7F8]">
      <h2 className="text-xl font-semibold mb-4 ml-4">Hot Deals</h2>
      {topDealsData.map((product, i) => (
        <div
          key={i}
          onClick={() => onSelect(product.name)}
          className={`flex justify-between p-4 rounded cursor-pointer ${
            selected === product.name
              ? "text-[#33A0FF] font-medium bg-blue-50"
              : "hover:bg-gray-100"
          }`}
        >
          <span>{product.name}</span>
          <span className={selected === product.name ? "" : "text-gray-400"}>
            {product.count}
          </span>
        </div>
      ))}
    </section>
  );
}
