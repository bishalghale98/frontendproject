import { useForm } from "react-hook-form";

const EditProductForm = ({ onSubmit, product }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all", defaultValues: product });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
        <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
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
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
