import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const UpdateProduct = ({ onUpdate }) => {
  const location = useLocation();
  const { product: locationProduct } = location.state || {};

  // Initialize state directly with the product passed via useNavigate
  const [product, setProduct] = useState(
    locationProduct || {
      name: "",
      imageUrl: "",
      description: "",
      price: "",
      category: "",
      relatedImages: [],
      colors: [],
      sizes: [],
      available: true,
      quantity: 0,
    }
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRelatedImagesChange = (e) => {
    const value = e.target.value;
    const images = value.split(",").map((url) => url.trim());
    setProduct((prev) => ({
      ...prev,
      relatedImages: images,
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onUpdate(product); // Call the update handler with the updated product data
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Failed to update product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Update Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg max-w-3xl mx-auto space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="mt-2 w-full p-3 border rounded-lg"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium">Main Image</label>
          <input
            type="url"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="mt-2 w-full p-3 border rounded-lg"
            placeholder="Enter main image URL"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-2 w-full p-3 border rounded-lg"
            rows="4"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="mt-2 w-full p-3 border rounded-lg"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="mt-2 w-full p-3 border rounded-lg"
            placeholder="Enter category"
            required
          />
        </div>

        {/* Related Images */}
        <div>
          <label className="block text-gray-700 font-medium">
            Related Images
          </label>
          <textarea
            name="relatedImages"
            value={product.relatedImages.join(", ")}
            onChange={handleRelatedImagesChange}
            className="mt-2 w-full p-3 border rounded-lg"
            rows="3"
            placeholder="Enter image URLs separated by commas"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block text-gray-700 font-medium">Colors</label>
          <div className="flex items-center space-x-4 mt-2">
            {["Black", "White", "Red", "Blue"].map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  value={color}
                  checked={product.colors.includes(color)}
                  onChange={(e) => handleCheckboxChange(e, "colors")}
                  className="mr-2"
                />
                {color}
              </label>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-gray-700 font-medium">Sizes</label>
          <div className="flex items-center space-x-4 mt-2">
            {["S", "M", "L", "XL"].map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="checkbox"
                  value={size}
                  checked={product.sizes.includes(size)}
                  onChange={(e) => handleCheckboxChange(e, "sizes")}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="mt-2 w-full p-3 border rounded-lg"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block text-gray-700 font-medium">Available</label>
          <select
            name="available"
            value={product.available ? "true" : "false"}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                available: e.target.value === "true",
              }))
            }
            className="mt-2 w-full p-3 border rounded-lg"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg text-white ${
            isSubmitting
              ? "bg-gray-400"
              : "bg-indigo-500 hover:bg-indigo-600 transition"
          }`}
        >
          {isSubmitting ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
