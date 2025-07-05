
const WISH_KEY = "my_wish_data";

export function getWish() {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(WISH_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWish(wishlist) {
  if (typeof window === "undefined") return;
  localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
}

export function addToWish(product) {
  const wish = getWish();
  const exists = wish.find((p) => p.id === product.id);
  if (!exists) {
    wish.push(product);
    saveWish(wish);
  }
}

export function removeFromWish(id) {
  const updated = getWish().filter((item) => item.id !== id);
  saveWish(updated);
}
