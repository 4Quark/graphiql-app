import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

export const RootLayout = () => {
  return (
    <ErrorBoundary>
      <Header />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </ErrorBoundary>
  );
};
