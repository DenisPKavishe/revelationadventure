"use client";

import { useCart } from "@/app/context/CartContext";
import { SafariPackage } from "@/data/types";
import toast from "react-hot-toast";

export default function AddToCartButton({ safari }: { safari: SafariPackage }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(safari);
    toast.success(`${safari.title} added to cart!`);
  };

  return (
    <button
      onClick={handleAdd}
      className="block text-center w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-lg mb-3 transition shadow"
    >
      Add to Cart
    </button>
  );
}