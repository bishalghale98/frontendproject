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
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt={name}
              className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-[450px] transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
          </div>
          <div className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-gray-800 dark:text-white">
                {name}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-2 bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-yellow-500 dark:to-yellow-700 px-3 py-1 rounded-full font-medium text-center dark:text-gray-800">
                {category} by {brand}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-yellow-400 mb-4">
                ${price}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={addToCart}
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <button
                onClick={() => {
                  /* Shop Now action */
                }}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
              >
                <ShoppingCart size={20} className="mr-2" />
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
