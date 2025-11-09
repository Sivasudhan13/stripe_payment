// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onBuyNow }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">
          ${product.price}
        </span>
        <button
          onClick={() => onBuyNow(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
