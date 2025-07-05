"use client";

import { useGetProductsQuery } from "@/features/apiSlice";
import HoverButtons from "@/utils/common/HoverButtons";
import Loader from "@/utils/Loader";

export default function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();
  const filtered = data?.filter((item) => item.page === "home");

  return (
    <Loader isLoading={isLoading} error={error} length={6}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered?.map((item) => (
          <div
            key={item.id}
            className="text-center relative group overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[345px] object-contain mb-2 transition duration-300"
              />
              <HoverButtons item={item} />
            </div>

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
          </div>
        ))}
      </div>
    </Loader>
  );
}
