import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: () => {},
  cartItems: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
