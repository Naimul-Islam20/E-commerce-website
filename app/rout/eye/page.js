"use client";

import { useGetProductsQuery } from "@/features/apiSlice";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { addToCart } from "@/utils/cartSeason";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // ✅ এটি নতুন যোগ হয়েছে

export default function EyeModal({ id, onClose }) {
  const { data: products } = useGetProductsQuery();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products) {
      const found = products.find((item) => item.id === id);
      setProduct(found);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      onClose();
    }
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return null;

  // ✅ Modal JSX — unchanged
  const modalContent = (
    <div className="fixed inset-0 bg-opacity-50 backdrop-brightness-50 z-50 flex justify-center items-center px-2">
      <div className="bg-white w-full max-w-[1000px] sm:h-[360px] md:h-[500px] overflow-hidden relative grid grid-cols-2">
        {/* Left Column - Image */}
        <div className="bg-gray-100 flex">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full sm:max-h-[360px] md:max-h-full"
          />
        </div>

        {/* Right Column - Info */}
        <div className="relative flex bg-white flex-col justify-center items-start ps-4 sm:ps-13 pe-4 sm:pe-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          >
            &times;
          </button>

          <h1 className="text-base sm:text-lg md:text-3xl font-bold mb-3 text-center">
            {product.title}
          </h1>

          {product.discount ? (
            <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-lg">
              <span className="line-through text-gray-400 mr-2">
                ${product.discount.oldPrice}
              </span>
              <span className="text-red-600 font-semibold">
                ${product.discount.discPrice}
              </span>
            </p>
          ) : (
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
              ${product.price}
            </p>
          )}

          <p className="text-gray-700 text-start text-xs sm:text-sm md:text-base mb-3">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>

          <div className="flex gap-2 w-full">
            <div className="flex items-center border-2 border-gray-300 gap-2 md:px-1 justify-center">
              <button
                onClick={handleDecrease}
                className="text-gray-400 hover:text-black text-lg"
              >
                <FaCaretLeft />
              </button>
              <span className="text-sm font-semibold text-center w-[20px]">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="text-gray-400 hover:text-black text-lg"
              >
                <FaCaretRight />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-gray-950 text-white px-3 sm:px-6 md:px-14 lg:px-18 text-xs sm:text-sm md:text-base hover:bg-blue-600 duration-200 py-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ✅ এইখানে শুধুমাত্র portal এ রেন্ডার করলাম
  return ReactDOM.createPortal(modalContent, document.body);
}
