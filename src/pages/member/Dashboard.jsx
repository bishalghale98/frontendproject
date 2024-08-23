import { useSelector } from "react-redux";
import Profile from "../../components/Profile";
import { BiCart } from "react-icons/bi";
import { MdOutlineTagFaces } from "react-icons/md";
import Cart from "../../components/Cart";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("cart"); // State to track the active tab

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Dashboard</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`flex items-center gap-2 ${
                activeTab === "profile"
                  ? "bg-green-500 dark:bg-green-600"
                  : "bg-blue-600 dark:bg-gray-700"
              } text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform ${
                activeTab === "profile" ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <MdOutlineTagFaces className="text-2xl" /> Profile
            </button>
            <button
              className={`flex items-center gap-2 ${
                activeTab === "cart"
                  ? "bg-green-500 dark:bg-green-600"
                  : "bg-blue-600 dark:bg-gray-700"
              } text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform ${
                activeTab === "cart" ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setActiveTab("cart")}
            >
              <BiCart className="text-2xl" /> Cart
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            {activeTab === "profile" ? (
              user ? (
                <Profile key={user.id} {...user} />
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  No user data available
                </p>
              )
            ) : (
              <Cart />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
