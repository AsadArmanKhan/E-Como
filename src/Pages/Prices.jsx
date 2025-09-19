import React from "react";

export default function PriceRange({
  min = 0,
  max = 1000,
  step = 1,
  selected,
  onChange,
}) {
  return (
    <div className="w-full mb-10 rounded bg-[#F6F7F8]">
      <div className="text-xl mb-4 mt-2 font-semibold pl-4">Prices</div>

      <div className="flex p-4 justify-between">
        <div>Range:</div>
        <div className="flex gap-2">
          <div>${selected[0]}</div>
          <div>${selected[1]}</div>
        </div>
      </div>

      {/* Min Price Slider */}
      <div className="px-4 mb-6">
        <label className="text-sm font-medium">Min Price</label>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={selected[0]}
          onChange={(e) => onChange([+e.target.value, selected[1]])}
          className="w-full accent-blue-500"
        />
      </div>

      {/* Max Price Slider */}
      <div className="px-4 mb-6">
        <label className="text-sm font-medium">Max Price</label>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={selected[1]}
          onChange={(e) => onChange([selected[0], +e.target.value])}
          className="w-full accent-blue-500"
        />
      </div>
    </div>
  );
}
