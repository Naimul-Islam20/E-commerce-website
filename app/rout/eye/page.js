"use client";

import { useGetProductsQuery } from "@/features/apiSlice";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { addToCart } from "@/utils/cartSeason";

export default function EyePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = parseInt(searchParams.get("id"));
  const { data: products, isLoading } = useGetProductsQuery();
  const [quantity, setQuantity] = useState(1);

  const product = products?.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      router.push("/rout/card");
    }
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (isLoading || !product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-[500px] object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        {product.discount ? (
          <p className="text-gray-600 mb-2">
            <span className="line-through text-gray-400 mr-2">
              ${product.discount.oldPrice}
            </span>
            <span className="text-red-600 font-semibold">
              ${product.discount.discPrice}
            </span>
          </p>
        ) : (
          <p className="text-gray-600 mb-2">${product.price}</p>
        )}

        {/* Quantity Control */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={handleDecrease}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
          >
            <FaCaretLeft />
          </button>
          <span className="text-md p-2 w-[35px] font-semibold text-center">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
          >
            <FaCaretRight />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
