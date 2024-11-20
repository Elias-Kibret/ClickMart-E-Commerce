import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { ApprovalTab, ReviewsTab } from "./index";

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Tabs Navigation */}
      <nav className="flex justify-center mb-6">
        <NavLink
          to="/approvals"
          className={({ isActive }) =>
            `px-6 py-2 mx-2 rounded-lg font-medium text-lg ${
              isActive ? "bg-blue-600 text-white" : "bg-white text-gray-600"
            } hover:bg-blue-500 hover:text-white`
          }
        >
          Approvals
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `px-6 py-2 mx-2 rounded-lg font-medium text-lg ${
              isActive ? "bg-blue-600 text-white" : "bg-white text-gray-600"
            } hover:bg-blue-500 hover:text-white`
          }
        >
          Reviews
        </NavLink>
      </nav>

      {/* Tab Content */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Routes>
          <Route path="/approvals" element={<ApprovalTab />} />
          <Route path="/reviews" element={<ReviewsTab />} />
        </Routes>
      </div>
    </div>
  );
};
