import React from "react";

export const TiitleBar = ({ title }) => {
  return (
    <div className="flex items-center w-[80%] mx-auto mt-32">
      {/* Left Indicator */}
      <div className="h-8 w-2 bg-red-500 rounded-md"></div>

      {/* Title */}
      <h2 className="text-red-600 text-xl font-bold ml-3">Today's</h2>
    </div>
  );
};
