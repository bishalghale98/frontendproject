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
import EditProduct from "./pages/products/Edit";
import {
  AUTH_ROUTE,
  CONTACT_ROUTE,
  DASHBOARD_ROUTE,
  ELECTRONICS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MEMBER_ROUTE,
  PRODUCTS_ROUTE,
  REGISTER_ROUTE,
  SMARTPHONES_ROUTE,
} from "./constants/routes";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={HOME_ROUTE} element={<MainLayout />}>
        <Route>
          <Route index element={<Home />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />

          <Route path={SMARTPHONES_ROUTE}>
            <Route index element={<ProductSmartphones />} />
            <Route path=":id" element={<ProductsDetails />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>

          <Route path={PRODUCTS_ROUTE}>
            <Route index element={<ProductsLists />} />
            <Route path=":id" element={<ProductsDetails />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>

          <Route path={ELECTRONICS_ROUTE}>
            <Route index element={<ProductElectronics />} />
            <Route path=":id" element={<ProductsDetails />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
        </Route>

        <Route element={<UnAuthLayout user={user} />}>
          <Route path={AUTH_ROUTE}>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={REGISTER_ROUTE} element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthLayout user={user} />}>
          <Route path={MEMBER_ROUTE}>
            <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
