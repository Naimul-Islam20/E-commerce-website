"use client";
import { useGetProductsQuery } from "@/features/apiSlice";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import Image from "next/image";

export default function SectionPage() {
  const { data, error } = useGetProductsQuery();

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">Failed to load products.</p>
    );
  }

  const productListItems = data?.filter((item) => item.page === "product-list");
  const SliceData = productListItems ? productListItems.slice(0, 3) : [];

  // 👉 Icon click handler functions
  const handleAddToCart = (item) => {
    alert(`🛒 Added to cart: item.title`);
  };

  const handleAddToWishlist = (item) => {
    alert(`❤️ Added to wishlist: item.title`);
  };

  const handleViewDetails = (item) => {
    alert(`👁️ View details: item.title`);
  };

  return (
    <div>
      <section className="container mx-auto px-20 pt-20 pb-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-left">Standard List</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SliceData?.map((item) => (
            <div key={item.id} className="overflow-hidden text-center relative group">
              <div className="relative h-[300px] w-full rounded-md overflow-hidden">

                {/* Product Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-60"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 z-10 px-4">

                  {/* Price */}
                  {item.discount ? (
                    <>
                      <h3 className="text-lg font-semibold line-through text-gray-300">
                        ${item.discount.oldPrice}
                      </h3>
                      <h3 className="text-xl font-bold bg-amber-400 text-black px-3 py-1 rounded mt-1">
                        ${item.discount.discPrice}
                      </h3>
                    </>
                  ) : (
                    <h3 className="text-xl font-semibold">${item.price}</h3>
                  )}

                  {/* Action Icons */}
                  <div className="flex gap-4 mt-4 text-xl bg-white p-3 rounded shadow-md text-black">
                    <FaShoppingCart
                      onClick={() => handleAddToCart(item)}
                      className="hover:text-amber-500 cursor-pointer transition"/>
                    <FaHeart
                      onClick={() => handleAddToWishlist(item)}
                      className="hover:text-red-500 cursor-pointer transition"/>
                    <FaEye
                      onClick={() => handleViewDetails(item)}
                      className="hover:text-blue-500 cursor-pointer transition"/>
                  </div>
                </div>
              </div>

              {/* Title (Always visible) */}
              <h3 className="mt-3 text-lg font-semibold text-black">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
