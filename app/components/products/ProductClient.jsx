"use client";

import { useGetProductsQuery } from "@/features/apiSlice";
import SkeletonCart from "@/utils/skeletonCart";
import CartFunction from "@/utils/cartFunction";
import ViewImageButton from "@/utils/eyeFeatur/eyeFeatur"; // ✅ Use this
import { IoIosHeart } from "react-icons/io";

export default function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCart key={i} />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error loading products.</p>;

  const filtered = data?.filter((item) => item.page === "home");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filtered?.map((item) => (
        <div
          key={item.id}
          className="   text-center relative group overflow-hidden"
        >
          {/* Image with blur on hover */}
          <div className="relative">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[345px] object-contain mb-2 transition duration-300 "
            />

            {/* Buttons on hover */}
            {/* Buttons on hover */}
            <div className="absolute  p-2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <CartFunction item={item} />

              <ViewImageButton id={item.id} />
              <button className=" px-4 py-2 text-2xl   border-s-2  border-gray-300  ">
                <IoIosHeart className="hover:-translate-y-1 duration-200 transform  transition-all " />
              </button>
            </div>
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

          {/* Remove below buttons since they're now in hover overlay */}
          <div className="flex justify-center gap-4 mt-4"></div>
        </div>
      ))}
    </div>
  );
}
