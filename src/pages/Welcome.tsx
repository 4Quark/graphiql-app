import { Link } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';
import { useContext, useEffect, useState } from 'react';

const Welcome = () => {
  const { user, typography } = useContext(AppContext);
  const [token, setToken] = useState<string | undefined>('');

  useEffect(() => {
    const validToken = async () => {
      setToken(await user?.getIdToken(false));
    };

    validToken().catch(console.error);
  }, [user]);

  return (
    <div>
      {user != null && token ? (
        <Link to="/main">{typography.link_to_main}</Link>
      ) : (
        <>
          <Link to="/signin">{typography.button_signin}</Link>
          <br />
          <Link to="/signup">{typography.button_signup}</Link>
        </>
      )}
      <hr />
      <div>
        <h3>General information about project course and developers HERE</h3>
      </div>
    </div>
  );
};

export default Welcome;
