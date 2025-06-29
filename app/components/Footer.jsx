"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Debaco</h2>
          <p>
            We are a team of designers and developers that create high quality
            Magento, WordPress, Prestashop, Opencart
          </p>
          <div className="mt-4 text-sm space-y-1">
            <p>
              <strong>ADDRESS:</strong> 6688 Princess Road, London, Greater London BAS 23JK, UK
            </p>
            <p>
              <strong>PHONE:</strong> (012) 800 456 789-987
            </p>
            <p>
              <strong>EMAIL:</strong> Contact@plazathemes.com
            </p>
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2">
            <li>My account</li>
            <li>Cart</li>
            <li>Shop</li>
            <li>Wishlist</li>
            <li>Checkout</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Cart</li>
            <li>Contact</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Newsletter Now</h3>
          <p className="mb-4 text-sm">
            Get E-mail updates about our latest shop and special offers.
          </p>

          {/* Subscribe Box */}
          <div className="flex bg-gray-100 p-1 rounded-full overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 outline-none bg-transparent text-sm"
            />
            <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-600">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="border-t py-4 px-4 flex justify-between items-center text-sm max-w-7xl mx-auto">
        <p>© 2025 Debaco. All rights reserved.</p>
        <Image src="/img/footer.png" alt="Footer Logo" width={280} height={50} />
      </div>
    </footer>
  );
};

export default Footer;
