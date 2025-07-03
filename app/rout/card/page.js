"use client";

import {
  getCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/utils/cartSeason";
import { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";

export default function CardPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  const handleIncrease = (id) => {
    increaseQuantity(id);
    setCartItems(getCart());
  };

  const handleDecrease = (id) => {
    decreaseQuantity(id);
    setCartItems(getCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.discount?.discPrice || item.price;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto bg-white   p-6 border-b mb-10">
        <h1 className="text-3xl font-bold  mb-2 text-center">Cart</h1>
        <p className="text-center text-gray-500">
          Review your selected products and quantities
        </p>
      </div>

      {/* 3 Column Layout */}
      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Products */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">No products in cart.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex  md:flex-row items-center justify-between gap-4 border border-gray-300  p-4 rounded-lg shadow-sm bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[120px] h-[120px] object-contain"
                />

                {/* Info Section */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  {item.discount ? (
                    <p className="text-gray-600 mb-2">
                      <span className="line-through text-gray-400 mr-2">
                        ${item.discount.oldPrice}
                      </span>
                      <span className="text-yellow-500 font-semibold">
                        ${item.discount.discPrice}
                      </span>
                    </p>
                  ) : (
                    <p className="text-gray-600 mb-2">${item.price}</p>
                  )}

                  <p className="text-sm    text-gray-500">
                    Quantity: {item.quantity} × $
                    {item.discount?.discPrice || item.price} ={" "}
                    <span className="font-semibold   text-black">
                      $
                      {(
                        item.quantity * (item.discount?.discPrice || item.price)
                      ).toFixed(2)}
                    </span>
                  </p>

                  {/* Quantity Controls */}
                  <div  className="flex w-[90px] items-center border-2 border-gray-300 gap-2 md:px-1 justify-center">
                    <button
                      onClick={() => handleDecrease(item.id)}
                     className="text-gray-400 hover:text-black text-lg"
                    >
                      <FaCaretLeft />
                    </button>
                    <span className="text-sm p-2  w-[20px] font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                     className="text-gray-400  hover:text-black text-lg"
                    >
                      <FaCaretRight />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500  hover:text-red-600 text-3xl  mt-4 md:mt-0"
                >
                  <CiCircleRemove />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Column: Cart Totals */}
        <div className="bg-gray-100   p-6 rounded-lg h-fit ">
          <h2 className="text-xl font-bold mb-4"> Cart Totals</h2>

          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Shipping:</span> Enter your
              address to view shipping options.
            </p>
            <button className="mt-2 px-4 py-2 text-sm">
              Calculate Shipping
            </button>
          </div>

          <div className="border-t pt-4">
            <p className="text-lg font-semibold">
              Total:{" "}
              <span className="text-green-600">
                ${calculateTotal().toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
