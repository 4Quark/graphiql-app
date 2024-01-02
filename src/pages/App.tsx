import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import AppContextProvider from '../context/ContextProvider';
import Message from '../components/message/Message';

export const App = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Header />
        <Message />
        <div className="min-h-screen flex flex-col justify-center items-center pt-10">
          <Outlet />
        </div>
        <Footer />
      </AppContextProvider>
    </ErrorBoundary>
  );
};
