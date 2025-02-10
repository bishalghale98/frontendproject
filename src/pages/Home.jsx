import React from "react";
import data from "../data.json";
import { Link, NavLink } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../constants/routes";

function App() {
  return (
    <div className="App">
      {/* Navbar */}

      {/* Hero Section */}
      <section
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ElectroMart: Laptops, Smartphones & Accessories Hub
          </h1>
          <Link
            to={`${PRODUCTS_ROUTE}`}
            className="bg-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.featuredProducts.map((product) => (
            <div
              className="bg-white p-5 rounded-lg shadow-lg transition transform hover:scale-105"
              key={product.id}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXR0K5XplKhtbp7J43NIBQaEczqACjaJoVg&s"
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-orange-600 font-semibold">
                ${product.price.toFixed(2)}
              </p>
              <button className="bg-orange-600 text-white mt-4 w-full py-2 rounded-full hover:bg-orange-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Link to={`${PRODUCTS_ROUTE}`}>
          <button className="text-center text-orange-600 mt-8 block mx-auto">
            See More
          </button>
        </Link>
      </section>

      {/* Product Categories Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.categories.map((category, index) => (
            <div
              className="relative bg-cover bg-center h-64 rounded-lg"
              key={index}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <h3 className="text-3xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <button className="text-center text-orange-600 mt-8 block mx-auto">
          Shop All
        </button>
      </section>

      {/* Promotions Section */}
      <section className="bg-orange-600 text-white py-6 text-center">
        <p className="text-lg font-semibold">
          Free shipping on orders over NPR 5000
        </p>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {data.reviews.map((review, index) => (
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80"
              key={index}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-lg">{review.review}</p>
              <h4 className="text-xl font-semibold text-center mt-4">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="/faq" className="hover:text-orange-400">
            FAQ
          </a>
          <a href="/contact" className="hover:text-orange-400">
            Contact
          </a>
          <a href="/returns" className="hover:text-orange-400">
            Returns
          </a>
          <a href="/shipping" className="hover:text-orange-400">
            Shipping
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="hover:text-orange-400">
            Facebook
          </a>
          <a href="https://instagram.com" className="hover:text-orange-400">
            Instagram
          </a>
          <a href="https://twitter.com" className="hover:text-orange-400">
            Twitter
          </a>
          <a href="https://pinterest.com" className="hover:text-orange-400">
            Pinterest
          </a>
        </div>
        <div className="flex justify-center">
          <form className="flex items-center">
            <input
              type="email"
              className="p-2 rounded-l-lg border-none"
              placeholder="Subscribe for exclusive deals"
            />
            <button
              type="submit"
              className="bg-orange-600 px-6 py-2 rounded-r-lg text-white hover:bg-orange-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
