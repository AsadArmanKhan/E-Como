import React from "react";

export default function Brand({ expanded, toggleExpand, selected, onSelect }) {
  const brands = [
    "Nike",
    "Adidas",
    "Siemens",
    "Reebok",
    "Lacoste",
    "Puma",
    "Vans",
    // "Airmax",
  ];

  return (
    <section className="mb-10">
      <div className="bg-[#F6F7F8] rounded">
        {/* Title */}
        <div
          className="pl-4 text-xl font-semibold mb-4 cursor-pointer flex justify-between items-center"
          onClick={toggleExpand}
        >
          <span>Brand</span>
          <span>{expanded ? "−" : "+"}</span>
        </div>

        {expanded &&
          brands.map((brand) => {
            const isActive = selected.includes(brand);

            return (
              <div
                key={brand}
                className={`flex justify-between p-4 cursor-pointer ${
                  isActive ? "text-[#33A0FF]" : "text-gray-600"
                }`}
                onClick={() => onSelect(brand)}
              >
                <div>{brand}</div>
                <div className={isActive ? "text-[#33A0FF]" : "text-gray-300"}>
                  99
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
