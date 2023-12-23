import { Card, CardContent, Typography } from '@mui/material';
import { BsGithub, BsEnvelopeFill, BsLinkedin } from 'react-icons/bs';
import { Link, To } from 'react-router-dom';
import { getDeveloperData, useLanguage } from '../../../localization/useLanguage';
import { IDeveloperProps } from '../../../types/interface';
import { useContext } from 'react';
import { AppContext } from '../../../context/ContextProvider';

const DeveloperCard = (props: IDeveloperProps) => {
  const { lang } = useContext(AppContext);
  const name = useLanguage(props.title, lang);
  const location = useLanguage(`${props.title}Location`, lang);

  const iconStyles = 'transform transition-transform hover:scale-125';
  const devLinks = [
    {
      link: getDeveloperData(props.title).github,
      icon: <BsGithub className={iconStyles} />,
    },
    {
      link: getDeveloperData(props.title).linkedin,
      icon: <BsLinkedin className={iconStyles} />,
    },
    {
      link: getDeveloperData(props.title).email,
      icon: <BsEnvelopeFill className={iconStyles} />,
    },
  ];

  return (
    <Card className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-9/12 sm:w-9/12">
      <CardContent className="flex flex-col">
        <Typography variant="h6" align="center" gutterBottom>
          {name}
        </Typography>

        <div className="flex items-center justify-center">
          {devLinks.map((link) => (
            <Link to={link.link as To} key={link.link} target="_blank" className="mb-3.5 mx-2">
              {link.icon}
            </Link>
          ))}
        </div>

        <Typography align="center">
          {useLanguage('location', lang)}
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DeveloperCard;
