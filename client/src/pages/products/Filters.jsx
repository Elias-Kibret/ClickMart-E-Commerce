import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setProductByCategory,
} from "../../features/products/productsSlice";

const colorMap = {
  "#FF0000": "Red",
  "#FFA500": "Orange",
  "#00FF00": "Green",
  "#0000FF": "Blue",
  "#800080": "Purple",
};

export const Filters = ({ category }) => {
  const [minPrice, setMinPrice] = useState(0); // Default min price
  const [maxPrice, setMaxPrice] = useState(500); // Default max price
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts); // All products

  const handleApplyFilters = () => {
    if (!products || products.length === 0) return;

    let filteredProducts = [...products];

    // Apply price filter
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Apply color filter
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === colorMap[selectedColor]
      );
    }

    // Apply size filter
    if (selectedSize) {
      filteredProducts = filteredProducts.filter(
        (product) => product.size === selectedSize
      );
    }

    // Apply style filter
    if (selectedStyle) {
      filteredProducts = filteredProducts.filter(
        (product) => product.style === selectedStyle
      );
    }

    // Dispatch filtered products
    dispatch(setProductByCategory(filteredProducts));
  };

  const handleResetFilters = () => {
    // Reset filter states
    setMinPrice(0);
    setMaxPrice(500);
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedStyle(null);

    // Reset to show all products
    dispatch(setProductByCategory([]));
  };

  return (
    <aside className="w-64 bg-white p-6 rounded-md shadow-md">
      {/* Category Title */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 uppercase">
          {category}
        </h3>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-2">Price Range</h3>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Min"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-2">Colors</h3>
        <div className="flex gap-2">
          {Object.keys(colorMap).map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                selectedColor === color ? "border-blue-500" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        {selectedColor && (
          <p className="text-sm text-gray-500 mt-2">
            Selected: {colorMap[selectedColor]}
          </p>
        )}
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-2">Size</h3>
        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-full py-2 text-sm border rounded-md ${
                selectedSize === size
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-2">Dress Style</h3>
        <ul className="space-y-2">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <li
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`w-full py-2 px-3 text-sm border rounded-md text-center cursor-pointer ${
                selectedStyle === style
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {style}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-3">
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600"
          onClick={handleApplyFilters}
        >
          Apply Filter
        </button>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600"
          onClick={handleResetFilters}
        >
          Reset
        </button>
      </div>
    </aside>
  );
};

export default Filters;
