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
      className="bg-blue-600 text-white px-3 w-10 h-10 
 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 transition-all duration-200"
    >
      {isAdded ? <HiShoppingBag size={20} /> : <MdShoppingCart size={20} />}
    </button>
  );
}
