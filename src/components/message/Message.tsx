import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { Alert } from '@mui/material';
import { useLanguage } from '../../localization/useLanguage';

const Message = () => {
  const { lang, message } = useContext(AppContext);

  const messageStyle =
    'flex justify-center fixed top-[-200px] w-250 left-1/2 transform -translate-x-1/2 transition-top duration-1500  ease-in-out';

  const [messageStyles, setMessageStyles] = useState(messageStyle);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessageStyles(`${messageStyle} top-16`);
        setTimeout(() => {
          setMessageStyles(messageStyle);
        }, 3000);
      }, 200);
    }
  }, [message]);

  const errorTitle = useLanguage('errorTitle', lang);
  const excuse = useLanguage('errorExcuse', lang);
  return (
    <>
      {message && (
        <div className={messageStyles}>
          <Alert severity="error">
            {errorTitle}
            {message}
            {excuse}
          </Alert>
        </div>
      )}
    </>
  );
};

export default Message;
