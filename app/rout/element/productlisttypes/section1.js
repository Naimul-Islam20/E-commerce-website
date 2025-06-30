"use client";
import { useGetProductsQuery } from "@/features/apiSlice";
import Image from "next/image";


export default function SectionPage() {
  const { data, error } = useGetProductsQuery();

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">Failed to load products.</p>
    );
  }

  // page === "product-list" ফিল্টার
  const productListItems = data?.filter((item) => item.page === "product-list");
    const SliceData = productListItems ? productListItems.slice(0,3) : [];

  return (
    <div>
      <section className="container mx-auto sm:col-12 md:col-6 lg:col-4 px-18 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-left">Gallery</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SliceData?.map((item) => (
            <div key={item.id} className="overflow-hidden text-center">
              <div className="relative group h-75 w-full">
                {/* Main Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-60"
                />

                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />

                {/* Title + Price + Discount on hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition duration-300 text-white z-20">
                  {item.discount ? (
                    <>
                      <h3 className="text-lg font-semibold line-through text-gray-300">
                        ${item.discount.oldPrice}
                      </h3>
                      <h3 className="text-xl font-bold bg-amber-400 text-black px-3 py-1 rounded mt-1">
                        ${item.discount.discPrice}
                      </h3>
                    </>
                  ) : (
                    <h3 className="text-xl font-semibold">${item.price}</h3>
                  )}
                  <p className="text-sm mt-2">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
