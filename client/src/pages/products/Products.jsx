import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Filters } from "./Filters";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectProducts,
  setProducts,
  setProductByCategory,
  selectfilteredProductsByCategory,
} from "../../features/products/productsSlice";
import { productApi } from "../../api/modules/product.api";

export const Products = () => {
  const location = useLocation();
  const category = location.state?.category || "All";
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  const fetchProducts = async () => {
    try {
      const products = await productApi.getAllProducts();
      console.log(products); // Directly log the products
      dispatch(setProducts(products)); // Dispatch products to Redux store
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const product = [
    {
      productId: 22,
      name: "Casual Sneakers",
      imageUrl:
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
      description: "Comfortable sneakers for daily wear and casual outings.",
      price: 39.99,
      category: "Footwear",
      relatedImages: [
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
      ],
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
      quantity: 9,
    },
    {
      productId: 23,
      name: "Casual Sneakers",
      imageUrl:
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
      description: "Comfortable sneakers for daily wear and casual outings.",
      price: 39.99,
      category: "Footwear",
      relatedImages: [
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
      ],
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
      quantity: 9,
    },
    {
      productId: 24,
      name: "Casual Sneakers",
      imageUrl:
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
      description: "Comfortable sneakers for daily wear and casual outings.",
      price: 39.99,
      category: "Footwear",
      relatedImages: [
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
      ],
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
      quantity: 9,
    },
    {
      productId: 25,
      name: "Casual Sneakers",
      imageUrl:
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
      description: "Comfortable sneakers for daily wear and casual outings.",
      price: 39.99,
      category: "Footwear",
      relatedImages: [
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a9?$desktopProduct$",
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a91?$desktopProduct$",
      ],
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      reviews: [],
      available: true,
      quantity: 9,
    },
  ];

  console.log(allProducts);
  return (
    <div className="container mx-auto px-4 lg:px-8 flex gap-8 mt-10">
      {/* Sidebar */}
      <Filters category={category} />

      {/* Product Grid */}
      <div className="flex-1">
        <ProductGrid product={allProducts} />

        <Pagination />
      </div>
    </div>
  );
};
