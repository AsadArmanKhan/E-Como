import React, { useState } from "react";
import ForMobile from "./ForMobile";
import Products from "./Products";

export default function ShopPage() {
  const [filters, setFilters] = useState({
    brand: [],
    color: [],
    prices: [0, 1000], // default range
    topDeals: false,
  });

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <div className="md:w-1/4">
        <ForMobile filters={filters} setFilters={setFilters} />
      </div>

      {/* Products */}
      <div className="md:w-3/4">
        <Products filters={filters} />
      </div>
    </div>
  );
}
