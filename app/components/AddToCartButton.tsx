"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { CartablePackage } from "@/data/types";
import { Check, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

export default function AddToCartButton({ safari }: { safari: CartablePackage }) {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const isAlreadyInCart = items.some((item) => item.slug === safari.slug);

  const handleAdd = () => {
    if (isAlreadyInCart) {
      toast.error("This safari is already in your cart.");
      return;
    }
    addToCart(safari);
    toast.success(`${safari.title} added to cart!`);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={isAlreadyInCart}
      className={`block text-center w-full font-bold py-3 rounded-lg mb-3 transition shadow flex items-center justify-center gap-2 ${
        isAlreadyInCart
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : justAdded
          ? "bg-brand-green text-white"
          : "bg-brand-orange hover:bg-brand-orange-dark text-white"
      }`}
    >
      {isAlreadyInCart ? (
        <>
          <Check size={18} /> Already in Cart
        </>
      ) : justAdded ? (
        <>
          <Check size={18} /> Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart size={18} /> Add to Cart
        </>
      )}
    </button>
  );
}