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

export const Products = ({}) => {
  const location = useLocation();
  const { category } = location.state;
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  const fetchProducts = async () => {
    try {
      const res = await productApi.getAllProducts();
      console.log(res);
      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allProducts);
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
