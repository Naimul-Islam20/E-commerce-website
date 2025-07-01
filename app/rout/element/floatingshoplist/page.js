"use client";
import { useGetProductsQuery } from "@/features/apiSlice";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import Image from "next/image";


export default function ThirdSection() {
  const { data, error } = useGetProductsQuery();

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">Failed to load products.</p>
    );
  }

  const productListItems = data?.filter((item) => item.page === "product-list") || [];
  const SliceData = productListItems.slice(0, 6);

  const handleAddToCart = (item) => {
    alert(`🛒 Added to cart: ${item.title}`);
  };
  const handleAddToWishlist = (item) => {
    alert(`❤️ Added to wishlist: ${item.title}`);
  };
  const handleViewDetails = (item) => {
    alert(`👁️ View details: ${item.title}`);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {SliceData.map((item) => (
            <div key={item.id} className="relative group overflow-hidden">
              <div className="relative w-full h-screen bg-gray-200">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103 group-hover:brightness-60"
                />

                {/* Overlay with icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                  <div className="flex gap-4 text-2xl bg-white p-4 rounded-md shadow-md">
                    <FaShoppingCart
                      className="hover:text-amber-400 cursor-pointer"
                      title="Add to Cart"
                      onClick={() => handleAddToCart(item)} />
                    <FaHeart
                      className="hover:text-red-500 cursor-pointer"
                      title="Add to Wishlist"
                      onClick={() => handleAddToWishlist(item)} />
                    <FaEye
                      className="hover:text-blue-400 cursor-pointer"
                      title="View Details"
                      onClick={() => handleViewDetails(item)} />
                  </div>
                </div>
              </div>              
            </div>
          ))}
        </div>         
        </div>
      </div>
    
  );
}
