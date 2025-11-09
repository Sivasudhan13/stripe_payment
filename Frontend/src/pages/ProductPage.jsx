// src/pages/ProductPage.jsx
import React, { useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);

  // 🧩 Sample products
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
      price: 99.99,
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and stay connected.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      price: 149.99,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable sound system for your adventures.",
      image: "https://images.unsplash.com/photo-1602526218033-745cb7206121",
      price: 59.99,
    },
  ];

  // 💳 Stripe checkout
  const handleBuyNow = async (product) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        { product }
      );
      window.location.href = response.data.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong while processing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Featured Products
      </h1>

      {loading && (
        <div className="text-center text-blue-600 mb-6">
          Redirecting to payment...
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
