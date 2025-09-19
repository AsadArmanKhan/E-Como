import { useState } from "react";
import { Grid, List } from "lucide-react";

export default function ShortBy() {
  const [view, setView] = useState("grid");

  return (
    <div className="flex flex-col gap-3 p-3 mb-5 mt-5 bg-gray-50 rounded-md shadow-sm sm:flex-row sm:items-center sm:justify-between">
      
      {/* Left Side */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
        
        {/* Item Count */}
        <span className="text-sm font-medium text-gray-700">13 Items</span>

        {/* Sort By */}
        <div className="flex items-center justify-between sm:justify-start gap-2">
          <span className="text-sm text-gray-500">Sort By</span>
          <select className="border w-full sm:w-32 border-gray-200 rounded-md text-sm px-2 py-1 bg-white">
            <option>Name</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>

        {/* Show Count */}
        <div className="flex items-center justify-between sm:justify-start gap-2">
          <span className="text-sm text-gray-500">Show</span>
          <select className="border w-full sm:w-20 border-gray-200 rounded-md text-sm px-2 py-1 bg-white">
            <option>12</option>
            <option>24</option>
            <option>36</option>
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
