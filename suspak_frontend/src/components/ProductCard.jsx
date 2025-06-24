import React from 'react';

const ProductCard = ({ name, description, image, onViewMore }) => {
  return (
    <div className="relative w-80 bg-white shadow-lg rounded-xl overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />

        <button
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-1 rounded-md opacity-90 hover:opacity-100 transition"
          onClick={onViewMore}
        >
          View More
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-3">{description}</p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
