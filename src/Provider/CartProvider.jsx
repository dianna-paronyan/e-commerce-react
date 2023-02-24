import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, id) {
    const existItem = cart.find((pr) => pr.id === id);
    const someEl = cart.some((pr) => pr.id === id);

    if (!someEl) {
      setCart([...cart, product]);
    } else {
      const newItem = cart.map((el) =>
        el.id === id ? { ...existItem, quantity: existItem.quantity + 1 } : el
      );
      setCart(newItem);
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartItems() {
  return useContext(CartContext);
}
