import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getElectronicsList } from "../../redux/product/productActions";
import { toast, ToastContainer } from "react-toastify";
import { ProductListSpinner } from "../../components/Spinner";
import ProductCard from "../../components/ProductCard";

const Electronic = () => {
  const { loading, error, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getElectronicsList());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }
  }, [error]);

  return (
    <div className=" dark:bg-gray-900 dark:text-white py-16 min-h-svh  ">
      <div className="container  px-4 ">
        <h2 className="text-3xl font-bold mb-4 mt-5">
          Introducing Our Electronics Devices
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-[95vh] dark:bg-gray-900 dark:text-white">
            <div className="px-4">
              <ProductListSpinner />
            </div>
          </div>
        ) : (
          <div className="flex justify-center ">
            <div className="grid sm:items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Electronic;
