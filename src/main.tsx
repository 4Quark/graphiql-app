import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { PageLayout } from './layouts/PageLayout';
import NotFoundPage from './pages/NotFoundPage';
import Main from './components/main/Main';
import AppContextProvider from './context/ContextProvider';
import SingIn from './components/auth/SingIn';
import SignUp from './components/auth/SignUp';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PageLayout />} />
      <Route path="/signin" element={<SingIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </AppContextProvider>
  </React.StrictMode>
);
