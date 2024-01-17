import { Typography } from '@mui/material';
import { useLanguage } from '../../services/localization/useLanguage';

const ErrBoundContent = () => {
  const errContent = [
    {
      type: 'h3',
      text: useLanguage('EB_title'),
    },
    {
      variant: 'subtitle1',
      text: useLanguage('EB_subtitle'),
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
