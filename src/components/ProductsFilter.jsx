import { useDispatch } from "react-redux";
import { setFilters, setLimit, setSort } from "../redux/product/productSlice";

const ProductsFilter = () => {
  const dispatch = useDispatch();

  function setProductsLimit(limit) {
    // Dispatch action to set products limit
    dispatch(setLimit(parseInt(limit)));
  }

  function setProductsSort(sort) {
    // Dispatch action to set products sort
    dispatch(setSort(JSON.parse(sort)));
  }

  function filterProductsByName(filters) {
    dispatch(setFilters(filters ?? []));
    console.log(filters);
  }

  return (
    <div className="m-4 sm:m-6  w-full max-w-screen-md mx-auto dark:bg-gray-900 dark:text-white">
      <div className="lg:container flex flex-col md:w-[85vw] dark:bg-gray-900 dark:text-white">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-lg dark:bg-gray-900 dark:text-white">
          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:bg-gray-900 dark:text-white">
            <div className="flex flex-col dark:bg-gray-900 dark:text-white">
              <label
                htmlFor="name"
                className="text-sm font-medium text-stone-600 dark:bg-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                onChange={(e) => filterProductsByName({ name: e.target.value })}
                type="text"
                id="name"
                placeholder="Iphone 14 Pro"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="text-sm font-medium text-stone-600 dark:bg-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-900 dark:text-white"
              >
                <option>{}</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-stone-600 dark:bg-gray-900 dark:text-white"
              >
                Sort
              </label>
              <select
                onChange={(e) => setProductsSort(e.target.value)}
                id="sort"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-900 dark:text-white"
              >
                <option value={JSON.stringify({ createdAt: -1 })}>
                  Latest
                </option>
                <option value={JSON.stringify({ price: 1 })}>
                  Price (Low to High)
                </option>
                <option value={JSON.stringify({ price: -1 })}>
                  Price (High to Low)
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="limit"
                className="text-sm font-medium text-stone-600 dark:bg-gray-900 dark:text-white"
              >
                limit
              </label>
              <select
                onChange={(e) => setProductsLimit(e.target.value)}
                id="limit"
                className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-900 dark:text-white"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
