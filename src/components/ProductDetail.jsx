/* eslint-disable react/prop-types */
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/CartSlice";

const ProductDetail = ({ product: { id, name, price, brand, category } }) => {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addProductToCart({ id, name, category, brand, price }));
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden dark:shadow-cyan-500/50 shadow-indigo-500/40 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-2/3">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt={name}
              className="object-cover w-full h-64 sm:h-80 md:h-96 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/3 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                {name}
              </h2>
              <p className="text-lg text-gray-600 mb-4 bg-gray-200 dark:bg-yellow-400 px-3 py-2 rounded-xl font-semibold dark:text-black">
                {category} by {brand}
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
                ${price}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={addToCart}
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition duration-300"
              >
                <ShoppingCart size={24} className="mr-2" />
                Add to Cart
              </button>
              <button
                onClick=""
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition duration-300"
              >
                <ShoppingCart size={24} className="mr-2" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
