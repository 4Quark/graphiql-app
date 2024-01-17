import { Button } from '@mui/material';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../services/context/contextProvider';
import { useLanguage } from '../services/localization/useLanguage';
import { ILinkAsButtonProps } from '../types/interface';

const LinkAsButton = ({ link, title }: ILinkAsButtonProps) => {
  const { lang } = useContext(AppContext);
  const navigate = useNavigate();

  const memoNavigate = useCallback(() => {
    navigate(link);
  }, [navigate, link]);

  return (
    <Button onClick={memoNavigate} variant="outlined" size="medium">
      {useLanguage(title, lang)}
    </Button>
  );
};

export default LinkAsButton;
