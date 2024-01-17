import { useOutlet } from 'react-router-dom';

export const AuthLayout = () => {
  const outlet = useOutlet();

  return <>{outlet}</>;
};
