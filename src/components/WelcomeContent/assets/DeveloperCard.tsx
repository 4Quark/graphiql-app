import { Card, CardContent, Typography } from '@mui/material';
import { BsGithub, BsEnvelopeFill, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getDeveloperData, useLanguage } from '../../../services/localization/useLanguage';
import { IDeveloperProps } from '../../../types/interface';
import { useContext } from 'react';
import { AppContext } from '../../../services/context/contextProvider';

const DeveloperCard = ({ title }: IDeveloperProps) => {
  const { lang } = useContext(AppContext);
  const name = useLanguage(title, lang);
  const location = useLanguage(`${title}Location`, lang);

  const iconStyles = 'transform transition-transform hover:scale-125';
  const devLinks = [
    {
      link: getDeveloperData(title).github,
      icon: <BsGithub className={iconStyles} />,
    },
    {
      link: getDeveloperData(title).linkedin,
      icon: <BsLinkedin className={iconStyles} />,
    },
    {
      link: getDeveloperData(title).email,
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
          {devLinks.map((link, index) => (
            <Link to={link.link} key={index} target="_blank" className="mb-3.5 mx-2">
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
