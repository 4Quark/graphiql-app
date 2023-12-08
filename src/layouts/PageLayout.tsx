import { Outlet } from 'react-router-dom';
import Welcome from '../pages/Welcome';

export const PageLayout = () => {
  return (
    <>
      <Welcome />
      <>
        <Outlet />
      </>
    </>
  );
};
