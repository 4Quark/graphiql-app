import { Link, To } from 'react-router-dom';
import ghlogo from '../../assets/github-mark-white.png';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { useGitLink, useLanguage } from '../../localization/useLanguage';
import { DictionaryKey, IDeveloperProps } from '../../types/interface';

const Developer = (props: IDeveloperProps) => {
  const { lang } = useContext(AppContext);
  const link = useGitLink(props.title as DictionaryKey);
  return (
    <div>
      <Link to={link as To} target="_blank" className="flex justify-center items-center">
        <img alt="github logo" src={ghlogo} className="h-4 px-2" />
        <Typography variant="subtitle1">
          {useLanguage(props.title as DictionaryKey, lang)}
        </Typography>
      </Link>
    </div>
  );
};

export default Developer;
