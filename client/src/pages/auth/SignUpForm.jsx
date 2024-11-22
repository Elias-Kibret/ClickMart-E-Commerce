import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import authImage from "../../Assests/auth.png"; // Ensure the image path is correct
import authApi from "../../api/modules/auth.api";
import { setUser, selectUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to Login Form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "BUYER", // Default role for sign-up in uppercase
  });

  const navigate = useNavigate(); // React Router navigation hook
  const dispatch = useDispatch();
  const handleFormToggle = () => {
    setIsLogin((prevState) => !prevState); // Toggle between Login and Sign-Up forms
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "BUYER",
    }); // Reset form data when toggling
  };
  const user = useSelector(selectUser);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "role" ? value.toUpperCase() : value, // Convert role to uppercase
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle Login
      console.log("Logging in with:", {
        email: formData.email,
        password: formData.password,
      });
      try {
        const { response, err } = await authApi.signin({
          username: formData.email,
          password: formData.password,
        });

        if (response) {
          const { jwt, name, userAccountStatus } = response.user;
          const { role } = response;

          console.log(response); // Extract JWT and role from response
          localStorage.setItem("token", jwt);
          localStorage.setItem("role", role);
          localStorage.setItem("active", userAccountStatus);

          dispatch(
            setUser({ name: name, role: role, active: userAccountStatus })
          );
          const data = {
            name: name,
            role: role,
            userAccountStatus: userAccountStatus,
          };

          console.log(data);
          // Redirect based on role
          if (role === "BUYER") {
            navigate("/", {
              state: data,
            });
          } else if (role === "SELLER") {
            navigate("/seller-dashboard");
          } else if (role === "ADMIN") {
            navigate("/admin-dashboard");
          } else {
            console.error("Unknown role:", role);
          }
        } else if (err) {
          console.error("Login failed:", err);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    } else {
      // Handle Sign-Up
      console.log("Signing up with:", formData);
      try {
        const { response, err } = await authApi.signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });

        if (response) {
          alert("Sign-Up Successful! Please log in.");
          setIsLogin(true); // Redirect to the login page
        } else if (err) {
          alert("Sign-Up Failed. Please try again.");
        }
      } catch (error) {
        alert("Sign-Up Failed. Please try again.");
        console.error("Sign-up error:", error);
      }
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
                    value="BUYER"
                    checked={formData.role === "BUYER"}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Buyer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="SELLER"
                    checked={formData.role === "SELLER"}
                    onChange={handleChange}
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
