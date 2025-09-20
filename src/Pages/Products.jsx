import React from "react";
import { products } from "../data/productsData";
import ShortBy from "./ShortBy";
import BigShoes from "./BigShoes";

export default function Products({
  filters = { brand: [], color: [], prices: [0, Infinity], topDeals: false },
  sortBy,
  setSortBy,
  showCount,
  setShowCount,
  view,
  setView,
  hotDeal,
}) {
  const filteredProducts = products.filter((product) => {
    const brandOk =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const colorOk =
      filters.color.length === 0 ||
      product.color.some((c) => filters.color.includes(c));
    const priceOk =
      product.price >= filters.prices[0] && product.price <= filters.prices[1];
    const hotDealOk = !hotDeal || product.brand === hotDeal;

    return brandOk && colorOk && priceOk && hotDealOk;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;

    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);

    if (sortBy === "newest") return b.id - a.id;
    if (sortBy === "oldest") return a.id - b.id;

    if (sortBy === "popularity") return b.ratingCount - a.ratingCount;

    if (sortBy === "rating") return b.ratingValue - a.ratingValue;

    return 0;
  });

  //  Show Count Logic Here
  const limitedProducts = sortedProducts.slice(0, showCount);

  return (
    <section className="p-4">
      {/* Big Shoes Banner */}
      <BigShoes />

      {/* ShortBy Section */}
      <ShortBy
        totalItems={filteredProducts.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showCount={showCount}
        setShowCount={setShowCount}
        view={view}
        setView={setView}
      />

      {sortedProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No products found</p>
      ) : (
        <>
          <div
            className={`mt-6 gap-6 ${
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col"
            }`}
          >
            {limitedProducts.map((product) => (
              <div
                key={product.id}
                className={`relative bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition ${
                  view === "list" ? "flex items-center gap-4" : ""
                }`}
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
                  className={`object-contain rounded-md ${
                    view === "list" ? "w-32 h-32" : "w-full max-h-80"
                  }`}
                />

                {/* Product Details */}
                <div className={view === "list" ? "flex-1" : ""}>
                  <h3
                    className={`mt-3 font-semibold text-gray-800 text-xl ${
                      view === "list" ? "text-left" : "text-center"
                    }`}
                  >
                    {product.name}
                  </h3>

                  {/* Dummy Rating */}
                  <div
                    className={`flex mt-1 gap-1 text-xl ${
                      view === "list" ? "justify-start" : "justify-center"
                    }`}
                  >
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300">★</span>
                  </div>

                  {/* Price Section */}
                  <div
                    className={`flex items-center mt-2 space-x-5 ${
                      view === "list" ? "justify-start" : "justify-center"
                    }`}
                  >
                    <span className="text-[#40BFFF] text-xl font-bold">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      ${(product.price * 1.78).toFixed(2)}
                    </span>
                    <span className="text-red-500 font-semibold">
                      {product.discount}
                    </span>
                  </div>
                  <div className="flex text-lg font-semibold text-gray-800  items-center gap-2 justify-center mt-3">
                    RatingCount: <span className="text-xl text-green-500">{product.ratingCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {showCount < sortedProducts.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowCount(showCount + 6)}
                className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
