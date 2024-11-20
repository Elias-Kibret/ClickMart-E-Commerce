import React, { useState, useEffect } from "react";

export const ReviewsTab = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null); // Holds the currently selected review for the modal

  useEffect(() => {
    // Simulate fetching reviews
    const fakeReviews = [
      { id: 101, content: "Great product!", author: "User123" },
      { id: 102, content: "Not as expected.", author: "User456" },
    ];
    setReviews(fakeReviews);
  }, []);

  const handleApproveReview = (reviewId) => {
    setReviews((prev) => prev.filter((review) => review.id !== reviewId));
    setSelectedReview(null); // Close modal
  };

  const handleDeleteReview = (reviewId) => {
    setReviews((prev) => prev.filter((review) => review.id !== reviewId));
    setSelectedReview(null); // Close modal
  };

  const openModal = (review) => {
    setSelectedReview(review); // Open modal with selected review
  };

  const closeModal = () => {
    setSelectedReview(null); // Close modal
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Buyer Reviews</h2>

      {/* Pending Reviews Section */}
      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50 cursor-pointer hover:bg-gray-100"
              onClick={() => openModal(review)} // Open modal on click
            >
              <div>
                <p className="italic">"{review.content}"</p>
                <p className="text-sm text-gray-500">- {review.author}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No pending reviews</p>
      )}

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Review Details</h3>
            <p className="italic mb-2">"{selectedReview.content}"</p>
            <p className="text-sm text-gray-500 mb-6">
              - {selectedReview.author}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleApproveReview(selectedReview.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleDeleteReview(selectedReview.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
