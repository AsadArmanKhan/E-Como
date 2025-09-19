import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Prices from "./Prices";
import Color from "./Color";
import Brand from "./Brand";
import TopDeals from "./TopDeals";

export default function ForMobile({
  filters,
  setFilters,
  hotDeal,
  setHotDeal,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <section className="w-full mb-10 rounded shadow-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-start gap-2 text-[#33A0FF] font-medium"
        >
          <FaFilter /> Filter
        </button>
      </div>

      <div className="hidden md:block p-4">
        <FilterOptions
          filters={filters}
          setFilters={setFilters}
          hotDeal={hotDeal}
          setHotDeal={setHotDeal}
        />
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
              <FilterOptions
                filters={filters}
                setFilters={setFilters}
                hotDeal={hotDeal}
                setHotDeal={setHotDeal}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FilterOptions({ filters, setFilters, hotDeal, setHotDeal }) {
  const [expanded, setExpanded] = useState({
    topDeals: true,
    prices: true,
    color: true,
    brand: true,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelect = (type, value) => {
    setFilters((prev) => {
      if (Array.isArray(prev[type])) {
        return {
          ...prev,
          [type]: prev[type].includes(value)
            ? prev[type].filter((item) => item !== value)
            : [...prev[type], value],
        };
      } else {
        return { ...prev, [type]: value };
      }
    });
  };

  return (
    <div>
      <TopDeals
        hotDeal={hotDeal}
        onSelect={setHotDeal}
        expanded={expanded.topDeals}
        toggleExpand={() => toggleExpand("topDeals")}
      />

      <div className="mt-10">
        <Prices
          expanded={expanded.prices}
          toggleExpand={() => toggleExpand("prices")}
          selected={filters.prices}
          onSelect={(val) => handleSelect("prices", val)}
        />
      </div>

      <div className="mt-10">
        <Color
          expanded={expanded.color}
          toggleExpand={() => toggleExpand("color")}
          selected={filters.color}
          onSelect={(val) => handleSelect("color", val)}
        />
      </div>

      <div className="mt-10">
        <Brand
          expanded={expanded.brand}
          toggleExpand={() => toggleExpand("brand")}
          selected={filters.brand}
          onSelect={(val) => handleSelect("brand", val)}
        />
      </div>
    </div>
  );
}
