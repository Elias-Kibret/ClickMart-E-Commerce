import React from "react";
import { FiClock } from "react-icons/fi";

export const Pending = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Pending Icon */}
      <div className="flex items-center justify-center w-20 h-20 bg-yellow-200 rounded-full mb-6">
        <FiClock className="text-yellow-600 text-4xl" />
      </div>

      {/* Pending Message */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Profile is Pending Approval
      </h1>

      <p className="text-gray-600 text-center max-w-md mb-4">
        Thank you for signing up! Your request is under review. Please wait for
        the admin to approve your profile. We’ll notify you as soon as your
        account is approved.
      </p>

      {/* Additional Info */}
      <div className="text-gray-500 text-sm text-center">
        If you have any questions, feel free to{" "}
        <a href="/contact" className="text-blue-600 underline">
          contact us
        </a>
        .
      </div>
    </div>
  );
};
