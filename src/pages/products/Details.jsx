import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/product/productActions";
import { useEffect } from "react";
import { ProductListSpinner } from "../../components/Spinner";

import ProductDetail from "../../components/ProductDetail";

const Details = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  return (
    <div className=" dark:bg-gray-900 dark:text-white py-16 h-[95vh]  ">
      <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-8 dark:bg-gray-900 dark:text-white">
          Product Details of {products[0]?.name}
        </h1>
        {loading ? (
          <div className="flex justify-center mt-72 items-center  min:h-svh  dark:bg-gray-900 dark:text-white">
            <div className="px-4">
              <ProductListSpinner />
            </div>
          </div>
        ) : (
          <ProductDetail product={{ ...products[0] }} />
        )}
      </div>
    </div>
  );
};

export default Details;
