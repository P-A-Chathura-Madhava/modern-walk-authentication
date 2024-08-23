import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoute = () => {
  const getTokenFromLocalStorage: { token?: string } | null = JSON.parse(localStorage.getItem("user") as string);
  return getTokenFromLocalStorage?.token !== undefined ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;