"use client";
import { useGetProductsQuery } from "@/features/apiSlice";
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import Image from "next/image";

export default function SectionPage() {
  const { data, error } = useGetProductsQuery();

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">Failed to load products.</p>
    );
  }

  const productListItems = data?.filter((item) => item.page === "product-list");
  const SliceData = productListItems ? productListItems.slice(7, 10) : [];

  // 👉 হ্যান্ডলার ফাংশন
  const handleAddToCart = (item) => {
    alert(`🛒 Added to cart: ${ item.title}`);
  };

  const handleAddToWishlist = (item) => {
    alert(`❤️ Added to wishlist: ${item.title}`);
  };

  const handleViewDetails = (item) => {
    alert(`👁️ View details: ${item.title}`);
  };

  return (
    <div className="container mx-auto sm:col-12 md:col-6 lg:col-4 px-16 bg-gray-100 pb-20 pt-10">
      <h2 className="text-3xl font-bold mb-6 text-left">Standard List</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SliceData?.map((item, index) => (
          <div key={item.id} className="overflow-hidden text-center">
            <div className="relative group h-100 w-full">
              <Image
                src={item.img}
                alt={`Product image ${index + 1}`}
                fill
                className="rounded-md object-cover w-full h-full transition-transform duration-300 group-hover:-translate-x-2"
              />

              {/* Hover Icons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                <div className="flex gap-4 text-2xl bg-white p-4 rounded-md shadow-md">
                  <FaShoppingCart
                    className="hover:text-amber-400 cursor-pointer transition"
                    onClick={() => handleAddToCart(item)}
                  />
                  <FaHeart
                    className="hover:text-red-500 cursor-pointer transition"
                    onClick={() => handleAddToWishlist(item)}
                  />
                  <FaEye
                    className="hover:text-blue-400 cursor-pointer transition"
                    onClick={() => handleViewDetails(item)}
                  />
                </div>
              </div>
            </div>

            {/* Title, Rating, Price */}
            <div className="mt-4 flex flex-col items-center justify-center text-center space-y-2">
              <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
              <p>★★★☆☆</p>
              {item.discount  ? (
            <p className="text-black text-center">
              <span className="line-through text-gray-400">
                Price: ${item.discount.oldPrice}
              </span>
              <span className="ml-2 bg-amber-300 px-2 py-1 rounded">
                ${item.discount.discPrice}
              </span>
            </p>
          ) : (
            <p className="text-black text-center">Price: ${item.price}</p>
          )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
