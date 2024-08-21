import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import {
  getAllProducts,
  getCategoriesList,
} from "../../redux/product/productActions";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductListSpinner } from "../../components/Spinner";
import ProductsFilter from "../../components/ProductsFilter";

const ProductsLists = () => {
  const { loading, error, products, query } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(query));
    dispatch(getCategoriesList());
  }, [dispatch, query]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }
  }, [error]);

  return (
    <div className=" dark:bg-gray-900 dark:text-white py-16  ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-4 mt-5">
          Introducing Our Latest Product
        </h2>

        <div className=" mb-6">
          <ProductsFilter />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[95vh] dark:bg-gray-900 dark:text-white">
            <div className="px-4">
              <ProductListSpinner />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductsLists;
