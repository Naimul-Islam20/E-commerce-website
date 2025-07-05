"use client";

import SkeletonCart from "@/utils/skeletonCart";

export default function ProductLoaderWrapper({ isLoading, error, children, length = 6 }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length }).map((_, i) => (
          <SkeletonCart key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error loading products.</p>;
  }

  return children;
}
