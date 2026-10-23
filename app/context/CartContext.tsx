"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { SafariPackage } from "@/data/types";

interface CartItem extends SafariPackage {
  travelers: number;
  startDate: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (safari: SafariPackage) => void;
  removeFromCart: (slug: string) => void;
  updateTravelers: (slug: string, travelers: number) => void;
  updateStartDate: (slug: string, date: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (safari: SafariPackage) => {
    setItems((prev) => {
      if (prev.find((item) => item.slug === safari.slug)) return prev;
      return [...prev, { ...safari, travelers: 2, startDate: "" }];
    });
  };

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const updateTravelers = (slug: string, travelers: number) => {
    setItems((prev) =>
      prev.map((item) => (item.slug === slug ? { ...item, travelers } : item))
    );
  };

  const updateStartDate = (slug: string, date: string) => {
    setItems((prev) =>
      prev.map((item) => (item.slug === slug ? { ...item, startDate: date } : item))
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce(
    (sum, item) => sum + item.priceUSD * item.travelers,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateTravelers,
        updateStartDate,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}