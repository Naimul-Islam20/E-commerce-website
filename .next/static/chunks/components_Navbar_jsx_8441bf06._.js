(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/Navbar.jsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navItems = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Pages",
        dropdown: [
            {
                name: "About Us",
                href: "/about"
            },
            {
                name: "Our Team",
                href: "/team"
            },
            {
                name: "Pricing Plans",
                href: "/pricing"
            },
            {
                name: "Contact Us",
                href: "/contact"
            },
            {
                name: "FAQ Page",
                href: "/faq"
            },
            {
                name: "Coming Soon",
                href: "/coming-soon"
            }
        ]
    },
    {
        name: "Shop",
        dropdown: [
            // Shop Types
            {
                name: "Right Sidebar",
                href: "/shop/right-sidebar"
            },
            {
                name: "Left Sidebar",
                href: "/shop/left-sidebar"
            },
            {
                name: "Animated List",
                href: "/shop/animated-list"
            },
            {
                name: "Masonry Grid",
                href: "/shop/masonry-grid"
            },
            {
                name: "Masonry Wide",
                href: "/shop/masonry-wide"
            },
            {
                name: "With Filter",
                href: "/shop/with-filter"
            },
            {
                name: "Shop Boxed",
                href: "/shop/boxed"
            },
            {
                name: "Single Category",
                href: "/shop/single-category"
            },
            // Shop Layouts
            {
                name: "Two Columns Grid",
                href: "/shop/two-columns"
            },
            {
                name: "Three Columns Grid",
                href: "/shop/three-columns"
            },
            {
                name: "Four Columns Grid",
                href: "/shop/four-columns"
            },
            {
                name: "Four Columns Wide",
                href: "/shop/four-columns-wide"
            },
            {
                name: "Five Columns Wide",
                href: "/shop/five-columns-wide"
            },
            {
                name: "Six Columns Wide",
                href: "/shop/six-columns-wide"
            },
            // Product Types
            // { name: "Standard", href: "/product/standard" },
            // { name: "External Product", href: "/product/external" },
            // { name: "Grouped Product", href: "/product/grouped" },
            // { name: "Variable Product", href: "/product/variable" },
            // { name: "Virtual Product", href: "/product/virtual" },
            // { name: "Downloadable Product", href: "/product/downloadable" },
            // { name: "Hot Product", href: "/product/hot" },
            // { name: "On Sale Product", href: "/product/sale" },
            // { name: "Out of stock", href: "/product/out-of-stock" },
            // Shop Pages
            {
                name: "User Dashboard",
                href: "/account/dashboard"
            },
            {
                name: "Order Tracking",
                href: "/account/order-tracking"
            },
            {
                name: "Cart",
                href: "/cart"
            },
            {
                name: "Checkout",
                href: "/checkout"
            },
            {
                name: "My Account",
                href: "/account"
            }
        ]
    },
    {
        name: "Lookbook",
        href: "/lookbook"
    },
    {
        name: "Blog",
        dropdown: [
            {
                name: "All Posts",
                href: "/blog"
            },
            {
                name: "Categories",
                href: "/categories"
            }
        ]
    },
    {
        name: "Elements",
        href: "/elements"
    }
];
const Navbar = ()=>{
    _s();
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const handleMouseEnter = (name)=>{
        clearTimeout(timeoutRef.current);
        setOpenDropdown(name);
    };
    const handleMouseLeave = ()=>{
        timeoutRef.current = setTimeout(()=>setOpenDropdown(null), 200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white text-black border-b fixed top-0 left-0 w-full z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-2 py-4 flex items-center justify-between",
            style: {
                height: "80px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Logo",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-semibold",
                                children: "Lisu"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "hidden md:flex space-x-10 h-20 items-center",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "relative",
                            onMouseEnter: ()=>handleMouseEnter(item.name),
                            onMouseLeave: handleMouseLeave,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cursor-pointer hover:text-blue-600 select-none",
                                    children: [
                                        item.name,
                                        " ",
                                        item.dropdown && "▾"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 w-full h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: openDropdown === item.name && item.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
                                        initial: {
                                            opacity: 0,
                                            y: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.2,
                                                ease: "easeOut"
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -20,
                                            transition: {
                                                duration: 0.05,
                                                ease: "easeIn"
                                            }
                                        },
                                        className: `${item.dropdown.length > 6 ? "fixed left-0 right-0 top-[60px] p-6 overflow-auto max-h-[70vh] grid grid-cols-4 gap-x-6 gap-y-3 bg-white shadow-xl " : "absolute left-0 top-full mt-0 p-2 flex flex-col w-auto bg-white shadow-xl "}`,
                                        style: {
                                            zIndex: 9999,
                                            maxWidth: item.dropdown.length > 6 ? "100vw" : "max-content",
                                            minWidth: item.dropdown.length > 6 ? "100%" : "auto",
                                            overflowY: "auto"
                                        },
                                        children: item.dropdown.map((subItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    href: subItem.href,
                                                    className: "relative block px-4 hover:bg-gray-100 py-2  whitespace-nowrap bg-white text-base font-medium duration-300 ",
                                                    children: subItem.name
                                                }, subItem.name + index, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-black hover:text-blue-600 hidden md:block",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden text-xl cursor-pointer select-none",
                    children: "☰"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
};
_s(Navbar, "T7v1Xw7ygdhSy4Wrgvg+9yb1rrY=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_Navbar_jsx_8441bf06._.js.map