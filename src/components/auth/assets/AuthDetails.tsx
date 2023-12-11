import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../../auth/firebase';
import { Button } from '@mui/material';
import { AppContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out');
        logout();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <span>{authUser ? <span>{authUser.email}</span> : ''}</span>

      <Button onClick={userSignOut} variant="outlined" disabled={authUser?.email ? false : true}>
        Sign out
      </Button>
    </>
  );
};

export default AuthDetails;
