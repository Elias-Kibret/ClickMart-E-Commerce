import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiX,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectCart } from "../features/cart/cartSlice";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Access user and cart data from Redux store
  const user = useSelector(selectUser); // Fetch logged-in user from Redux
  const cart = useSelector(selectCart); // Fetch cart items from Redux
  console.log(user);

  // Calculate total quantity of items in the cart
  const totalCartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Get the first letter of the user's name for the user icon
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : null;

  // Framer Motion animation variants
  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
  };

  const renderNavLinks = () => {
    if (user?.role === "ADMIN") {
      return (
        <>
          <Link
            to="/approvals"
            className="hover:underline text-gray-700 font-medium"
          >
            Approve Customers
          </Link>
          <Link
            to="/reviews"
            className="hover:underline text-gray-700 font-medium"
          >
            Reviews
          </Link>
        </>
      );
    }

    if (user?.role === "SELLER") {
      if (user?.active !== "ACTIVE") {
        return (
          <p className="text-red-600 font-medium">
            Your account is pending activation.
          </p>
        );
      }
      return (
        <>
          <Link
            to="/seller-dashboard/myposts"
            className="hover:underline text-gray-700 font-medium"
          >
            My Products
          </Link>
          <Link
            to="/add-product"
            className="hover:underline text-gray-700 font-medium"
          >
            Add Product
          </Link>
        </>
      );
    }

    // Default links for other users
    return (
      <>
        <Link to="/" className="hover:underline text-gray-700 font-medium">
          Home
        </Link>
        <Link
          to="/contact"
          className="hover:underline text-gray-700 font-medium"
        >
          Contact
        </Link>
        <Link to="/about" className="hover:underline text-gray-700 font-medium">
          About
        </Link>
      </>
    );
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold md:pl-20">Exclusive</div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {renderNavLinks()}
          <Link to="/auth" className="hover:underline">
            {user?.name ? "Log Out" : "Sign In"}
          </Link>
        </nav>

        <div className="flex items-center space-x-4 md:mr-10">
          {/* Display cart, search, and favorite only for non-sellers */}
          {user?.role !== "SELLER" && user?.role !== "ADMIN" && (
            <>
              <div className="hidden lg:flex items-center border rounded-md h-12 px-2 py-1 bg-gray-100 md:mr-6">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent outline-none text-sm px-4 w-80 h-12 border-r-2"
                />
                <FiSearch className="text-gray-600 mx-2 h-12" />
              </div>

              <FiHeart className="w-5 h-5 cursor-pointer" />

              <Link to="/cart" className="relative">
                <FiShoppingCart className="w-5 h-5 cursor-pointer" />
                {totalCartQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartQuantity}
                  </span>
                )}
              </Link>
            </>
          )}

          {user?.name ? (
            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold">
              {userInitial}
            </div>
          ) : (
            <Link to="/auth">
              <FiUser className="w-5 h-5 cursor-pointer" />
            </Link>
          )}

          <button
            className="block md:hidden text-xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-800" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden bg-gray-100 border-t"
      >
        <nav className="flex flex-col space-y-4 p-4 text-sm font-medium">
          {renderNavLinks()}
          <Link to="/auth" className="hover:underline">
            {user?.name ? "Log Out" : "Sign In"}
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};
