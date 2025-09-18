import React from "react";

export default function Products() {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-8 md:p-12 bg-[#40BFFF] rounded-lg shadow-md">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center mt-10 md:text-left">
          <h2 className="text-2xl md:text-4xl text-white font-semibold leading-snug">
            Adidas Men Running <br /> Sneakers
          </h2>
          <p className="text-white text-sm md:text-base">
            Performance and design. Taken right to the edge.
          </p>
          <div className="mt-4 line text-sm text-white transition">
            SHOP NOW
            <div className="w-10 h-0.5 bg-white flex top-0"></div>
          </div>
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
      <div className="">
        <div className="bg-white px-4 py-8">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="relative  rounded-lg  shadow hover:shadow-lg transition">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                HOT
              </span>
              <img
                src="/funky-sport.png"
                alt="Nike Air Max 270 React"
                className="w-full h-70 z-50 object-cover mb-3"
              />
              <h3 className="pl-3 pr-3 text-gray-700 text-sm font-medium mt-5">
                Nike Air Max 270 React
              </h3>
              <div className="flex items-center space-x-1 mt-1 pl-3 pr-3">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <div className="mt-2 flex items-center space-x-2 pl-3 pr-3">
                <span className="text-blue-600 font-semibold">$299.43</span>
                <span className="text-gray-400 line-through text-sm">
                  $534.33
                </span>
                <span className="text-red-500 text-xs font-semibold">
                  24% Off
                </span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative  rounded-lg  shadow hover:shadow-lg transition">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                HOT
              </span>
              <img
                src="/36fadfb6e72b8e42c2afe8453f8af0e3795dd9e1 (1).png"
                alt="Nike Air Max 270 React"
               className="w-full h-70 z-50 object-center mb-3"
              />
              <h3 className="text-gray-700 pl-3 pr-3 text-sm font-medium">
                Nike Air Max 270 React
              </h3>
              <div className="flex pl-3 pr-3 items-center space-x-1 mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <div className="mt-2 pl-3 pr-3 flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">$289.43</span>
                <span className="text-gray-400 line-through text-sm">
                  $524.33
                </span>
                <span className="text-red-500 text-xs font-semibold">
                  24% Off
                </span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative  rounded-lg  shadow hover:shadow-lg transition">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                HOT
              </span>
              <img
                src="/bag.png"
                alt="Nike Air Max 270 React"
                className="w-full h-70 z-50 object-fit mb-3"
              />
              <h3 className="text-gray-700 pl-3 pr-3 text-sm font-medium">
                Nike Air Max 270 React
              </h3>
              <div className="flex pl-3 pr-3 items-center space-x-1 mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <div className="mt-2 pl-3 pr-3 flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">$299.43</span>
                <span className="text-gray-400 line-through text-sm">
                  $534.33
                </span>
                <span className="text-red-500 text-xs font-semibold">
                  24% Off
                </span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="relative  rounded-lg  shadow hover:shadow-lg transition">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                HOT
              </span>
              <img
                src="/blue-under.png"
                alt="Nike Air Max 270 React"
                className="w-full h-70 z-50 object-cover mb-3"
              />
              <h3 className="text-gray-700 pl-3 pr-3 text-sm font-medium">
                Nike Air Max 270 React
              </h3>
              <div className="flex pl-3 pr-3 items-center space-x-1 mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <div className="mt-2 pl-3 pr-3 flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">$289.43</span>
                <span className="text-gray-400 line-through text-sm">
                  $524.33
                </span>
                <span className="text-red-500 text-xs font-semibold">
                  24% Off
                </span>
              </div>
            </div>

            {/* Product 5 */}
            <div className="relative  rounded-lg  shadow hover:shadow-lg transition">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                HOT
              </span>
              <img
                src="/yellow-side.png"
                alt="Nike Air Max 270 React"
                className="w-full h-70 z-50 object-cover mb-3"
              />
              <h3 className="text-gray-700 pl-3 pr-3 text-sm font-medium">
                Nike Air Max 270 React
              </h3>
              <div className="flex pl-3 pr-3 items-center space-x-1 mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <div className="mt-2 pl-3 pr-3 flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">$299.43</span>
                <span className="text-gray-400 line-through text-sm">
                  $534.33
                </span>
                <span className="text-red-500 text-xs font-semibold">
                  24% Off
                </span>
              </div>
            </div>
            {/* 6th Product */}
            <div className="relative  rounded-lg  shadow hover:shadow-lg transition">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                HOT
              </span>
              <img
                src="/yellow-back.png"
                alt="Nike Air Max 270 React"
                className="w-full h-70 z-50 object-cover mb-3"
              />
              <h3 className="text-gray-700  text-sm pl-3 pr-3 font-medium">
                Nike Air Max 270 React
              </h3>
              <div className="flex pl-3 pr-3 items-center space-x-1 mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <div className="mt-2 pl-3 pr-3 flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">$299.43</span>
                <span className="text-gray-400 line-through text-sm">
                  $534.33
                </span>
                <span className="text-red-500 text-xs font-semibold">
                  24% Off
                </span>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button className="px-3 py-1 border rounded text-gray-500 hover:bg-gray-100">
              &laquo;
            </button>
            <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100">
              1
            </button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white">
              2
            </button>
            <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100">
              4
            </button>
            <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100">
              5
            </button>
            <button className="px-3 py-1 border rounded text-gray-500 hover:bg-gray-100">
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
