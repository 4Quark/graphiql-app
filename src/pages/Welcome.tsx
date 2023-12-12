import { Link } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';
import { useContext, useEffect, useState } from 'react';

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
    <div>
      <p>Welcome Page</p>

      {user != null && token ? (
        <Link to="/main">You are user, you could go to main</Link>
      ) : (
        <>
          <p>You are not a user, create an acc</p>
          <Link to="/signin">Sign In</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
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
