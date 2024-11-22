import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { Pending } from "../pending/Pending"; // Import the Pending component

export const SellerDashBoard = () => {
  const user = useSelector(selectUser);

  console.log(user);

  // Render Pending component if the user status is "DEACTIVATE"
  if (user?.active === "DEACTIVETE") {
    return <Pending />;
  }

  // Render the Dashboard if the user status is "ACTIVE"
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Seller Dashboard
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        {/* User Information */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Welcome, {user?.name}!
        </h2>
        <p className="text-gray-600 mb-4">
          Role: <span className="font-medium">{user?.role}</span>
        </p>
        <p className="text-gray-600 mb-4">
          Status:{" "}
          <span
            className={`font-medium ${
              user?.active === "ACTIVE" ? "text-green-600" : "text-red-600"
            }`}
          >
            {user?.active === "ACTIVE" ? "Active" : "Inactive"}
          </span>
        </p>

        {/* Dashboard Content */}
        <div className="text-gray-700">
          <p>
            Here you can manage your seller profile, view product statistics,
            and access tools to grow your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashBoard;