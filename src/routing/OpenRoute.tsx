import { Outlet, Navigate } from 'react-router-dom';


const OpenRoute = () => {
  const getTokenFromLocalStorage: { token?: string } | null = JSON.parse(localStorage.getItem("user") as string);
  return getTokenFromLocalStorage?.token === undefined ? <Outlet /> : <Navigate to="/home" replace />;
};

export default OpenRoute;