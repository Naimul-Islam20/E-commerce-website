
export default function SkeletonCard() {
  return (
    <div className="flex flex-col items-center animate-pulse">
      <div className="w-full h-[420px] bg-gray-300 rounded-md"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded mt-4"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded mt-2"></div>
    </div>
  );
}
