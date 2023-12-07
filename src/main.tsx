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
import Auth from './components/auth/Auth';
import AppContextProvider from './context/ContextProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PageLayout />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
