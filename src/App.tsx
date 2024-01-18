import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import AppContextProvider from './services/context/AppContextProvider';
import { ToastContainer } from 'react-toastify';
import { setupStore } from './services/store/store';
import { Provider } from 'react-redux';

const store = setupStore();

export const App = () => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Provider store={store}>
          <Header />
          <div className="min-h-screen flex flex-col justify-center items-center pt-10">
            <Outlet />
          </div>
          <Footer />
          <ToastContainer />
        </Provider>
      </AppContextProvider>
    </ErrorBoundary>
  );
};
