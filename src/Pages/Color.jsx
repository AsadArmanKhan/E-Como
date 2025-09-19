import React, { useState } from "react";
import { colors } from "../data/color";

export default function Color() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (colorKey) => {
    setSelectedColor((prev) => (prev === colorKey ? null : colorKey));
  };

  return (
    <section className="w-full mb-10 rounded bg-[#F6F7F8]">
      <div className="pl-4">
        <h2 className="text-xl mb-4 font-semibold">Color</h2>

        <div className="flex justify-between items-center gap-3">
          {Object.entries(colors).map(([name, hex]) => (
            <div
              key={name}
              onClick={() => handleColorClick(name)}
              className={`w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer ${
                selectedColor === name ? "border-2 border-[#006CFF]" : ""
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
      </div>
    </section>
  );
}
