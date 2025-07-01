// components/ViewImageButton.jsx

"use client";
import { useRouter } from "next/navigation";

export default function ViewImageButton({ id }) {
  const router = useRouter();

  const handleView = () => {
    router.push(`/rout/eye?id=${id}`);
  };

  return (
    <button
      onClick={handleView}
      className="mt-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Im
    </button>
  );
}
