import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdLocalShipping, MdOutlineReplay } from "react-icons/md";
import { useLocation } from "react-router-dom";

// Sample product data
const products = [
  {
    productId: 16,
    name: "Casual Sneakers",
    imageUrl:
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
    description: "Comfortable sneakers for daily wear and casual outings.",
    price: 39.99,
    category: "Clothing",
    relatedImages: [
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
      "https://m.media-amazon.com/images/I/61wbcy3qmkL._AC_UL320_.jpg",
    ],
    colors: ["red"],
    sizes: ["S"],
    reviews: [],
    available: true,
  },
  {
    productId: 17,
    name: "Casual Sneakers",
    imageUrl:
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
    description: "Comfortable sneakers for daily wear and casual outings.",
    price: 39.99,
    category: "Clothing",
    relatedImages: [
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
      "https://m.media-amazon.com/images/I/61wbcy3qmkL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81+8BBmF7hL._AC_SY550_.jpg",
    ],
    colors: ["Black", "Lemon"],
    sizes: ["S", "M", "L"],
    reviews: [],
    available: true,
  },
];

export const ProductDetails = ({ productId }) => {
  // Fetch product based on productId (assuming a dynamic productId)
  let { state } = useLocation();
  
  const product = state;

  const [selectedImage, setSelectedImage] = useState(product.relatedImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 max-w-screen-xl mx-auto">
      {/* Left Section - Image Thumbnails and Magnifier */}
      <div className="lg:flex lg:gap-4">
        {/* Thumbnail List */}
        <div className="flex lg:flex-col gap-2">
          {product.relatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border ${
                selectedImage === image ? "border-blue-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>
        {/* Main Image with Magnifier */}
        <div className="relative flex-1">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-[350px] max-w-lg object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex items-center text-yellow-500">
            {"★".repeat(4)}{" "}
            <span className="text-gray-400">{"★".repeat(1)}</span>
          </div>
          <p className="text-gray-500">({product.reviews.length} Reviews)</p>
          <p
            className={`font-medium ${
              product.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <p className="text-2xl font-semibold text-gray-900 mt-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        {/* Colors */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Colors:</h4>
          <div className="flex gap-4">
            {product.colors.map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  selectedColor === color
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Size:</h4>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm font-medium rounded-md border ${
                  selectedSize === size
                    ? "bg-blue-500 text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              <AiOutlineMinus />
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              <AiOutlinePlus />
            </button>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Buy Now
          </button>
        </div>

        {/* Delivery Information */}
        <div className="mt-8 border rounded-lg divide-y w-[70%]">
          {/* Free Delivery */}
          <div className="flex items-center gap-4 p-4">
            <MdLocalShipping size={28} className="text-gray-700" />
            <div>
              <p className="font-semibold text-gray-800">Free Delivery</p>
              <p className="text-sm text-gray-600">
                <span className="text-blue-500 underline cursor-pointer">
                  Enter your postal code
                </span>{" "}
                for Delivery Availability
              </p>
            </div>
          </div>

          {/* Return Delivery */}
          <div className="flex items-center gap-4 p-4">
            <MdOutlineReplay size={28} className="text-gray-700" />
            <div>
              <p className="font-semibold text-gray-800">Return Delivery</p>
              <p className="text-sm text-gray-600">
                Free 30 Days Delivery Returns.{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  Details
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
