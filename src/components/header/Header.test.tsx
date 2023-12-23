import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { App } from '../../pages/App';

test('Header updates language when toggler is clicked', () => {
  const routes = [
    {
      path: '/',
      element: <App />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText('Home')).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('ant design'));
  expect(screen.getByText('Домашняя')).toBeInTheDocument();
});
