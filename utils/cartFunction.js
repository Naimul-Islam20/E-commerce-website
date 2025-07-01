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

  if (isAdded) {
    return (
      <button
        onClick={() => router.push("/rout/card")}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        <HiShoppingBag size={20}/>
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
    >
      <MdShoppingCart size={20} />
      
    </button>
  );
}
