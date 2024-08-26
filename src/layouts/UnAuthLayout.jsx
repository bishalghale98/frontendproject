import { Navigate, Outlet } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";

// eslint-disable-next-line react/prop-types
const UnAuthLayout = ({ user }) => {
  return <>{user ? <Navigate to={HOME_ROUTE} /> : <Outlet />}</>;
};

export default UnAuthLayout;
