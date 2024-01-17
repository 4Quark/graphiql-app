import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

export const ProtectedUserRoute = () => {
  const { user } = useContext(AppContext);

  return <>{user ? <Outlet /> : <Navigate to="/main" />}</>;
};
