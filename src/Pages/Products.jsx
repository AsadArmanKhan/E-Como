import React from "react";
import { products } from "../data/productsData";

export default function Products({ filters = { brand: [], color: [], prices: [0, Infinity] } }) {
  const filteredProducts = products.filter((product) => {
    const brandOk =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const colorOk =
      filters.color.length === 0 || filters.color.includes(product.color);
    const priceOk =
      product.price >= filters.prices[0] &&
      product.price <= filters.prices[1];

    return brandOk && colorOk && priceOk;
  });

  return (
    <section className="p-4">
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="shadow rounded p-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain"
              />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
