import React, { useState, useEffect } from "react";

export const ReviewsTab = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    // Simulate fetching reviews
    const fakeReviews = [
      {
        id: 101,
        content: "Absolutely love this product! The quality is top-notch.",
        author: "Alice Johnson",
        rating: 5,
        createdAt: new Date().toLocaleString(),
      },
      {
        id: 102,
        content: "Not what I expected. The color was different than shown.",
        author: "Bob Smith",
        rating: 2,
        createdAt: new Date(Date.now() - 86400000).toLocaleString(), // 1 day ago
      },
      {
        id: 103,
        content: "Fast delivery and excellent service. Highly recommended!",
        author: "Catherine Lee",
        rating: 4,
        createdAt: new Date(Date.now() - 172800000).toLocaleString(), // 2 days ago
      },
      {
        id: 104,
        content: "Terrible product. Broke within a week of use.",
        author: "David Brown",
        rating: 1,
        createdAt: new Date(Date.now() - 604800000).toLocaleString(), // 7 days ago
      },
      {
        id: 105,
        content: "Good value for money. Will buy again!",
        author: "Ella Davis",
        rating: 5,
        createdAt: new Date(Date.now() - 259200000).toLocaleString(), // 3 days ago
      },
    ];

    setReviews(fakeReviews);
  }, []);

  const handleApproveReview = (reviewId) => {
    setReviews((prev) => prev.filter((review) => review.id !== reviewId));
    setSelectedReview(null);
  };

  const handleDeleteReview = (reviewId) => {
    setReviews((prev) => prev.filter((review) => review.id !== reviewId));
    setSelectedReview(null);
  };

  const openModal = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Buyer Reviews
      </h2>

      {/* Reviews Section */}
      {reviews.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="flex flex-col justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(review)}
            >
              <div>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.rating ? "gold" : "gray"}
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-2">"{review.content}"</p>
                <p className="text-sm text-gray-500 mb-1">- {review.author}</p>
                <p className="text-xs text-gray-400">{review.createdAt}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No pending reviews</p>
      )}

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Review Details
            </h3>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < selectedReview.rating ? "gold" : "gray"}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "{selectedReview.content}"
            </p>
            <p className="text-sm text-gray-500 mb-6">
              - {selectedReview.author}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleApproveReview(selectedReview.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
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
