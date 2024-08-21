import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductsLists from "./pages/products/Lists";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import ProductsDetails from "./pages/products/Details";
import ProductSmartphones from "./pages/products/SmartphonesList";
import ProductElectronics from "./pages/products/Electronics";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/member/Dashboard";
import UnAuthLayout from "./layouts/UnAuthLayout";
import AuthLayout from "./layouts/AuthLayout";
import { useSelector } from "react-redux";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />

          <Route path="smartphones">
            <Route index element={<ProductSmartphones />} />
            <Route path=":id" element={<ProductsDetails />} />
          </Route>

          <Route path="products">
            <Route index element={<ProductsLists />} />
            <Route path=":id" element={<ProductsDetails />} />
          </Route>

          <Route path="Electronics">
            <Route index element={<ProductElectronics />} />
            <Route path=":id" element={<ProductsDetails />} />
          </Route>
        </Route>

        <Route element={<UnAuthLayout user={user} />}>
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthLayout user={user} />}>
          <Route path="member">
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
