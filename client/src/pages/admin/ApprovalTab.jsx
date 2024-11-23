import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, selectAllUsers } from "../../features/user/userSlice";
import userApi from "../../api/modules/user.api";

export const ApprovalTab = () => {
  const [pendingSellers, setPendingSellers] = useState([]); // State for filtered users (DEACTIVETE)
  const [selectedSeller, setSelectedSeller] = useState(null); // Stores the currently selected seller for the modal
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers); // Get all users from Redux

  // Fetch all users and filter pending sellers
  useEffect(() => {
    const fetchAndFilterUsers = async () => {
      try {
        const user = await userApi.getUserList();
        console.log(user);
        dispatch(setUsers(user.response)); // Save all users in Redux
        const filtered = user.response.filter(
          (user) => user.userAccountStatus === "DEACTIVETE"
        );
        console.log(filtered);
        setPendingSellers(filtered); // Save filtered users to pendingSellers
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchAndFilterUsers();
  }, [dispatch]);
  console.log(pendingSellers);
  console.log(allUsers);
  const handleApproveSeller = async (sellerId) => {
    try {
      console.log(`Activating user with ID: ${sellerId}`);
      const { response, err } = await userApi.activateUser(sellerId);
      console.log(response);
      if (response) {
        console.log(`User with ID ${sellerId} activated.`);
        setPendingSellers((prev) =>
          prev.filter((seller) => seller.id !== sellerId)
        ); // Remove the user from the pending list
        setSelectedSeller(null); // Close the modal
      } else {
        console.error(`Error activating user with ID ${sellerId}:`, err);
      }
    } catch (error) {
      console.error(`Error activating user with ID ${sellerId}:`, error);
    }
  };

  const handleRejectSeller = async (sellerId) => {
    try {
      console.log(`Rejecting seller with ID: ${sellerId}`);
      // Add an API call here if required to reject the seller
      setPendingSellers((prev) =>
        prev.filter((seller) => seller.id !== sellerId)
      ); // Remove the rejected seller from the list
      setSelectedSeller(null); // Close modal
    } catch (error) {
      console.error(`Error rejecting seller with ID ${sellerId}:`, error);
    }
  };

  const openModal = (seller) => {
    setSelectedSeller(seller); // Open modal with selected seller
  };

  const closeModal = () => {
    setSelectedSeller(null); // Close modal
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          Pending Seller Approvals
        </h2>

        {/* Pending Sellers Section */}
        {allUsers?.length > 0 ? (
          <ul className="space-y-4">
            {pendingSellers.map((seller) => (
              <li
                key={seller.userId}
                className="flex items-center justify-between bg-white border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md hover:border-blue-400 transition duration-200 cursor-pointer"
                onClick={() => openModal(seller)} // Open modal on click
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center h-12 w-12 bg-blue-500 text-white rounded-full font-semibold">
                    {seller.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {seller.name}
                    </p>
                    <p className="text-sm text-gray-500">{seller.email}</p>
                  </div>
                </div>
                <div className="text-blue-500 font-bold">View Details</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center mt-8">No pending sellers</p>
        )}

        {/* Modal */}
        {selectedSeller && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-200"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Seller Details
              </h3>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Name:</strong> {selectedSeller.name}
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> {selectedSeller.email}
                </p>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => handleApproveSeller(selectedSeller.userId)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleRejectSeller(selectedSeller.userId)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-200"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
