import { useContext, useState, useEffect } from 'react';
import LinkAsButton from '../components/LinkAsButton/LinkAsButton';
import { AppContext } from '../context/ContextProvider';
import WelcomeContent from '../components/WelcomeContent/WelcomeContent';

const Welcome = () => {
  const { user } = useContext(AppContext);
  const [token, setToken] = useState<string | undefined>('');

  useEffect(() => {
    const validToken = async () => {
      setToken(await user?.getIdToken(false));
    };

    validToken().catch(console.error);
  }, [user]);
  return (
    <>
      <div className="flex justify-end w-9/12 mt-24 mb-10 gap-5 sm:my-10">
        {user != null && token ? (
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
