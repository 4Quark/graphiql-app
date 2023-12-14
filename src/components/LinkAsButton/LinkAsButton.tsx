import { Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { useLanguage } from '../../localization/useLanguage';
import { ILinkAsButtonProps } from '../../types/interface';

const LinkAsButton = (prop: ILinkAsButtonProps) => {
  const { lang } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(prop.link)} variant="outlined" size="medium">
      {useLanguage(prop.title, lang)}
    </Button>
  );
};

export default LinkAsButton;
