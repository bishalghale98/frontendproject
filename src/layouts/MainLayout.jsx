import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartBtn from "../components/CartBtn";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <CartBtn />
    </div>
  );
};

export default MainLayout;
