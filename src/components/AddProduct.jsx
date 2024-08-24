import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../redux/product/productActions";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { resetAddProducts } from "../redux/product/productSlice";

const AddProduct = () => {
  const { loading, error, addProducts } = useSelector((state) => state.product);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(addNewProduct(data));
  }

  useEffect(() => {
    if (addProducts) {
      toast.success("Product added successful!", {
        autoClose: 1000,
        onClose: () => dispatch(resetAddProducts()),
      });
    }
    if (error) {
      toast.error(error);
    }
  }, [error, addProducts, dispatch]);

  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center dark:text-gray-100 border-b-4 border-indigo-500 pb-2">
        Add Product
      </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col">
          <label
            className="block text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="name"
          >
            Product Name:
          </label>
          <input
            type="text"
            className="block w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200 ease-in-out"
            placeholder="Enter product name"
            {...register("name", { required: "Product name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="block text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="brand"
          >
            Product Brand:
          </label>
          <input
            type="text"
            className="block w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200 ease-in-out"
            placeholder="Enter product brand"
            {...register("brand", { required: "Product brand is required" })}
          />
          {errors.brand && (
            <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="block text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="category"
          >
            Product Category:
          </label>
          <input
            type="text"
            className="block w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200 ease-in-out"
            placeholder="Enter product category"
            {...register("category", {
              required: "Product category is required",
            })}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="block text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="price"
          >
            Product Price:
          </label>
          <input
            type="number"
            className="block w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200 ease-in-out"
            placeholder="Enter product price"
            {...register("price", { required: "Product price is required" })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-3 rounded-md text-center transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin mr-2" />
          ) : null}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
