/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetEditProducts } from "../redux/product/productSlice";

const EditProductForm = ({ submitForm }) => {
  const {
    edit: { loading, success },
    product,
    error,
  } = useSelector((state) => state.product);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all", defaultValues: product[0] });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      toast.success("Product edited successfully!", {
        autoClose: 1000,
        onClose: () => {
          dispatch(resetEditProducts());
        },
      });
    }
  }, [dispatch, navigate, success]);

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
      {loading && (
        <div className="flex justify-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
      )}

      {!loading && (
        <>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter product name"
              {...register("name", { required: "Product name is required" })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="category"
            >
              Category
            </label>
            <input
              type="text"
              id="productCategory"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter product category"
              {...register("category", {
                required: "Product category is required",
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.category?.message}
            </p>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              type="text"
              id="productBrand"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter product brand"
              {...register("brand", {
                required: "Product brand is required",
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.brand?.message}</p>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="productPrice"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter product price"
              {...register("price", {
                required: "Product price is required",
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.price?.message}</p>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="text-red-500 dark:text-red-400 hover:underline"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </>
      )}
      <ToastContainer />
    </form>
  );
};

export default EditProductForm;
