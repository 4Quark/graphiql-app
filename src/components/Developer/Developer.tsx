import { Link } from 'react-router-dom';
import ghlogo from '../../assets/github-mark-white.png';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { getDeveloperData, useLanguage } from '../../localization/useLanguage';
import { IDeveloperProps } from '../../types/interface';

const Developer = (props: IDeveloperProps) => {
  const { lang } = useContext(AppContext);
  const name = useLanguage(props.title, lang);
  const github = getDeveloperData(props.title).github;

  return (
    <>
      <Link to={github} target="_blank" className="flex justify-center items-center">
        <img alt="github logo" src={ghlogo} className="h-4 px-2" />
        <Typography variant="subtitle1">{name}</Typography>
      </Link>
    </>
  );
};

export default Developer;
