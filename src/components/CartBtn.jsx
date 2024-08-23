import { useState } from "react";
import { BiCart } from "react-icons/bi";
import Cart from "./Cart"; // Import the Cart component

const CartBtn = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:right-6 md:right-8 lg:right-10 z-50 flex flex-col items-end">
      <button
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 text-sm md:text-base"
        onClick={handleCartClick}
      >
        <BiCart className="w-6 h-6" />
        <span className="hidden sm:inline">Cart</span>
      </button>
      {showCart && (
        <div className="mt-4 w-full sm:w-[40vh] md:w-[50vh] bg-white border border-gray-300 shadow-lg rounded-lg z-40 overflow-y-auto max-h-[80vh] p-4">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CartBtn;
