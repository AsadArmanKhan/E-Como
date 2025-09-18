import React from "react";
import FilterSidebar from "./FilterSidebar";
import Products from "./Products";
import ProductsSidebar from "../Components/ProductsSidebar";

export default function ProductsPage() {
  return (
    <section className="w-full flex justify-between p-5">
      <div className="w-[20%] sm:w-[30]">
        <ProductsSidebar />
      </div>
      <div className="w-[78%]">
        <Products />
      </div>
    </section>
  );
}
