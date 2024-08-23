/* eslint-disable react/prop-types */
// Cart.jsx

import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../redux/cart/CartSlice";

const CartListItems = ({ id, name, quantity, price }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    dispatch(removeProductFromCart({ id: productId }));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center my-4 p-4 border-b border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-3/4">
        <div className="w-full sm:w-1/3 font-semibold text-center sm:text-left text-gray-700">
          {name}
        </div>
        <div className="w-full sm:w-1/3 text-center sm:text-left mt-2 sm:mt-0 dark:text-black">
          Quantity: {quantity}
        </div>
        <div className="w-full sm:w-1/3 font-semibold text-center sm:text-left text-gray-700 mt-2 sm:mt-0">
          Price: ${price}
        </div>
      </div>
      <div className="flex justify-between items-center w-full sm:w-1/4 mt-4 sm:mt-0">
        <div className="font-semibold text-indigo-600">
          Total: ${price * quantity}
        </div>
        <button
          onClick={() => handleRemoveProduct(id)}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          <BiTrash className="text-xl" />
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Your Cart
      </h2>

      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartListItems key={item.id} {...item} />)
        ) : (
          <p className="text-lg font-bold text-center text-gray-600">
            Your cart is empty.
          </p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="flex flex-col items-center sm:items-end mt-8">
          <p className="text-lg font-bold mb-4 text-gray-800">
            Total: ${total.toFixed(2)}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
