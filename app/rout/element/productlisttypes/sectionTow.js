'use client';

import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import Image from 'next/image';
import { useGetProductsQuery } from '@/features/apiSlice';

function HoverOverlay({ onAddToCart, onAddToWishlist, onViewDetails }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 rounded-md">
      <div className="flex gap-4 text-2xl bg-white rounded p-3">
        <FaShoppingCart
          className="hover:text-amber-400 cursor-pointer "
          onClick={onAddToCart}
          title="Add to Cart"/>
        <FaHeart
          className="hover:text-red-500 cursor-pointer"
          onClick={onAddToWishlist}
          title="Add to Wishlist"/>
        <FaEye
          className="hover:text-blue-400 cursor-pointer"
          onClick={onViewDetails}
          title="View Details"/>
      </div>
    </div>
  );
}

export default function SectionTow() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">Failed to load products.</p>;

  const productListItems =
    data?.filter((item) => item.page === 'product-list' && [10, 11, 12, 13].includes(item.id)) || [];

  if (productListItems.length < 4) {
    return (
      <p className="text-center text-yellow-500 mt-10">
        Selected 4 products not found. Found: {productListItems.length}
      </p>
    );
  }

  const [a, b, c, d] = productListItems;

  const handleAddToCart = (item) => alert(`Add to cart clicked for ${item.title}`);
  const handleAddToWishlist = (item) => alert(`Add to wishlist clicked for ${item.title}`);
  const handleViewDetails = (item) => alert(`View details clicked for ${item.title}`);

  return (
    <div className="container mx-auto sm:col-12 md:col-6 lg:col-4 px-16 bg-gray-100">
      <div className="w-full  mx-auto mt-20">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {/* Left two stacked images (a & b) */}
          <div className="flex flex-col gap-4 w-full md:w-[25%] h-[600px]">
            {[a, b].map((item, index) => (
              <div key={index} className="relative h-1/2 overflow-hidden group">
                <Image
                  src={item.img}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={150}
                  className="rounded-md object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2"/>
                  
                <HoverOverlay
                  onAddToCart={() => handleAddToCart(item)}
                  onAddToWishlist={() => handleAddToWishlist(item)}
                  onViewDetails={() => handleViewDetails(item)}
                  
                />
                
              </div>
            ))}
          </div>

          {/* Middle image (c) */}
          <div className="relative w-full md:w-[25%] h-[600px] overflow-hidden group">
            <Image
              src={c.img}
              alt="Medium image"
              width={400}
              height={300}
              className="rounded-md object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2"
            />
            <HoverOverlay
              onAddToCart={() => handleAddToCart(c)}
              onAddToWishlist={() => handleAddToWishlist(c)}
              onViewDetails={() => handleViewDetails(c)}
            />
          </div>

          {/* Right image (d) */}
          <div className="relative w-full md:w-[50%] h-[600px] overflow-hidden group">
            <Image
              src={d.img}
              alt="Large image"
              width={600}
              height={300}
              className="rounded-md object-cover w-full h-full transition-transform duration-300 group-hover:-translate-y-2"
            />
     
            <HoverOverlay
              onAddToCart={() => handleAddToCart(d)}
              onAddToWishlist={() => handleAddToWishlist(d)}
              onViewDetails={() => handleViewDetails(d)}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
