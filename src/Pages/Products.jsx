import React from "react";
import { products } from "../data/productsData";
import ShortBy from "./ShortBy";

export default function Products({
  filters = { brand: [], color: [], prices: [0, Infinity] },
}) {
  const filteredProducts = products.filter((product) => {
    const brandOk =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const colorOk =
      filters.color.length === 0 || filters.color.includes(product.color);
    const priceOk =
      product.price >= filters.prices[0] && product.price <= filters.prices[1];

    return brandOk && colorOk && priceOk;
  });

  return (
    <section className="p-4">
      {/* Banner Section */}
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

      {/* ShortBy Section */}
      <ShortBy />

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              {/* Tag Badge */}
              {product.tag && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover"
              />

              {/* Product Name */}
              <h3 className="mt-3 font-semibold text-gray-800 text-xl text-center">
                {product.name}
              </h3>

              {/* Rating (static JSX stars) */}
              <div className="flex justify-center mt-1 gap-1 text-xl">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
              </div>

              {/* Price Section */}
              <div className="flex justify-center items-center mt-2 space-x-5">
                <span className="text-[#40BFFF] text-xl font-bold">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through">
                  ${(product.price * 1.78).toFixed(2)}
                </span>
                <span className="text-red-500 font-semibold">24% Off</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
