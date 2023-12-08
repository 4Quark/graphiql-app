import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../auth/firebase';
import { Button } from '@mui/material';
import { AppContext } from '../../context/ContextProvider';

interface IFirebaseUser {
  email: string;
}
type IAuthUser = null | IFirebaseUser;

const AuthDetails = () => {
  const { logout } = useContext(AppContext);

  const [authUser, setAuthUser] = useState<IAuthUser>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: IAuthUser) => {
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
      })
      .catch((err) => console.log(err));
  };

  console.log(authUser);
  return (
    <>
      <Button onClick={userSignOut} variant="outlined" disabled={authUser?.email ? false : true}>
        Sign out
      </Button>

      <span>{authUser ? <span>{`Signed in as ${authUser.email}`}</span> : <span>Guest</span>}</span>
    </>
  );
};

export default AuthDetails;
