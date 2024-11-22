import React, { useState } from "react";
import { productApi } from "../../api/modules/product.api"; // Import your productApi

export const AddProduct = () => {
  const [product, setProduct] = useState({
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for submission

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle related images change
  const handleRelatedImagesChange = (e) => {
    const value = e.target.value;
    const images = value.split(",").map((url) => url.trim()); // Split by comma and trim whitespace
    setProduct((prev) => ({
      ...prev,
      relatedImages: images,
    }));
  };

  // Handle checkbox changes for colors and sizes
  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading state
    try {
      const response = await productApi.addProduct(product); // Call the API
      console.log("Product Added Successfully:", response);
      alert("Product added successfully!");
      setProduct({
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
      }); // Reset form
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product. Please try again.");
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg space-y-4"
      >
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium">
            Main Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            placeholder="Enter main image URL"
            className="mt-1 block w-full p-2 border rounded-md"
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
            placeholder="Enter product description"
            className="mt-1 block w-full p-2 border rounded-md"
            rows={4}
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
            placeholder="Enter price"
            className="mt-1 block w-full p-2 border rounded-md"
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
            placeholder="Enter category"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Related Images */}
        <div>
          <label className="block text-gray-700 font-medium">
            Related Images (comma-separated URLs)
          </label>
          <textarea
            name="relatedImages"
            value={product.relatedImages.join(", ")} // Display as a comma-separated string
            onChange={handleRelatedImagesChange}
            placeholder="Enter related image URLs, separated by commas"
            className="mt-1 block w-full p-2 border rounded-md"
            rows={3}
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
            placeholder="Enter quantity"
            className="mt-1 block w-full p-2 border rounded-md"
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
            className="mt-1 block w-full p-2 border rounded-md"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`block w-full py-2 rounded-md text-white ${
            isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};
