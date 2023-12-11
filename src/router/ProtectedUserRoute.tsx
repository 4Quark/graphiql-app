import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';

export const ProtectedUserRoute = () => {
  const { isUser } = useContext(AppContext);

  return (
    <>
      {isUser && <Navigate to="/main" />}
      {!isUser && <Outlet />}
    </>
  );
};
