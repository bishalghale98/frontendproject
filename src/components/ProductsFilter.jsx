const ProductsFilter = () => {
  return (
    <div className="m-4 sm:m-6  w-full max-w-screen-md mx-auto">
      <div className="flex flex-col md:w-[85vw]">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-lg">
          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-stone-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Iphone 14 Pro"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="text-sm font-medium text-stone-600"
              >
                Category
              </label>
              <select
                id="category"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option>Cadberry</option>
                <option>Starbucks</option>
                <option>Hilti</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-stone-600"
              >
                Sort
              </label>
              <select
                id="sort"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="CreatedAt">Latest</option>
                <option value="price:1">Price (Low to High)</option>
                <option value="price:-1">Price (High to Low)</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="limit"
                className="text-sm font-medium text-stone-600"
              >
                limit
              </label>
              <select
                id="limit"
                className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>75</option>
                <option>100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
