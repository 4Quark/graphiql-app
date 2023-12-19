import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { useLanguage } from '../../localization/useLanguage';

const ErrBoundContent = () => {
  const { lang } = useContext(AppContext);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        {useLanguage('EB_title', lang)}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {useLanguage('EB_subtitle', lang)}
      </Typography>
    </>
  );
};

export default ErrBoundContent;
