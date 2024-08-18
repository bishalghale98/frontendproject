import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UnAuthLayout = ({ user }) => {
  return <>{user ? <Navigate to="/" /> : <Outlet />}</>;
};

export default UnAuthLayout;
