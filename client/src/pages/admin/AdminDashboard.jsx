import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { ApprovalTab, ReviewsTab } from "./index";

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Manage user approvals, reviews, and more with ease.
        </p>
      </header>
    </div>
  );
};
