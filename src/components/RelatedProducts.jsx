/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getRelatedProducts } from "../redux/product/productActions";
import { useEffect } from "react";

const RelatedProducts = ({ product: { category } }) => {
  const {
    relatedProducts: { items },
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelatedProducts({ filters: { category } }));
  }, [dispatch, category]);

  return (
    <div className="dark:bg-gray-900 dark:text-white  py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
          Related Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {items.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
