import React, { useState } from "react";

export default function Color() {
  const [selectedColor, setSelectedColor] = useState("#006CFF");

  const colors = [
    "#006CFF",
    "#FC3E39",
    "#171717",
    "#FFF600",
    "#FF00B4",
    "#EFDFDF",
  ];

  const handleColorClick = (color) => {
    setSelectedColor((prev) => (prev === color ? null : color));
  };

  return (
    <section className="w-full mb-10 rounded bg-[#F6F7F8]">
      <div className="pl-4">
        <h2 className="text-xl mb-4 font-semibold">Color</h2>

        <div className="flex justify-between items-center pt-5 pl-1 pr-3 pb-5">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => handleColorClick(color)}
              className={`w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer ${
                selectedColor === color ? "border-2 border-[#006CFF]" : ""
              }`}
            >
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
