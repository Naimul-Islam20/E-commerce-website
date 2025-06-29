import Link from "next/link";
import ProductClient from "./ProductClient";

export default function ProductPage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('/img/home2.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
          <h1 className="text-5xl font-extrabold mb-6 text-black tracking-wide uppercase text-center">
            popular items
            
          </h1>
          <p className="text-black text-base mt-6 mb-12 max-w-xl text-center">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit.
          </p>
          
          
        </div>

        {/* Products Grid */}
        <ProductClient />
      </div>
    </div>
  );
}
