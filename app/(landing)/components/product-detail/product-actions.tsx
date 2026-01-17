"use client";

import {
  FiChevronDown,
  FiArrowRight,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
<<<<<<< HEAD

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const Checkout = () => {};
=======
import { Product } from "@/app/types";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({ product, stock }: TProductActionsProps) => {
  const { addItem } = useCartStore();
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  const handleCheckout = () => {
    addItem(product);
    push("/checkout");
  };
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)

  return (
    <div className="flex gap-5">
      <div className="border border-gray-500 inline-flex w-fit min-w-20 5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
<<<<<<< HEAD
            onClick={() => setQty(qty + 1)}
=======
            onClick={() => setQty(qty < stock ? qty + 1 : qty)}
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
          >
            <FiChevronUp />
          </button>
          <button
            className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
<<<<<<< HEAD
      <Button className="px-20 w-full">
=======
      <Button className="px-20 w-full" onClick={handleAddToCart}>
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button
        variant="dark"
        className="px-20 w-full"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductActions;
