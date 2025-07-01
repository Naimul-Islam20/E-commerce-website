// app/rout/card/utils/cartSession.js

const CART_KEY = "my_cart_data";

// Get cart
export function getCart() {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

// Save cart
export function saveCart(cart) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add to cart (default quantity 1)
export function addToCart(product) {
  const cart = getCart();
  const exists = cart.find((p) => p.id === product.id);

  if (!exists) {
    cart.push({ ...product, quantity: 1 });
    saveCart(cart);
  }
}

// Remove from cart
export function removeFromCart(id) {
  const updated = getCart().filter((item) => item.id !== id);
  saveCart(updated);
}

// Increase quantity
export function increaseQuantity(id) {
  const cart = getCart();
  const updated = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  saveCart(updated);
}

// Decrease quantity (not below 1)
export function decreaseQuantity(id) {
  const cart = getCart();
  const updated = cart.map((item) => {
    if (item.id === id) {
      const newQty = item.quantity - 1;
      return { ...item, quantity: newQty < 1 ? 1 : newQty };
    }
    return item;
  });
  saveCart(updated);
}

// Optional: Get total cart amount
export function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const price = item.discount?.discPrice || item.price;
    return total + price * item.quantity;
  }, 0);
}
