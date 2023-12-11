import { Navigate, Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';

export const ProtectedGuestRoute = () => {
  const { isUser } = useContext(AppContext);
  return (
    <>
      {!isUser && <Outlet />}
      {isUser && <Navigate to="/main" />}
    </>
  );
};
