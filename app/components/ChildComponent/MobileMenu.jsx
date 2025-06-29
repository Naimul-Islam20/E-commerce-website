import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import navItems from "./NavItem";
import { GoChevronUp  } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div ref={menuRef} className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-black pb-8 flex justify-between items-center">
          <h2 className="text-xl text-black font-semibold">Menu</h2>
          <button onClick={onClose} className="text-2xl text-black">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-2 overflow-y-auto flex-1">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-black pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  item.dropdown
                    ? toggleMenu(item.name)
                    : (onClose(), setActiveMenu(null))
                }
              >
                <Link
                  href={item.href || "#"}
                  className="text-base font-medium text-gray-800"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <span className="text-lg text-black">
                    {activeMenu === item.name ? <GoChevronUp /> : <GoChevronDown />}
                  </span>
                )}
              </div>

              {/* Dropdown */}
              {item.dropdown && activeMenu === item.name && (
                <ul className="pl-4 mt-2 space-y-1">
                  {item.dropdown.map((subItem, index) => (
                    <li key={index}>
                      <Link
                        href={subItem.href}
                        className="block text-gray-600 ps-2 text-sm py-2 border-b border-gray-400 hover:bg-gray-200 hover:text-blue-500"
                        onClick={onClose}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
