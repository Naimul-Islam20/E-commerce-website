"use client";

import { useGetProductsQuery } from "@/features/apiSlice";
import SkeletonCart from "@/utils/skeletonCart";
import CartFunction from "@/utils/cartFunction";

export default function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCart key={i} />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error loading products.</p>;

  const filtered = data?.filter((item) => item.page === "home");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered?.map((item) => (
        <div key={item.id} className="border p-4 rounded text-center">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[300px] object-contain mb-2"
          />
          <h3 className="text-lg font-bold">{item.title}</h3>

          {item.discount ? (
            <p className="text-gray-600 mb-2">
              <span className="line-through text-gray-400 mr-2">
                ${item.discount.oldPrice}
              </span>
              <span className="text-red-600 font-semibold">
                ${item.discount.discPrice}
              </span>
            </p>
          ) : (
            <p className="text-gray-600 mb-2">${item.price}</p>
          )}

          
          <CartFunction item={item} />
        </div>
      ))}
    </div>
  );
}
