import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { auth } from '../../../auth/firebase';
import { Button } from '@mui/material';
import { AppContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../localization/useLanguage';
import { toast } from 'react-toastify';

const AuthDetails = () => {
  const navigate = useNavigate();
  const { user, logout, lang } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else if (user) {
      user.getIdToken(false).then((token) => {
        if (!token) {
          navigate('/');
        }
      });
    }
  }, [navigate, user]);

  const userSignOut = (): void => {
    signOut(auth)
      .then(() => {
        logout();
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message ?? 'An error occurred', { position: 'top-right' });
      });
  };

  return (
    <>
      <span data-testid="logged_in_email" className="mx-4">
        {user ? user.email : ''}
      </span>

      <Button
        data-testid="sign_out_btn"
        onClick={userSignOut}
        variant="outlined"
        disabled={!user?.email}
      >
        {useLanguage('button_logout', lang)}
      </Button>
    </>
  );
};

export default AuthDetails;
