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

  const [sortBy, setSortBy] = useState("name-asc");
  const [showCount, setShowCount] = useState(12);
  const [view, setView] = useState("grid");

  return (
    <section className="w-full flex flex-col p-5">
      <div className="w-full flex justify-between">
        {/* Sidebar / Filters */}
        <div className="w-[20%]">
          <ForMobile filters={filters} setFilters={setFilters} />
        </div>

        {/* Products */}
        <div className="w-[78%]">
          <Products
            filters={filters}
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
