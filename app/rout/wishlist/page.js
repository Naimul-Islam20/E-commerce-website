
"use client";

import { getWish, removeFromWish } from "@/utils/wishFeatur/wishSession";
import { useEffect, useState } from "react";
import { addToCart } from "@/utils/cartSeason";

export default function WishListPage() {
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    setWishItems(getWish());
  }, []);

  const handleRemove = (id) => {
    removeFromWish(id);
    setWishItems(getWish());
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>

      {wishItems.length === 0 ? (
        <p className="text-center text-gray-600">No products in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg shadow-sm"
            >
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-2xl"
              >
                ✕
              </button>
              <img
                src={item.img}
                alt={item.title}
                className="w-[100px] h-[100px] object-contain"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">
                  ${item.discount?.discPrice || item.price}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-black text-white px-4 py-2 text-sm hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
