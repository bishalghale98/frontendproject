/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SmartphonesCard = ({
  id,
  name,
  category,
  brand = "Default brand",
  price = 0,
}) => {
  return (
    <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl sm:h-72 md:h-80 lg:h-96"
        to={`${id}`}
      >
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
      </Link>
      <div className="mt-4 px-4 sm:px-5 pb-5">
        <Link to="#">
          <h5 className="text-lg sm:text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              $ {price}
            </span>
            <span className="text-xs sm:text-sm md:text-base text-slate-900 line-through dark:text-gray-300">
              {null}
            </span>
          </p>
          <div className="flex items-center">
            {/* SVG icons for rating */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                aria-hidden="true"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 text-black rounded bg-yellow-200 dark:bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <h4 className="bg-brandBlue w-max py-1 px-3 rounded-md my-2 text-xs sm:text-sm md:text-base lg:text-lg">
            {brand}
          </h4>
          <h4 className="bg-brandBlue w-max py-1 px-3 rounded-md my-2 text-xs sm:text-sm md:text-base lg:text-lg">
            {category}
          </h4>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-4 sm:px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </Link>
          <Link
            to={`${id}`}
            className="flex items-center justify-center rounded-md bg-blue-600 px-4 sm:px-5 py-2 text-center text-sm font-medium text-white hover:bg-blue-500 dark:hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.293-4.293a1 1 0 000-1.414l-1.414-1.414a1 1 0 00-1.414 0L12 7.586 8.121 3.707a1 1 0 00-1.414 1.414L10.586 10H3a1 1 0 00-1 1v6a1 1 0 001 1h7.586l-2.707 2.707a1 1 0 001.414 1.414L12 13.414l4.293 4.293a1 1 0 001.414-1.414L13.414 12H21a1 1 0 001-1v-6a1 1 0 00-1-1h-6.586z"
              />
            </svg>
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmartphonesCard;
