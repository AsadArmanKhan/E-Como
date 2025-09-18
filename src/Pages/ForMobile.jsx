import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Prices from "./Prices";
import Color from "./Color";
import Brand from "./Brand";
import TopDeals from "./TopDeals";

export default function ForMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <section className="w-full mb-10 rounded shadow-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between ">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-start gap-2 text-[#33A0FF] font-medium"
        >
          <FaFilter /> Filter
        </button>
      </div>
      <div className="hidden md:block p-4">
        <FilterOptions />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative w-3/4 max-w-xs bg-white h-full shadow-lg flex flex-col">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={24} />
            </button>

            <div className="mt-12 overflow-y-auto px-5 pb-6">
              <FilterOptions />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FilterOptions() {
  return (
    <div>
      <TopDeals />
      <div className="mt-10">
        <Prices />
      </div>
      <div className="mt-10">
        <Color />
      </div>
      <div className="mt-10">
        <Brand />
      </div>
      <div className="cursor-pointer flex justify-center items-center p-4 bg-[#F6F7F8]">
        <h2 className="text-xl font-semibold">MORE</h2>
      </div>
    </div>
  );
}
