import { useContext, useState, useEffect } from 'react';
import LinkAsButton from '../components/LinkAsButton';
import { AppContext } from '../services/context/AppContextProvider';
import WelcomeContent from '../components/welcomeContent/WelcomeContent';
import { toast } from 'react-toastify';

const Welcome = () => {
  const { user } = useContext(AppContext);
  const [token, setToken] = useState<string | undefined>('');

  useEffect(() => {
    const validToken = async () => {
      setToken(await user?.getIdToken(false));
    };

    validToken().catch((error) => {
      toast.error(error.message ?? 'An error occurred', { position: 'top-right' });
    });
  }, [user]);

  return (
    <>
      <div className="flex justify-end w-9/12 mt-24 mb-10 gap-5 sm:my-10">
        {user && token ? (
          <LinkAsButton title="link_to_main" link="/main" />
        ) : (
          <>
            <LinkAsButton title="button_signin" link="/signin" />
            <LinkAsButton title="button_signup" link="/signup" />
          </>
        )}
      </div>

      <WelcomeContent />
    </>
  );
};

export default Welcome;
