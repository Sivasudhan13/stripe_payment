import React from "react";

const CancelPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Payment Cancelled ❌
        </h1>
        <p>Your payment has been cancelled. Try again later.</p>

        <a
          href="/"
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default CancelPage;
