// utils/common/HoverButtons.jsx

"use client";
import CartFunction from "@/utils/cartFunction";
import ViewImageButton from "@/utils/eyeFeatur/eyeFeatur";
import WishFeatur from "@/utils/wishFeatur/wishFeatur";

export default function HoverButtons({ item }) {
  return (
    <div className="absolute p-2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
      <CartFunction item={item} />
      <ViewImageButton id={item.id} />
      <WishFeatur item={item} />
    </div>
  );
}
