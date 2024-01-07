import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import AppContextProvider from '../context/ContextProvider';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Header />
        <div className="min-h-screen flex flex-col justify-center items-center pt-10">
          <Outlet />
        </div>
        <Footer />
        <ToastContainer />
      </AppContextProvider>
    </ErrorBoundary>
  );
};
