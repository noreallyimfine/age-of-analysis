import React from "react";

const WinnerBanner = ({ winner }) => {
  return (
    <div
      className="relative bg-cover bg-center mx-auto mt-6 w-3/4 h-64 flex items-center justify-center rounded-lg shadow-lg border border-gray-300"
      style={{
        backgroundImage: "url('/images/winner-background.webp')",
      }}
    >
      <div className="absolute top-4 bg-white bg-opacity-80 p-4 rounded-lg border border-gray-400 text-center shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Winner</h1>
        <p className="text-lg font-medium text-gray-600">{winner}</p>
      </div>
    </div>
  );
};

export default WinnerBanner;
