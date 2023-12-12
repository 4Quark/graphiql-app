import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { auth } from '../../../auth/firebase';
import { Button } from '@mui/material';
import { AppContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const navigate = useNavigate();
  const { user, logout, strings } = useContext(AppContext);

  useEffect(() => {
    if (user == null) {
      navigate('/');
    } else if (user != null) {
      user.getIdToken(false).then((token) => {
        if (!token) {
          navigate('/');
        }
      });
    }
  }, [navigate, user]);

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
        {strings.button_logout}
      </Button>
    </>
  );
};

export default AuthDetails;
