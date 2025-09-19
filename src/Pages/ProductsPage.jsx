import React, { useState } from "react";
import Products from "./Products";
import ForMobile from "./ForMobile";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    brand: [],
    color: [],
    prices: [0, 1000],
    topDeals: false,
  });

  // For filtering the products by name
  const [hotDeal, setHotDeal] = useState("");

  // For filtering the products by Short
  const [sortBy, setSortBy] = useState("name-asc");

  // For filtering the products by count
  const [showCount, setShowCount] = useState(12);

  // To set the products on the grid view toggle
  const [view, setView] = useState("grid");

  return (
    <section className="w-full flex flex-col p-5">
      <div className="w-full flex justify-between">
        {/* Sidebar / Filters */}
        <div className="w-[20%]">
          <ForMobile
            filters={filters}
            setFilters={setFilters}
            hotDeal={hotDeal}
            setHotDeal={setHotDeal}
          />
        </div>

        {/* Products */}
        <div className="w-[78%]">
          <Products
            filters={filters}
            hotDeal={hotDeal}
            sortBy={sortBy}
            setSortBy={setSortBy}
            showCount={showCount}
            setShowCount={setShowCount}
            view={view}
            setView={setView}
          />
        </div>
      </div>
    </section>
  );
}
