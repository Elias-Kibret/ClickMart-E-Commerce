import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
  clearCart,
} from "../../features/cart/cartSlice";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();
  console.log(cart);

  // Handle quantity changes
  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      dispatch(removeItem(id)); // Remove item if quantity is zero or less
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  // Calculate total cart value
  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4 lg:p-6 max-w-screen-lg mx-auto space-y-8">
      {/* Cart Items */}
      <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full min-w-[600px] bg-white">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="py-4 px-4 text-left">Product</th>
                <th className="py-4 px-4 text-center">Price</th>
                <th className="py-4 px-4 text-center">Quantity</th>
                <th className="py-4 px-4 text-center">Subtotal</th>
                <th className="py-4 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="py-4 px-4 flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="text-gray-800 font-medium">{product.name}</p>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-800">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <select
                      className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                    >
                      {[...Array(product.maxQuantity)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-800">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => dispatch(removeItem(product.id))}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="block sm:hidden">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white p-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-gray-800 font-medium">{product.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                >
                  {[...Array(product.maxQuantity)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <p className="text-gray-800">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeItem(product.id))}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="border border-gray-300 rounded-md p-6 w-full lg:w-1/3 mx-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Cart Total</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal:</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping:</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-4 text-gray-900 font-semibold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
        <Link to="/billing">
          <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-md text-lg font-medium hover:bg-red-600 focus:ring focus:ring-red-300">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
