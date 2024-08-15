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
import ProductLaptops from "./pages/products/laptops";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="smartphones" element={<ProductSmartphones />} />
        <Route path="laptops" element={<ProductLaptops />} />

        <Route path="products">
          <Route index element={<ProductsLists />} />
          <Route path=":id" element={<ProductsDetails />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
