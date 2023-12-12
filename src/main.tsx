import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import AppContextProvider from './context/ContextProvider';
import { routerObj } from './router/RouterConfig';
import './index.css';

const router = createHashRouter(routerObj, {
  basename: '/',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
