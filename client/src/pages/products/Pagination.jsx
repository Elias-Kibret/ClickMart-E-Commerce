export const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button className="text-gray-500 hover:text-gray-800">Previous</button>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            {page}
          </button>
        ))}
      </div>
      <button className="text-gray-500 hover:text-gray-800">Next</button>
    </div>
  );
};
