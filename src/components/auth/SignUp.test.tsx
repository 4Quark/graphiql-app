import { act, fireEvent, screen, waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { App } from '../../pages/App';
import SignUp from './SignUp';

test('form validates wrong e-mail format', async () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <SignUp />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  const wrapper = render(<RouterProvider router={router} />);

  const inputs = {
    email: wrapper.container.querySelector('#form-email'),
    password: wrapper.container.querySelector('#form-password'),
  };

  await act(async () => {
    fireEvent.change(inputs.email!, {
      target: {
        value: 'email@email',
      },
    });

    fireEvent.change(inputs.password!, {
      target: {
        value: 'aaAA11!!',
      },
    });
  });

  await waitFor(() => {
    const error = wrapper.container.querySelector('.Mui-error');
    expect(error).toBeTruthy();
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
  });
});

test('form validates correct e-mail format', async () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <SignUp />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  const wrapper = render(<RouterProvider router={router} />);

  const inputs = {
    email: wrapper.container.querySelector('#form-email'),
    password: wrapper.container.querySelector('#form-password'),
  };

  await act(async () => {
    fireEvent.change(inputs.email!, {
      target: {
        value: 'email@email.con',
      },
    });

    fireEvent.change(inputs.password!, {
      target: {
        value: 'aaAA11!!',
      },
    });
  });

  await waitFor(() => {
    const error = wrapper.container.querySelector('.Mui-error');
    expect(error).toBeFalsy();
  });
});

test('form validates short password', async () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <SignUp />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  const wrapper = render(<RouterProvider router={router} />);

  const inputs = {
    email: wrapper.container.querySelector('#form-email'),
    password: wrapper.container.querySelector('#form-password'),
  };

  await act(async () => {
    fireEvent.change(inputs.email!, {
      target: {
        value: 'email@email.con',
      },
    });

    fireEvent.change(inputs.password!, {
      target: {
        value: '1111',
      },
    });
  });

  await waitFor(() => {
    const error = wrapper.container.querySelector('.Mui-error');
    expect(error).toBeTruthy();
    expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
  });
});

test('form validates complicated password', async () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <SignUp />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  const wrapper = render(<RouterProvider router={router} />);

  const inputs = {
    email: wrapper.container.querySelector('#form-email'),
    password: wrapper.container.querySelector('#form-password'),
  };

  await act(async () => {
    fireEvent.change(inputs.email!, {
      target: {
        value: 'email@email.con',
      },
    });

    fireEvent.change(inputs.password!, {
      target: {
        value: 'aaAA11!!',
      },
    });
  });

  await waitFor(() => {
    const error = wrapper.container.querySelector('.Mui-error');
    expect(error).toBeFalsy();
  });
});
