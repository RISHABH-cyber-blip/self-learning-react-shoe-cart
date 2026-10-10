import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);


  return (
    <div
      className="absolute right-0 top-full z-50 mt-4
                 w-80 max-w-[calc(100vw-2rem)]
                 rounded-lg bg-white shadow-xl"
    >
      <div className="border-b border-gray-200 p-4">
        <h2 className="font-semibold">Cart</h2>
      </div>

       {
        cartItems.length === 0 ? (
        <div className="flex min-h-28 items-center justify-center p-6">
            <p className="text-sm font-medium text-gray-500">
            Your cart is empty.
            </p>
        </div>
        ) : (
            <div className="flex items-center gap-4 p-4">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
               <img src={cartItems[0].image} alt={cartItems[0].title} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">{cartItems[0].title}</p>
                <p className="text-lg font-bold">${cartItems[0].price} x {cartItems[0].quantity} = ${cartItems[0].price * cartItems[0].quantity}</p>
              </div>
            </div>
        )
       }
    </div>
  );
};

export default Cart;