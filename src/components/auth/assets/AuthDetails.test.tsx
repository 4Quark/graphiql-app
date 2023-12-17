import { fireEvent, screen, waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { App } from '../../../pages/App';
import SignUp from '../SignUp';
import {
  createUserWithEmailAndPassword as mockCreateUserWithEmailAndPassword,
  onAuthStateChanged as mockOnAuthStateChange,
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

  const unsubscribeMock = jest.fn(); // Create a mock function
  (mockOnAuthStateChange as jest.Mock).mockResolvedValueOnce(() => {
    return unsubscribeMock;
  });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: '12!@qwQW' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(),
      'test@example.com',
      '12!@qwQW'
    );
    // expect(screen.queryByText('An error occurred')).toBeNull();
  });
});
