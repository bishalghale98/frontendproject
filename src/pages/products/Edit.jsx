import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductById,
  updateProduct,
} from "../../redux/product/productActions";
import EditProductForm from "../../components/EditProduct";

const EditProduct = () => {
  const { loading, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  const submitForm = (data) => {
    dispatch(updateProduct(data));
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Edit Product
        </h2>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          </div>
        ) : (
          <EditProductForm product={product[0]} onSubmit={submitForm} />
        )}
      </div>
    </section>
  );
};

export default EditProduct;
