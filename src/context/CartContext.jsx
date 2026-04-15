import { createContext, useContext, useState, useEffect } from "react";
import { getCart } from "../api/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const { isLoggedIn } = useAuth();

  const fetchCartCount = async () => {
    if (!isLoggedIn()) return;
    try {
      const res = await getCart();
      setCartCount(res.data.items?.length || 0);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, [isLoggedIn()]);

  return (
    <CartContext.Provider value={{ cartCount, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
