import React from 'react';

const ProductDetailCard = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-2xl p-6 rounded-lg shadow-2xl relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <ul className="text-gray-600 list-disc pl-5 space-y-1 mb-4">
          <li>High quality videos with 24/7 live doubt solving.</li>
          <li>Value for money</li>
          <li>Customer rated: 4.8/5</li>
        </ul>

        <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
