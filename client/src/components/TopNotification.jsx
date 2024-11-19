import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

export const TopNotification = () => {
  // Animation variants for Framer Motion
  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-black text-white py-1 px-4"
      initial="hidden"
      animate="visible"
      variants={notificationVariants}
    >
      <div className="container mx-auto flex justify-between items-center text-xs whitespace-nowrap">
        {/* Spacer for the Left */}
        <div className="flex-1 hidden md:block"></div>

        {/* Announcement Text */}
        <p className="flex-1 text-center truncate">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <span className="font-bold cursor-pointer hover:underline">
            Shop Now
          </span>
        </p>

        {/* Language Dropdown */}
        <div className="flex-1 hidden md:flex justify-end items-center space-x-1 cursor-pointer">
          <span>English</span>
          <FiChevronDown className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
};
