import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdLocalShipping, MdOutlineReplay } from "react-icons/md";
import img1 from "../Assests/product/img1.png";
import img2 from "../Assests/product/img2.png";
import img3 from "../Assests/product/img3.png";
import img4 from "../Assests/product/img4.png";

const images = [img1, img2, img3, img4];

export const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("red");

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
          {images.map((image, index) => (
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
          {/* Magnifier Effect */}
          <div
            className="absolute inset-0 hover:cursor-zoom-in"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: "200%",
              backgroundRepeat: "no-repeat",
              opacity: 0,
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = 1;
              e.target.style.backgroundPosition = "center";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = 0;
            }}
          ></div>
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Havic HV G-92 Gamepad
        </h1>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex items-center text-yellow-500">
            {"★".repeat(4)}{" "}
            <span className="text-gray-400">{"★".repeat(1)}</span>
          </div>
          <p className="text-gray-500">(150 Reviews)</p>
          <p className="text-green-600 font-medium">In Stock</p>
        </div>

        <p className="text-2xl font-semibold text-gray-900 mt-4">$192.00</p>
        <p className="text-gray-600 mt-4">
          PlayStation 5 Controller Skin High-quality vinyl with air channel
          adhesive for easy bubble-free install & mess-free removal. Pressure
          sensitive.
        </p>

        {/* Colors */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Colours:</h4>
          <div className="flex gap-4">
            {["red", "gray"].map((color) => (
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
            {["XS", "S", "M", "L", "XL"].map((size) => (
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
