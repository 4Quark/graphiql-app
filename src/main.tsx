import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routerObj } from './services/router/RouterConfig';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const router = createHashRouter(routerObj, {
  basename: '/',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
