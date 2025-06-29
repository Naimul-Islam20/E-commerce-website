"use client";

import About from "@/app/components/About";
import Hero from "./components/Hero";
import Product from "./components/products/Product";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import PromoSection from "@/app/components/PreOrder";
import Payment from "@/app/components/Payment";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Product />
        <About />
        <FeaturedProducts />
        <PromoSection />
        <Payment />
      </div>
    </main>
  );
}
