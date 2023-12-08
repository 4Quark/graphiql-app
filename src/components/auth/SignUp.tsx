import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';

const SignUp = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('here');

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log('useCredential', useCredential);
        login();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Creat acc</h1>
        <input
          type="text"
          placeholder="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
