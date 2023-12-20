import { useContext, useState, useEffect } from 'react';
import LinkAsButton from '../components/LinkAsButton/LinkAsButton';
import { AppContext } from '../context/ContextProvider';

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
      {user != null && token ? (
        <LinkAsButton title="link_to_main" link="/main" />
      ) : (
        <div className="flex items-center px-10 h-14 p-2 gap-5">
          <LinkAsButton title="button_signin" link="/signin" />
          <LinkAsButton title="button_signup" link="/signup" />
        </div>
      )}
      <div>
        <h3>General information about project course and developers HERE</h3>
      </div>
    </>
  );
};

export default Welcome;
