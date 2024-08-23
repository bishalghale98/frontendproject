import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/product/productActions";
import { useEffect } from "react";
import { ProductListSpinner } from "../../components/Spinner";
import ProductDetail from "../../components/ProductDetail";
import RelatedProducts from "../../components/RelatedProducts";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
          Product Details of {product[0]?.name}
        </h1>
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <ProductListSpinner />
          </div>
        ) : (
          <ProductDetail product={{ ...product[0] }} />
        )}
      </div>
      <hr />
      <RelatedProducts product={{ ...product[0] }} />
    </div>
  );
};

export default Details;
