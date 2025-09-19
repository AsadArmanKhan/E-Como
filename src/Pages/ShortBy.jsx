import React from "react";
import { Grid, List } from "lucide-react";

export default function ShortBy({
  totalItems,
  sortBy,
  setSortBy,
  showCount,
  setShowCount,
  view,
  setView,
}) {
  return (
    <div className="flex flex-col gap-3 p-3 mb-5 mt-5 bg-gray-50 rounded-md shadow-sm sm:flex-row sm:items-center sm:justify-between">
      {/* Left Side */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
        <span className="text-sm font-medium text-gray-700">
          {totalItems} Items
        </span>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border w-full sm:w-40 border-gray-200 rounded-md text-sm px-2 py-1 bg-white"
          >
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="price-asc">Price (Low → High)</option>
            <option value="price-desc">Price (High → Low)</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Best Rating</option>
          </select>
        </div>

        {/* Show Count */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Show</span>
          <select
            value={showCount}
            onChange={(e) => setShowCount(Number(e.target.value))}
            className="border w-full sm:w-20 border-gray-200 rounded-md text-sm px-2 py-1 bg-white"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      {/* Right Side (View Toggle) */}
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <button
          className={`p-2 rounded-md ${
            view === "grid" ? "text-sky-500" : "text-gray-400"
          }`}
          onClick={() => setView("grid")}
        >
          <Grid size={18} />
        </button>
        <button
          className={`p-2 rounded-md ${
            view === "list" ? "text-sky-500" : "text-gray-400"
          }`}
          onClick={() => setView("list")}
        >
          <List size={18} />
        </button>
      </div>
    </div>
  );
}
