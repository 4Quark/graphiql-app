import { fireEvent, screen, waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { App } from '../../../pages/App';
import SignUp from '../SignUp';
import {
  createUserWithEmailAndPassword as mockCreateUserWithEmailAndPassword,
  signOut as mockSignOut,
} from 'firebase/auth';
import Main from '../../main/Main';

jest.mock('firebase/auth');

test('renders SignUp component', async () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <SignUp />,
        },
        {
          path: '/main',
          element: <Main />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  const wrapper = render(<RouterProvider router={router} />);

  const emailInput = wrapper.container.querySelector('#form-email')!;
  const passwordInput = wrapper.container.querySelector('#form-password')!;
  const submitButton = screen.getByTestId('submit_button');

  const mockUser = {
    email: 'test@example.com',
    password: '12!@qwQW',
    getIdToken: (forceRefresh?: boolean) => {
      return new Promise(() => {
        return forceRefresh ? 'SomeToken' : 'somethingElse';
      });
    },
  };

  (mockCreateUserWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
    user: mockUser,
  });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: '12!@qwQW' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      'test@example.com',
      '12!@qwQW'
    );

    expect(screen.getByTestId('logged_in_email').textContent).toEqual('test@example.com');
  });

  (mockSignOut as jest.Mock).mockResolvedValueOnce({});

  const signOutBtn = screen.getByTestId('sign_out_btn');
  fireEvent.click(signOutBtn);

  await waitFor(() => {
    expect(screen.getByTestId('logged_in_email').textContent).toEqual('');
  });
});
