import { Link } from "react-router-dom";
import { addProductToCart } from "../redux/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import { deleteProductById } from "../redux/product/productActions";

/* eslint-disable react/prop-types */
const ProductCard = ({
  id,
  name,
  category,
  brand = "Default brand",
  price = 0,
  description,
}) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addProductToCart({ id, name, category, brand, price }));
  }

  function deleteProduct() {
    dispatch(deleteProductById(id));
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
      <div className="flex mb-2 gap-3">
        <p className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full text-sm">
          {brand}
        </p>
        {category && (
          <p className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full text-sm">
            {category}
          </p>
        )}
      </div>
      <div className="relative overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Product"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <Link
            to={`${id}`}
            className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
          >
            View Product
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-4 gap-3">
        <h3 className="text-xl font-bold text-gray-900  dark:text-white">
          {name}
        </h3>
      </div>
      <p className="text-gray-500 text-sm mt-2 dark:text-white">
        {description}
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-900 font-bold text-lg dark:text-white">
          ${price}
        </span>
        <button
          onClick={addToCart}
          className=" dark:text-white py-2 px-4 bg-gray-700 text-white rounded-full font-bold hover:bg-gray-800 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
        >
          Add to Cart
        </button>
      </div>
      <div
        onClick={deleteProduct}
        className="flex items-center justify-between mt-4"
      >
        {user.roles.includes("ADMIN") && (
          <div
            onClick={deleteProduct}
            className="flex items-center justify-between mt-4"
          >
            <button className="flex items-center gap-2 bg-red-800 text-white py-2 px-4 rounded-full font-bold hover:bg-red-900">
              Delete <BiTrash />
            </button>
            <button>
              <BiPencil />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
