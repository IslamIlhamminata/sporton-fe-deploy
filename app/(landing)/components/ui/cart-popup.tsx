import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
<<<<<<< HEAD

export const cartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "product-3.png",
  },
];

const CartPopup = () => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    push("/checkout")
  }
=======
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  console.log("Cart item", items);

  const handleCheckout = () => {
    push("/checkout");
  };
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
<<<<<<< HEAD
      {cartList.map((item, index) => (
        <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
=======
      {items.length ? (
        items.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={getImageUrl(item.imageUrl)}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
              onClick={() => removeItem(item._id)}
            >
              <FiTrash2 />
            </Button>
          </div>
        ))
      ) : (
        <div className="text-center opacity-50 py-5">
          Your shopping cart is empty
        </div>
      )}
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
<<<<<<< HEAD
        <Button variant="dark" size="small" className="w-full mt-4" onClick={handleCheckout}>
=======
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
