import { useState } from "react";
import { Grid, List } from "lucide-react"; // icons

export default function ProductToolbar() {
  const [view, setView] = useState("grid");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-3 rounded-md shadow-sm gap-3">
      {/* Left Side */}
      <div className="flex items-center justify-between sm:justify-start gap-4">
        <span className="text-sm font-medium text-gray-700">13 Items</span>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort By</span>
          <select className="border rounded-md text-sm px-2 py-1 bg-white">
            <option>Name</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Show</span>
          <select className="border rounded-md text-sm px-2 py-1 bg-white">
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
