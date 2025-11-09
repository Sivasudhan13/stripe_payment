import React from "react";

const SuccessPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful ✅
        </h1>
        <p>Thank you for your purchase!</p>

        <a
          href="/"
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
