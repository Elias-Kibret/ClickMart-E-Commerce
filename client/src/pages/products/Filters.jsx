import React, { useState } from "react";
import ReactSlider from "react-slider";

const colorMap = {
  "#FF0000": "Red",
  "#FFA500": "Orange",
  "#00FF00": "Green",
  "#0000FF": "Blue",
  "#800080": "Purple",
};

export const Filters = ({ category }) => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  return (
    <aside className="w-64 bg-white p-6 rounded-lg shadow-md">
      {/* Category Title */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800">Price</h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <ReactSlider
          className="mt-4"
          thumbClassName="h-4 w-4 bg-blue-500 rounded-full cursor-pointer"
          trackClassName="h-2 bg-gray-200 rounded-md"
          value={priceRange}
          min={0}
          max={500}
          step={10}
          onChange={handlePriceChange}
          ariaLabel={["Min Price", "Max Price"]}
        />
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800">Colors</h3>
        <div className="flex gap-2 mt-2">
          {Object.keys(colorMap).map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                selectedColor === color ? "border-black" : "border-gray-300"
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
        <h3 className="font-medium text-gray-800">Size</h3>
        <div className="flex gap-2 mt-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 text-sm border rounded-md ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {selectedSize && (
          <p className="text-sm text-gray-500 mt-2">Selected: {selectedSize}</p>
        )}
      </div>

      {/* Dress Style */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800">Dress Style</h3>
        <ul className="mt-2 space-y-2">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <li
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`text-sm cursor-pointer py-1 px-2 rounded-md ${
                selectedStyle === style
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {style}
            </li>
          ))}
        </ul>
        {selectedStyle && (
          <p className="text-sm text-gray-500 mt-2">
            Selected: {selectedStyle}
          </p>
        )}
      </div>

      {/* Apply Filter Button */}
      <button className="mt-6 bg-black text-white py-2 px-4 w-full rounded-md">
        Apply Filter
      </button>
    </aside>
  );
};

export default Filters;
