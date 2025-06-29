// data/navItems.js

const navItems = [
  { name: "Home", href: "/",
     dropdown: [
    { name: "Main Home", href: "rout/home/main-home" },
    { name: "Grid Home", href: "rout/home/grid-home" },
    { name: "Animated Home", href: "rout/home/animated-home" },
    { name: "Masonry Shop", href: "rout/home/masonry-shop" },
    { name: "Left Menu Home", href: "rout/home/left-menu-home" },
    { name: "Shop Home", href: "rout/home/shop-home" },
    { name: "Divided Showcase", href: "rout/home/divided-showcase" },
    { name: "Clothing Store", href: "rout/home/clothing-store" },
    { name: "Parallax Shop", href: "rout/home/parallax-shop" },
    { name: "Landing", href: "rout/home/landing" },
  ]

   },
  {
    name: "Pages",
    dropdown: [
    { name: "About Us", href: "/rout/pages/about" },
    { name: "Our Team", href: "/rout/pages/team" },
    { name: "Pricing Plans", href: "/rout/pages/pricing" },
    { name: "Contact Us", href: "/rout/pages/contact" },
    { name: "FAQ Page", href: "/rout/pages/faq" },
    { name: "Coming Soon", href: "/rout/pages/coming-soon" },
  ],
  },
  {
    name: "Shop",
    dropdown: [
  { name: "Right Sidebar", href: "/rout/shop/right-sidebar" },
  { name: "Left Sidebar", href: "/rout/shop/left-sidebar" },
  { name: "Animated List", href: "/rout/shop/animated-list" },
  { name: "Masonry Grid", href: "/rout/shop/masonry-grid" },
  { name: "Masonry Wide", href: "/rout/shop/masonry-wide" },
  { name: "With Filter", href: "/rout/shop/with-filter" },
  { name: "Shop Boxed", href: "/rout/shop/boxed" },
  { name: "Single Category", href: "/rout/shop/single-category" },
  { name: "Two Columns Grid", href: "/rout/shop/two-columns" },
  { name: "Three Columns Grid", href: "/rout/shop/three-columns" },
  { name: "Four Columns Grid", href: "/rout/shop/four-columns" },
  { name: "Four Columns Wide", href: "/rout/shop/four-columns-wide" },
  { name: "Five Columns Wide", href: "/rout/shop/five-columns-wide" },
  { name: "Six Columns Wide", href: "/rout/shop/six-columns-wide" },
  { name: "User Dashboard", href: "/rout/shop/dashboard" },
  { name: "Order Tracking", href: "/rout/shop/order-tracking" },
  { name: "Cart", href: "/rout/shop/cart" },
  { name: "Checkout", href: "/rout/shop/checkout" },
  { name: "My Account", href: "/rout/shop/account" },
]

  },
  { name: "Lookbook", 
    dropdown: [
    { name: "Masonry Shop", href: "rout/home/masonry-shop" },
    { name: "Left Menu Home", href: "rout/home/left-menu-home" },
    { name: "Shop Home", href: "rout/home/shop-home" },
    { name: "Divided Showcase", href: "rout/home/divided-showcase" },
    { name: "Clothing Store", href: "rout/home/clothing-store" },
    { name: "Parallax Shop", href: "rout/home/parallax-shop" },
    { name: "Landing", href: "rout/home/landing" },
  ]

   },
  {
    name: "Blog",
    dropdown: [
      { name: "All Posts", href: "/rout/shop/blog" },
      { name: "Categories", href: "/rout/blog/categories" },
       { name: "All Posts", href: "/rout/shop/blog" },
      { name: "Categories", 
        dropdown :[
           { name: "Four Columns Wide", href: "/rout/shop/four-columns-wide" },
  { name: "Five Columns Wide", href: "/rout/shop/five-columns-wide" },
  { name: "Six Columns Wide", href: "/rout/shop/six-columns-wide" },
  { name: "User Dashboard", href: "/rout/shop/dashboard" },
  { name: "Order Tracking", href: "/rout/shop/order-tracking" }
        ]
       }
      
    ],
  },
  { name: "Elements", href: "/elements" ,
     dropdown : [
  // Shop Shortcodes
  { name: "Shop Shortcodes", href: "/rout/element/shopshortcodes" },
  { name: "Product List Types", href: "/rout/element/productlisttypes" },
  { name: "Product Info Carousel", href: "/rout/element/productinfocarousel" },
  { name: "Tracking Order", href: "/rout/element/trackingorder" },
  { name: "Marquee Text", href: "/rout/element/marqueetext" },
  { name: "Floating Shop List", href: "/rout/element/floatingshoplist" },

  // Classic
  { name: "Classic", href: "/rout/element/classic" },
  { name: "Accordions", href: "/rout/element/accordions" },
  { name: "Tabs", href: "/rout/element/tabs" },
  { name: "Buttons", href: "/rout/element/buttons" },
  { name: "Contact Form", href: "/rout/element/contactform" },
  { name: "Typography", href: "/rout/element/typography" },
  { name: "Testimonials", href: "/rout/element/testimonials" },

  // Infographic
  { name: "Infographic", href: "/rout/element/infographic" },
  { name: "Pricing Table", href: "/rout/element/pricingtable" },
  { name: "Progress Bar", href: "/rout/element/progressbar" },
  { name: "Google Maps", href: "/rout/element/googlemaps" },
  { name: "Counters", href: "/rout/element/counters" },
  { name: "Pie Charts", href: "/rout/element/piecharts" },
  { name: "Image With Text", href: "/rout/element/imagewithtext" },

  // Presentation
  { name: "Presentation", href: "/rout/element/presentation" },
  { name: "Carousel", href: "/rout/element/carousel" },
  { name: "Blog List", href: "/rout/element/bloglist" },
  { name: "Portfolio List", href: "/rout/element/portfoliolist" },
  { name: "Video button", href: "/rout/element/videobutton" },
  { name: "Team", href: "/rout/element/team" },
]

  },
];

export default navItems;
