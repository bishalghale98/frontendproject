import { Link } from "react-router-dom";
import { addProductToCart } from "../redux/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import { deleteProductById } from "../redux/product/productActions";
import { ConfirmDeleteModal } from "./Modal";
import { useState } from "react";

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

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addProductToCart({ id, name, category, brand, price }));
  }

  function deleteProduct() {
    setShowDeletePopup(true);
  }

  function handleCancel() {
    setShowDeletePopup(false);
  }

  function confirmDeleteProduct() {
    dispatch(deleteProductById(id));
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 md:p-6 lg:p-8">
      <div className="mb-3">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full inline-block">
          {brand}
        </p>
        {category && (
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-full inline-block ml-2">
            {category}
          </p>
        )}
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-48 md:h-56 lg:h-64"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Product"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            to={`${id}`}
            className="bg-white text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            View Product
          </Link>
        </div>
      </div>
      <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base mt-2">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <button
          onClick={addToCart}
          className="py-2 px-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
      {user.roles.includes("ADMIN") && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={deleteProduct}
            className="flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Delete <BiTrash />
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Edit <BiPencil />
          </button>
        </div>
      )}

      <div>
        <ConfirmDeleteModal
          isOpen={showDeletePopup}
          onClose={handleCancel}
          name={name}
          onDelete={confirmDeleteProduct}
        />
      </div>
    </div>
  );
};

export default ProductCard;
