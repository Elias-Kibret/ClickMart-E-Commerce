import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Framer Motion animation variants
  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
  };

  return (
    <header className="bg-white border-b">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold md:pl-20">Exclusive</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Sign Up
          </a>
        </nav>

        {/* Icons and Hamburger Menu */}
        <div className="flex items-center space-x-4 md:mr-10 ">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center border rounded-md h-12 px-2 py-1 bg-gray-100 md:mr-6">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm px-4 w-80 h-12   border-r-2"
            />
            <FiSearch className="text-gray-600 mx-2  h-12  " />
          </div>

          {/* Icons */}
          <FiHeart className="w-5 h-5 cursor-pointer" />
          <FiShoppingCart className="w-5 h-5 cursor-pointer" />

          {/* Hamburger Menu for Mobile */}
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

      {/* Always-Visible Search Bar for Mobile */}
      <div className="bg-gray-100 py-2 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center border rounded-md px-2 py-2 bg-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm flex-grow px-2"
            />
            <FiSearch className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu with Framer Motion */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden bg-gray-100 border-t"
      >
        <nav className="flex flex-col space-y-4 p-4 text-sm font-medium">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Sign Up
          </a>
        </nav>
      </motion.div>
    </header>
  );
};
