import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
