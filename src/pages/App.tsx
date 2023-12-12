import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center pt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
