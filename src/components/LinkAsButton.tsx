import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../services/localization/useLanguage';
import { ILinkAsButtonProps } from '../types/interface';

const LinkAsButton = ({ link, title }: ILinkAsButtonProps) => {
  const navigate = useNavigate();

  const memoNavigate = useCallback(() => {
    navigate(link);
  }, [navigate, link]);

  return (
    <Button onClick={memoNavigate} variant="outlined" size="medium">
      {useLanguage(title)}
    </Button>
  );
};

export default LinkAsButton;
