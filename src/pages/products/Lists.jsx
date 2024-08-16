import ProductCard from "../../components/ProductCard";

const ProductsLists = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white py-16  ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8">
          Introducing Our Latest Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <ProductCard
            name="Product 1"
            price="100"
            category="Electronics"
            brand="apple"
            description="About this product"
          />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsLists;
