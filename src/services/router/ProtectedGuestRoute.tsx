import { Navigate, Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../context/contextProvider';

export const ProtectedGuestRoute = () => {
  const { user } = useContext(AppContext);
  return <>{user ? <Navigate to="/main" /> : <Outlet />}</>;
};
