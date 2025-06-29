"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavItem from "./ChildComponent/NavItem";
import MobileMenu from "./ChildComponent/MobileMenu";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
const Navbar = () => {
  const pathname = usePathname();
  const [showBg, setShowBg] = useState(false);
  const isHomePage = pathname === "/" || pathname === "/home";

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef();
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  // 👇 Nested submenu position & tracking
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isHomePage) {
      setShowBg(true);
      return;
    }
    setShowBg(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHomePage) return;

    const hero = document.querySelector(".hero-section");
    if (!hero) return;

    const handleScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowBg(heroBottom <= 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (openDropdown && dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [openDropdown]);

  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
    setHoveredSubItem(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredSubItem(null);
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full inset-shadow-zinc-600 z-50 transition-all duration-300 ${
          showBg ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div
          className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between"
          style={{ height: "80px" }}
        >
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image src="/img/logo5.png" alt="Logo" width={120} height={120} />
            </div>
          </Link>

          <ul className="hidden md:flex space-x-10 h-20 items-center">
            {NavItem.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href || "#"}
                  className="cursor-pointer hover:text-blue-700 select-none flex items-center gap-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <GoChevronDown className="text-sm mt-[1px]" />
                  )}
                </Link>

                <div className="absolute top-full left-0 w-full h-7"></div>

                <AnimatePresence>
                  {openDropdown === item.name && item.dropdown && (
                    <motion.ul
                      initial={{ height: 0 }}
                      animate={{
                        height: dropdownHeight || "auto",
                        transition: { duration: 0.5, ease: "easeOut" },
                      }}
                      exit={{
                        height: 0,
                        transition: { duration: 0, ease: "easeIn" },
                      }}
                      className={`mt-7 z-[9999]  inset-shadow-zinc-600  overflow-hidden ${
                        item.dropdown.length > 14
                          ? "fixed top-[52px] left-0 w-screen bg-white shadow-xl border border-gray-300 grid grid-cols-4 gap-x-2 gap-y-2 ps-16 pe-4 py-6 justify-center"
                          : item.dropdown.length > 7
                          ? "absolute left-1/2 top-full -translate-x-1/2 bg-white shadow-xl border border-gray-300 grid grid-cols-2  gap-x-6 px-8 py-5 max-w-[700px] min-w-[500px]"
                          : "absolute top-full left-0 bg-white shadow-xl border border-gray-300 flex flex-col w-auto px-4 py-2"
                      }`}
                      ref={dropdownRef}
                    >
                      {item.dropdown.map((subItem, index) => (
                        <li
                          key={subItem.name + index}
                          className="relative"
                          onMouseEnter={(e) => {
                            if (subItem.dropdown) {
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              setSubmenuPosition({
                                top: rect.top,
                                left: rect.right,
                              });
                              setHoveredSubItem(subItem);
                            }
                          }}
                          onMouseLeave={() => {
                            if (subItem.dropdown) {
                              timeoutRef.current = setTimeout(
                                () => setHoveredSubItem(null),
                                200
                              );
                            }
                          }}
                        >
                          <Link
                            href={subItem.href || "#"}
                            className="w-full min-w-[200px] text-black  hover:text-blue-700 py-2 px-4 whitespace-nowrap text-base flex items-center justify-between font-medium duration-300"
                            onClick={(e) => {
                              if (!subItem.href) e.preventDefault();
                            }}
                          >
                            <span>{subItem.name}</span>
                            {subItem.dropdown && (
                              <FaChevronRight className="text-sm mt-[1px]" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <button
            className={`hover:bg-blue-400 border px-2 py-2 hidden md:flex items-center gap-2 ${
              showBg
                ? "bg-white text-black hover:text-white"
                : "bg-transparent text-white"
            }`}
          >
            <FaShoppingCart className="text-lg" />
            Buy Now
          </button>

          <div
            className="md:hidden text-xl cursor-pointer select-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={NavItem}
        />
      </nav>
      {!isHomePage && <div className="h-[80px] w-full" />}


      {/* Submenu outside render */}
      <AnimatePresence>
        {hoveredSubItem?.dropdown && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{
              height: "auto",

              transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{
              height: 0,

              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="absolute z-[9999] bg-white border border-gray-300 shadow-xl overflow-hidden"
            style={{
              top: submenuPosition.top,
              left: submenuPosition.left + 17,
              minWidth: "200px",
            }}
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={() =>
              (timeoutRef.current = setTimeout(
                () => setHoveredSubItem(null),
                200
              ))
            }
          >
            {hoveredSubItem.dropdown.map((nestedItem, i) => (
              <li key={nestedItem.name + i}>
                <Link
                  href={nestedItem.href || "#"}
                  className="block  text-black hover:text-blue-700 py-2 px-4 whitespace-nowrap text-base font-medium duration-300"
                  onClick={(e) => {
                    if (!nestedItem.href) e.preventDefault();
                  }}
                >
                  {nestedItem.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
