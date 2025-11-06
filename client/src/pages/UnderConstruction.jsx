import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        🚧 Under Construction
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-6">
        We’re working hard to bring you something amazing. Stay tuned!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200"
      >
        Home
      </Link>
    </div>
  );
};

export default UnderConstruction;
