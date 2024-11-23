import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

export const SellerProduct = ({ product, onDelete, onUpdate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Product Header */}
      <div className="flex items-center mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.category}</p>
        </div>
      </div>

      {/* Product Details */}
      <div className="text-gray-700 mb-4">
        <p className="mb-2">
          <strong>Description:</strong> {product.description}
        </p>
        <p className="mb-2">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="mb-2">
          <strong>Available:</strong>{" "}
          {product.available ? (
            <span className="text-green-600 font-medium">Yes</span>
          ) : (
            <span className="text-red-600 font-medium">No</span>
          )}
        </p>
        <p className="mb-2">
          <strong>Quantity:</strong> {product.quantity}
        </p>
        <p className="mb-2">
          <strong>Colors:</strong> {product.colors.join(", ")}
        </p>
        <p className="mb-2">
          <strong>Sizes:</strong> {product.sizes.join(", ")}
        </p>
      </div>

      {/* Product Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => onUpdate(product)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <FiEdit className="text-lg" />
          Update
        </button>
        <button
          onClick={() => onDelete(product)}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          <FiTrash className="text-lg" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default SellerProduct;
