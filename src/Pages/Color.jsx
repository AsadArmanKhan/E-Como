import React from "react";
import { colors } from "../data/color";

export default function Color({ expanded, toggleExpand, selected, onSelect }) {
  return (
    <section className="w-full mb-10 rounded bg-[#F6F7F8]">
      <div className="pl-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleExpand}
        >
          <h2 className="text-xl mb-4 font-semibold">Color</h2>
          <span>{expanded ? "-" : "+"}</span>
        </div>

        {expanded && (
          <div className="flex flex-wrap gap-3">
            {Object.entries(colors).map(([name, hex]) => (
              <div
                key={name}
                onClick={() => onSelect(hex)}
                className={`w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer ${
                  selected.includes(hex) ? "border-2 border-[#006CFF]" : ""
                }`}
              >
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: hex }}
                  title={name}
                ></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
