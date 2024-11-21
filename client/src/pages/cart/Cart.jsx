import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../../features/cart/cartSlice";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity, maxQuantity) => {
    if (newQuantity >= 1 && newQuantity <= maxQuantity) {
      dispatch(updateQuantity({ id, quantity: newQuantity })); // Update the cart quantity
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
                    <div className="flex items-center justify-center space-x-2">
                      {/* Decrement Button */}
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            product.id,
                            product.quantity - 1,
                            product.maxQuantity
                          )
                        }
                        disabled={product.quantity <= 1}
                        className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                      >
                        <AiOutlineMinus />
                      </button>

                      {/* Quantity Display */}
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            parseInt(e.target.value, 10),
                            product.maxQuantity
                          )
                        }
                        className="w-16 text-center border border-gray-300 rounded"
                        min="1"
                        max={product.maxQuantity}
                      />

                      {/* Increment Button */}
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            product.id,
                            product.quantity + 1,
                            product.maxQuantity
                          )
                        }
                        disabled={product.quantity >= product.maxQuantity}
                        className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
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
                <div className="flex items-center space-x-2">
                  {/* Decrement Button */}
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        product.id,
                        product.quantity - 1,
                        product.quantity
                      )
                    }
                    disabled={product.quantity <= 1}
                    className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                  >
                    <AiOutlineMinus />
                  </button>

                  {/* Quantity Display */}
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.id,
                        parseInt(e.target.value, 10),
                        product.maxQuantity
                      )
                    }
                    className="w-16 text-center border border-gray-300 rounded"
                    min="1"
                    max={product.quantity}
                  />

                  {/* Increment Button */}
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        product.id,
                        product.quantity + 1,
                        product.maxQuantity
                      )
                    }
                    disabled={product.quantity >= product.maxQuantity}
                    className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
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
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};
