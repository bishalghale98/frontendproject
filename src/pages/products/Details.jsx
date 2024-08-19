import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/product/productActions";
import { useEffect, useState } from "react";
import { ProductListSpinner } from "../../components/Spinner";
import { ShoppingCart } from "lucide-react";

const Details = () => {
  // test
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value > 0 ? value : 1); // Ensure quantity is at least 1
  };
  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${products.name}(s) to cart`);
  };

  // test end

  const params = useParams();

  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[95vh] dark:bg-gray-900 dark:text-white">
        <div className="px-4">
          <ProductListSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className=" dark:bg-gray-900 dark:text-white py-16 h-[95vh]  ">
      <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-8 dark:bg-gray-900 dark:text-white">
          Product Details of {products[0]?.name}
        </h1>
        <div>
          <div className=" mx-auto p-4 md:p-6 lg:p-8  dark:bg-gray-900 dark:text-white">
            <div className="flex flex-col md:flex-row bg-white shadow-lg  dark:shadow-cyan-500/50 shadow-indigo-500/40 rounded-lg overflow-hidden dark:bg-gray-900 dark:text-white ">
              <div className="md:w-1/2 lg:w-2/3 dark:bg-gray-900 dark:text-white">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="md:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8 flex flex-col justify-between dark:bg-gray-900 dark:text-white">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-800 dark:bg-gray-900 dark:text-white">
                    {products[0]?.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4 bg-slate-400 dark:bg-brandYellow w-max px-3 py-2 rounded-xl font-semibold  dark:text-black">
                    {products[0]?.category} by {products[0].brand}
                  </p>
                  <p className="text-3xl lg:text-4xl font-bold dark:text-brandYellow mb-6 dark:bg-gray-900 ">
                    ${products[0]?.price}
                  </p>
                  <div className="flex items-center mb-4 dark:bg-gray-900 dark:text-white">
                    <label className="text-lg text-gray-600 mr-2 dark:bg-gray-900 dark:text-white">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-16 pl-2 py-1 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition dark:bg-gray-900 dark:text-white"
                      min="1"
                    />
                  </div>
                </div>
                <div className="flex gap-2 dark:bg-gray-900 dark:text-white">
                  <button
                    onClick={handleAddToCart}
                    className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-2 rounded flex items-center justify-center mt-4 lg:mt-8 transition duration-300"
                  >
                    <ShoppingCart size={24} className="mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mt-4 lg:mt-8 transition duration-300"
                  >
                    <ShoppingCart size={24} className="mr-2" />
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
