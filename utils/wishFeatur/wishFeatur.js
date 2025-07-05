
"use client";

import { addToWish } from "@/utils/wishFeatur/wishSession";
import { IoIosHeart } from "react-icons/io";

export default function WishFeatur({ item }) {
  const handleWish = () => {
    addToWish(item);
  };

  return (
    <button
      onClick={handleWish}
      className="px-4 py-2 text-2xl border-s-2 border-gray-300"
    >
      <IoIosHeart className="hover:-translate-y-1 duration-200 transform transition-all" />
    </button>
  );
}

