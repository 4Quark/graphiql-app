import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../../auth/firebase';
import { Button } from '@mui/material';
import { AppContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AppContext);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        logout();
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <span>{user ? <span>{user.email}</span> : ''}</span>

      <Button onClick={userSignOut} variant="outlined" disabled={user?.email ? false : true}>
        Sign out
      </Button>
    </>
  );
};

export default AuthDetails;
