import { Navigate, Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';

export const ProtectedGuestRoute = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      {!user && <Outlet />}
      {user && <Navigate to="/main" />}
    </>
  );
};
