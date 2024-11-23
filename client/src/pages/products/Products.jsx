import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Filters } from "./Filters";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setProducts,
  setProductByCategory,
  selectfilteredProductsByCategory,
} from "../../features/products/productsSlice";
import { productApi } from "../../api/modules/product.api";

export const Products = () => {
  const location = useLocation();
  const category = location.state?.category || "All"; // Default to "All" if no category is passed
  console.log(category);
  const dispatch = useDispatch();

  // Select all products and filtered products from Redux store
  const allProducts = useSelector(selectProducts);
  const filteredProducts = useSelector((state) =>
    selectfilteredProductsByCategory(state)
  );

  useEffect(() => {
    // Fetch products based on category
    if (category === "All") {
      fetchAllProducts();
    } else {
      fetchProductsByCategory(category);
    }
  }, [dispatch, category, allProducts]);

  // Fetch all products
  const fetchAllProducts = async () => {
    try {
      const products = await productApi.getAllProducts();
      dispatch(setProducts(products)); // Dispatch products to Redux store
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  // Fetch products by category
  const fetchProductsByCategory = async (category) => {
    try {
      const product = await productApi.getProductsByCategory(category);

      dispatch(setProductByCategory(product)); // Update Redux with filtered products
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  };

  console.log("All products:", allProducts);
  console.log("Filtered products:", filteredProducts);

  return (
    <div className="container mx-auto px-4 lg:px-8 flex gap-8 mt-10">
      {/* Sidebar */}
      <Filters category={category} />

      {/* Product Grid */}
      <div className="flex-1">
        <ProductGrid
          product={category == "All" ? allProducts : filteredProducts}
        />
        <Pagination />
      </div>
    </div>
  );
};
