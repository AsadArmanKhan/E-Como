import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductsPage from "./ProductsPage";

export default function Home() {
  return (
    <div className="">
      <Header />
      
      <ProductsPage />

      <Footer />
    </div>
  );
}
