"use client";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";

export default function HoverOverlay({ onAddToCart, onAddToWishlist, onViewDetails }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500 p-4">
      <div className="flex gap-4 text-2xl bg-white p-4 rounded-md shadow-md">
        <FaShoppingCart
          className="hover:text-amber-400 cursor-pointer"
          onClick={onAddToCart}
        />
        <FaHeart
          className="hover:text-red-500 cursor-pointer"
          onClick={onAddToWishlist}
        />
        <FaEye
          className="hover:text-blue-400 cursor-pointer"
          onClick={onViewDetails}
        />
      </div>
    </div>
  );
}

