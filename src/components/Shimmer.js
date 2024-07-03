import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 m-4 bg-gray-800 animate-pulse">
      <div className="h-6 bg-gray-600 rounded mb-4"></div>
      <div className="h-6 bg-gray-600 rounded mb-4"></div>
      <div className="h-6 bg-gray-600 rounded mb-4"></div>
      <div className="h-6 bg-gray-600 rounded mb-4"></div>
      <div className="h-6 bg-gray-600 rounded mb-4"></div>
    </div>
  );
};

export default Shimmer;
