import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ onClose }) => {
  return (
    <div
      className="absolute right-0 top-full z-50 mt-4
                 w-80 max-w-[calc(100vw-2rem)]
                 rounded-lg bg-white shadow-xl"
    >
      <div className="border-b border-gray-200 p-4">
        <h2 className="font-semibold">Cart</h2>
      </div>

      <div className="flex min-h-28 items-center justify-center p-6">
        <p className="text-sm font-medium text-gray-500">
          Your cart is empty.
        </p>
      </div>

    </div>
  );
};

export default Cart;