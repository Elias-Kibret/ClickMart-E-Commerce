import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { Pending } from "../pending/Pending"; // Import the Pending component
import { FiShoppingBag, FiUsers, FiBarChart2 } from "react-icons/fi";

export const SellerDashBoard = () => {
  const user = useSelector(selectUser);

  console.log(user);

  // Render Pending component if the user status is "DEACTIVATE"
  if (user?.active === "DEACTIVETE") {
    return <Pending />;
  }

  // Render the Dashboard if the user status is "ACTIVE"
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user?.name}!</h1>
        <p className="text-lg mt-2">
          Your seller dashboard is ready to help you grow your business.
        </p>
      </div>

      {/* User Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-gray-700 text-lg font-semibold">Your Role</h2>
          <p className="text-gray-500 mt-2">{user?.role}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-gray-700 text-lg font-semibold">
            Account Status
          </h2>
          <p
            className={`mt-2 font-medium ${
              user?.active === "ACTIVE" ? "text-green-600" : "text-red-600"
            }`}
          >
            {user?.active === "ACTIVE" ? "Active" : "Inactive"}
          </p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-gray-700 text-lg font-semibold">Membership</h2>
          <p className="text-gray-500 mt-2">Premium Seller</p>
        </div>
      </div>

      {/* Dashboard Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
          <FiShoppingBag className="text-blue-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">My Products</h3>
            <p className="text-gray-500">
              Manage and add products to your store
            </p>
          </div>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
          <FiBarChart2 className="text-green-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Statistics</h3>
            <p className="text-gray-500">
              View sales performance and analytics
            </p>
          </div>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
          <FiUsers className="text-purple-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Customer Reviews
            </h3>
            <p className="text-gray-500">Check and respond to buyer feedback</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default SellerDashBoard;
