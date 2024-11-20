import React, { useState } from "react";
import { motion } from "framer-motion";
import authImage from "../../Assests/auth.png"; // Ensure the image path is correct

export const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to Login Form
  const [role, setRole] = useState("buyer"); // Default role is buyer

  const handleFormToggle = () => {
    setIsLogin((prevState) => !prevState); // Toggle between Login and Sign-Up forms
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Update the selected role
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in..."); // Replace with backend integration
    } else {
      console.log("Registering as:", { role }); // Replace with backend integration
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50">
      {/* Left Image Section with Framer Motion */}
      <motion.div
        className="hidden md:flex flex-1 items-center justify-center"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={authImage}
          alt="Shopping Illustration"
          className="max-w-[400px] md:max-w-[500px] lg:max-w-[700px] w-full h-auto object-contain"
        />
      </motion.div>

      {/* Right Form Section with Framer Motion */}
      <motion.div
        className="flex-1 max-w-lg w-full px-8 sm:px-12 py-10 bg-white shadow-md rounded-lg"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          {isLogin ? "Log In to Your Account" : "Create an Account"}
        </h2>
        <p className="text-base text-gray-600 text-center mb-6">
          {isLogin
            ? "Enter your login details below"
            : "Enter your details below to create an account"}
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input (only for Sign-Up) */}
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          )}

          {/* Email/Phone Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email or Phone Number
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email or phone number"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Role Selection (only for Sign-Up) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Role
              </label>
              <div className="mt-2 flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="buyer"
                    checked={role === "buyer"}
                    onChange={handleRoleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Buyer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="seller"
                    checked={role === "seller"}
                    onChange={handleRoleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Seller</span>
                </label>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-md text-base font-semibold hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:outline-none"
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="w-full border-b border-gray-300"></span>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <span className="w-full border-b border-gray-300"></span>
        </div>

        {/* Sign Up or Log In with Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-sm text-gray-700 font-medium hover:bg-gray-100"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-3"
          />
          {isLogin ? "Log in with Google" : "Sign up with Google"}
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-8">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={handleFormToggle}
            className="text-blue-500 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpForm;
