import React from "react";
import {
  FiClipboard,
  FiUsers,
  FiBarChart,
  FiMessageSquare,
  FiSettings,
  FiActivity,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { motion } from "framer-motion";

export const AdminDashboard = () => {
  const user = useSelector(selectUser);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Welcome Header */}
      <motion.div
        className="bg-white p-8 rounded-xl shadow-md mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-extrabold text-gray-800">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-3">
          Manage approvals, reviews, and platform analytics from your admin
          dashboard.
        </p>
      </motion.div>

      {/* Admin Info Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "Role",
            content: user?.role,
            icon: <FiUsers className="text-gray-700 text-5xl" />,
          },
          {
            title: "Account Status",
            content: user?.active === "ACTIVE" ? "Active" : "Inactive",
            color:
              user?.active === "ACTIVE" ? "text-green-600" : "text-red-600",
            icon: <FiActivity className="text-gray-700 text-5xl" />,
          },
          {
            title: "Privileges",
            content: "Full Admin Access",
            icon: <FiSettings className="text-gray-700 text-5xl" />,
          },
        ].map((info, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6 hover:shadow-lg transition duration-300"
            variants={cardVariants}
          >
            {info.icon}
            <div>
              <h2 className="text-gray-700 text-xl font-semibold">
                {info.title}
              </h2>
              <p className={`text-gray-600 ${info.color || ""} mt-1 text-lg`}>
                {info.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "Approvals",
            description: "Manage pending user and seller approvals.",
            icon: <FiClipboard className="text-gray-700 text-6xl" />,
          },
          {
            title: "Reviews",
            description: "Monitor and manage customer reviews.",
            icon: <FiMessageSquare className="text-gray-700 text-6xl" />,
          },
          {
            title: "Statistics",
            description: "Analyze platform performance and trends.",
            icon: <FiBarChart className="text-gray-700 text-6xl" />,
          },
          {
            title: "Users",
            description: "Manage all users and their roles.",
            icon: <FiUsers className="text-gray-700 text-6xl" />,
          },
          {
            title: "Settings",
            description: "Configure platform settings and policies.",
            icon: <FiSettings className="text-gray-700 text-6xl" />,
          },
          {
            title: "Activity Logs",
            description: "Track platform activities and changes.",
            icon: <FiActivity className="text-gray-700 text-6xl" />,
          },
        ].map((action, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-6 hover:shadow-lg transition duration-300 cursor-pointer"
            variants={cardVariants}
          >
            {action.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {action.title}
              </h3>
              <p className="text-gray-600 mt-1">{action.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
