import React, { useState } from "react";
import SellerProduct from "./SellerProduct"; // Import the component

export const Sellerro = () => {
  const [products, setProducts] = useState([
    {
      name: "Electronics",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/dd5e4d2f-830d-4f55-befd-1f88ac313187.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "10 Inch HD Touch Screen Android Tablet - Tablets with 3GB RAM, 64GB ROM, 512GB Expand, WiFi, Wireless, Dual Camera, GMS Certification and Latest Android 13 OS",
      price: 109.99,
      category: "Electronics",
      relatedImages: [
        "https://img.kwcdn.com/product/fancy/270e583b-6897-450a-b580-a84079e0e113.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/546f80ef-ec22-4135-8a77-d9db51d0e323.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      colors: ["Black", "White", "Red"],
      sizes: ["M", "X"],
      reviews: [],
      available: true,
      quantity: 9,
    },
  ]);

  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      setProducts((prev) => prev.filter((p) => p !== product));
    }
  };

  const handleUpdate = (product) => {
    alert(`Redirecting to update page for ${product.name}`);
    // Implement redirection or update logic here
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Products</h1>
      {products.length > 0 ? (
        products.map((product, index) => (
          <SellerProduct
            key={index}
            product={product}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center">No products to display.</p>
      )}
    </div>
  );
};
