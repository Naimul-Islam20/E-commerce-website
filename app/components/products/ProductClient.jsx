"use client";

import { useGetProductsQuery } from "@/features/apiSlice";
import SkeletonCard from "./SkeletonCard";

export default function ProductClient() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">Failed to load products.</p>
    );
  }

  // 🔥 শুধুমাত্র page === "home" filter করলাম
  const homeProducts = data?.filter((prod) => prod.page === "home");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {homeProducts?.map((prod, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={prod.img}
            alt={prod.title}
            className="w-full h-[420px] object-contain"
          />
          <h3 className="text-lg font-semibold text-black text-center mt-2">
            {prod.title}
          </h3>

          {/* 🏷️ ডিসকাউন্ট চেক করে শো করি */}
          {prod.discount  ? (
            <p className="text-black text-center">
              <span className="line-through text-gray-400">
                Price: ${prod.discount.oldPrice}
              </span>
              <span className="ml-2 bg-amber-300 px-2 py-1 rounded">
                ${prod.discount.discPrice}
              </span>
            </p>
          ) : (
            <p className="text-black text-center">Price: ${prod.price}</p>
          )}
        </div>
      ))}
    </div>
  );
}
