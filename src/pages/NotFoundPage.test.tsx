import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('get NotFoundPage in case of wrong route', async () => {
  const routes = [
    {
      path: '/wrongRoute',
      element: <NotFoundPage />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/wrongRoute'],
  });

  render(<RouterProvider router={router} />);

  const errorMessage = /Sorry, the page you are looking for does not exist./;
  const messageElement = await screen.findByText(errorMessage);

  expect(messageElement).toBeInTheDocument();
});
