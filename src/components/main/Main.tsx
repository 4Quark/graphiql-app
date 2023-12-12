import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const Main = () => {
  const { strings } = useContext(AppContext);

  return <div>{strings.main}</div>;
};

export default Main;
