"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addToCart, getCart } from "@/utils/cartSeason";
import { MdShoppingCart } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";

export default function CartFunction({ item }) {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const ids = getCart().map((cartItem) => cartItem.id);
    setIsAdded(ids.includes(item.id));
  }, [item.id]);

  const handleAdd = () => {
    addToCart(item);
    setIsAdded(true);
  };

  return (
    <button
      onClick={() => {
        if (isAdded) {
          router.push("/rout/card");
        } else {
          handleAdd();
        }
      }}
      className=" px-3  h-10 
 py-2   flex items-center justify-center  text-2xl transition-all "
    >
      {isAdded ? (
        <HiShoppingBag
          className="hover:-translate-y-1 duration-200 transform  transition-all "
          size={20}
        />
      ) : (
        <MdShoppingCart
          className="hover:-translate-y-1 transform duration-200  transition-all "
          size={20}
        />
      )}
    </button>
  );
}
