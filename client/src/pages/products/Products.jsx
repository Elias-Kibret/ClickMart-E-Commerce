import React from "react";
import { useLocation } from "react-router-dom";
import { Filters } from "./Filters";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "./Pagination";

export const Products = ({}) => {
  const location = useLocation();
  const { category } = location.state || { category: "All" };
  return (
    <div className="container mx-auto px-4 lg:px-8 flex gap-8">
      {/* Sidebar */}
      <Filters category={category} />

      {/* Product Grid */}
      <div className="flex-1">
        <ProductGrid />
        <Pagination />
      </div>
    </div>
  );
};
