import { useSelector } from "react-redux";
import Profile from "../../components/Profile";
import { BiCart } from "react-icons/bi";
import { MdOutlineTagFaces } from "react-icons/md";
import Cart from "../../components/Cart";
import { useState } from "react";
import AddProduct from "../../components/AddProduct";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div className="dark:bg-gray-900 dark:text-white py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-10 text-center">
          Dashboard
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 gap-4 mb-8">
          <button
            className={`flex items-center justify-center gap-2 text-base sm:text-lg ${
              activeTab === "profile"
                ? "bg-green-500 dark:bg-green-600"
                : "bg-blue-600 dark:bg-gray-700"
            } text-white px-4 py-3 rounded-lg transition-transform duration-300 ease-in-out ${
              activeTab === "profile" ? "scale-105" : "hover:scale-105"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <MdOutlineTagFaces className="text-xl sm:text-2xl" /> Profile
          </button>

          <button
            className={`flex items-center justify-center gap-2 text-base sm:text-lg ${
              activeTab === "cart"
                ? "bg-green-500 dark:bg-green-600"
                : "bg-blue-600 dark:bg-gray-700"
            } text-white px-4 py-3 rounded-lg transition-transform duration-300 ease-in-out ${
              activeTab === "cart" ? "scale-105" : "hover:scale-105"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            <BiCart className="text-xl sm:text-2xl" /> Cart
          </button>

          {user && user.roles[0] === "ADMIN" && (
            <button
              className={`flex items-center justify-center gap-2 text-base sm:text-lg ${
                activeTab === "addProduct"
                  ? "bg-green-500 dark:bg-green-600"
                  : "bg-blue-600 dark:bg-gray-700"
              } text-white px-4 py-3 rounded-lg transition-transform duration-300 ease-in-out ${
                activeTab === "addProduct" ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setActiveTab("addProduct")}
            >
              Add Product +
            </button>
          )}
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-lg">
          {activeTab === "profile" ? (
            user ? (
              <Profile key={user.id} {...user} />
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300">
                No user data available
              </p>
            )
          ) : activeTab === "cart" ? (
            <Cart />
          ) : (
            <AddProduct />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
