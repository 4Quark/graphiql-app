import { createRoutesFromElements, Route } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';
import Welcome from '../../pages/Welcome';
import { App } from '../../App';
import NotFoundPage from '../../pages/NotFoundPage';
import Main from '../../pages/Main';
import SingIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import { ProtectedUserRoute } from './ProtectedUserRoute';
import { ProtectedGuestRoute } from './ProtectedGuestRoute';

export const routerObj = createRoutesFromElements(
  <>
    <Route element={<AuthLayout />}>
      <Route path="/" element={<App />}>
        <Route index element={<Welcome />} />

        <Route element={<ProtectedGuestRoute />}>
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedUserRoute />}>
          <Route path="/main" element={<Main />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  </>
);
