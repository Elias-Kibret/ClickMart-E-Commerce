import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addItem,
  selectCart,
  updateQuantity,
} from "../../features/cart/cartSlice";

export const ProductDetails = () => {
  const { state: product } = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const [selectedImage, setSelectedImage] = useState(product.relatedImages[0]);
  const [quantity, setQuantity] = useState(2); // Start with a default quantity of 2
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Check if product already exists in the cart
  const cartItem = cart.find((item) => item.id === product.productId);
  const maxAvailableQuantity = product.quantity - (cartItem?.quantity || 0);

  const handleQuantityChange = (type) => {
    if (type === "increment" && quantity < maxAvailableQuantity) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 2) {
      // Minimum quantity is now 2
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= maxAvailableQuantity) {
      const cartData = {
        id: product.productId,
        name: product.name,
        price: product.price,
        quantity,
        description: product.description,
        image: product.imageUrl,
      };

      if (cartItem) {
        dispatch(
          updateQuantity({
            id: product.productId,
            quantity: cartItem.quantity + quantity,
          })
        );
      } else {
        dispatch(addItem(cartData));
      }

      alert("Product added to cart!");
    } else {
      alert("Cannot add more than available quantity.");
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
              disabled={quantity === 2} // Disable decrement button at quantity 2
            >
              <AiOutlineMinus />
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-3 py-2 text-gray-500 hover:bg-gray-100"
              disabled={quantity >= maxAvailableQuantity}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
          >
            Add to Cart test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
