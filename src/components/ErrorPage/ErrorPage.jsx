import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Oops! Page not found.</p>
      <p className="text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded-lg transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
