import React from "react";
import { Link } from "react-router-dom";

export default function BigShoes() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-8 md:p-12 bg-[#40BFFF] rounded-lg shadow-md">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center mt-10 md:text-left">
          <h2 className="text-2xl md:text-4xl text-white font-semibold leading-snug">
            Adidas Men Running <br /> Sneakers
          </h2>
          <p className="text-white text-sm md:text-base">
            Performance and design. Taken right to the edge.
          </p>
          <Link>
            <div className="mt-4 line text-sm text-white transition">
              SHOP NOW
              <div className="w-10 h-0.5 bg-white flex top-0"></div>
            </div>
          </Link>
        </div>

        {/* Right Product Image */}
        <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
          <img
            className="rotation w-64 md:w-80 h-auto object-contain drop-shadow-lg"
            src="af3bd991ca08635dbdf9c0400408400496803559 (1).png"
            alt="Adidas Sneakers"
          />
        </div>
      </div>
    </>
  );
}
