import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { useLanguage } from '../../localization/useLanguage';

const ErrBoundContent = () => {
  const { lang } = useContext(AppContext);
  const errContent = [
    {
      type: 'h3',
      text: useLanguage('EB_title', lang),
    },
    {
      variant: 'subtitle1',
      text: useLanguage('EB_subtitle', lang),
    },
  ];

  return (
    <>
      {errContent.map((par) => (
        <Typography key={par.variant} gutterBottom>
          {par.text}
        </Typography>
      ))}
    </>
  );
};

export default ErrBoundContent;
