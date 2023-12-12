import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const Main = () => {
  const { typography } = useContext(AppContext);

  return <div>{typography.main}</div>;
};

export default Main;
