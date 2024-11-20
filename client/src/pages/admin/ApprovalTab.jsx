import React, { useState, useEffect } from "react";

export const ApprovalTab = () => {
  const [pendingSellers, setPendingSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(null); // Stores the currently selected seller for the modal

  useEffect(() => {
    // Simulate fetching sellers
    const fakePendingSellers = [
      { id: 1, name: "Seller A", email: "sellerA@example.com" },
      { id: 2, name: "Seller B", email: "sellerB@example.com" },
    ];
    setPendingSellers(fakePendingSellers);
  }, []);

  const handleApproveSeller = (sellerId) => {
    setPendingSellers((prev) =>
      prev.filter((seller) => seller.id !== sellerId)
    );
    setSelectedSeller(null); // Close modal
  };

  const handleRejectSeller = (sellerId) => {
    setPendingSellers((prev) =>
      prev.filter((seller) => seller.id !== sellerId)
    );
    setSelectedSeller(null); // Close modal
  };

  const openModal = (seller) => {
    setSelectedSeller(seller); // Open modal with selected seller
  };

  const closeModal = () => {
    setSelectedSeller(null); // Close modal
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pending Seller Approvals</h2>

      {/* Pending Sellers Section */}
      {pendingSellers.length > 0 ? (
        <ul className="space-y-4">
          {pendingSellers.map((seller) => (
            <li
              key={seller.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50 cursor-pointer hover:bg-gray-100"
              onClick={() => openModal(seller)} // Open modal on click
            >
              <div>
                <p className="font-medium">{seller.name}</p>
                <p className="text-sm text-gray-500">{seller.email}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No pending sellers</p>
      )}

      {/* Modal */}
      {selectedSeller && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Seller Details</h3>
            <p className="mb-2">
              <strong>Name:</strong> {selectedSeller.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {selectedSeller.email}
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => handleApproveSeller(selectedSeller.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleRejectSeller(selectedSeller.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
