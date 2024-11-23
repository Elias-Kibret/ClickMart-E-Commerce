import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartApi from "../../api/modules/cart.api";
import { addItem, removeItem, selectCart } from "../../features/cart/cartSlice";
import { selectUser } from "../../features/user/userSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);

  // Check if the product is already in the cart
  const isInCart = cart.some((cartItem) => cartItem.id === product.productId);

  // Handle Add to Cart
  const handleAddToCart = async (e) => {
    e.stopPropagation(); // Prevent card click event from triggering

    //  request api to add to the cart table in database based on the userID and ProductID
    try {
      const res = await cartApi.addProductToCart(
        user?.userId,
        product.productId
      );
      console.log(res.response.cartId);
      const cartItem = {
        id: product.productId, // Map productId to id as expected in the cartSlice
        name: product.name,
        image: product.imageUrl,
        price: product.price,
        quantity: 1, // Default quantity for new items
        maxQuantity: 5, // Placeholder for maxQuantity; adapt as needed
        subtotal: product.price * 1,
        description: product.description,
        cartId: res?.response.cartId,
      };

      dispatch(addItem(cartItem)); // Dispatch the add action
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Remove from Cart
  const handleRemoveFromCart = async (e) => {
    e.stopPropagation(); // Prevent card click event from triggering
    try {
      console.log(cart);
      const res = await cartApi.removeProductFromCart(
        cart[0]?.cartId,
        product.productId
      );
      console.log(res);

      dispatch(removeItem(product.productId)); // Dispatch the remove action
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* Badge for Availability */}
      {!product.available && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Out of Stock
        </div>
      )}

      {/* Product Image */}
      <Link to="/productsDetail" state={product}>
        <img
          className="w-full h-48 object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </Link>

      {/* Product Details */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate">{product.name}</div>
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Price and Info */}
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">
          ${product.price.toFixed(2)}
        </span>
        {product.available ? (
          <span className="text-sm bg-green-100 text-green-600 font-medium px-3 py-1 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="text-sm bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      {/* Colors and Sizes */}
      <div className="px-6 pb-4">
        <p className="text-xs text-gray-400">
          Colors:{" "}
          <span className="text-gray-600">{product.colors.join(", ")}</span>
        </p>
        <p className="text-xs text-gray-400">
          Sizes:{" "}
          <span className="text-gray-600">{product.sizes.join(", ")}</span>
        </p>
      </div>

      {/* Add/Remove Button */}
      <div className="px-6 pb-4">
        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:from-pink-600 hover:to-red-500 transition-all duration-300"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
            disabled={!product.available} // Disable button if the product is out of stock
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
