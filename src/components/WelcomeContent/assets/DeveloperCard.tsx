import { Card, CardContent, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { BsGithub, BsEnvelopeFill, BsLinkedin, BsRecordFill } from 'react-icons/bs';
import { Link, To } from 'react-router-dom';
import { getDeveloperData, useLanguage } from '../../../localization/useLanguage';
import { IDeveloperProps } from '../../../types/interface';
import { useContext } from 'react';
import { AppContext } from '../../../context/ContextProvider';

const DeveloperCard = (props: IDeveloperProps) => {
  const { lang } = useContext(AppContext);
  const name = useLanguage(props.title, lang);
  const location = useLanguage(`${props.title}Location`, lang) as string[];
  const arrOfRespon = useLanguage(`${props.title}Respons`, lang) as string[];

  const devLinks = [
    {
      link: getDeveloperData(props.title).github,
      icon: <BsGithub className="transform transition-transform hover:scale-125" />,
    },
    {
      link: getDeveloperData(props.title).linkedin,
      icon: <BsLinkedin className="transform transition-transform hover:scale-125" />,
    },
    {
      link: getDeveloperData(props.title).email,
      icon: <BsEnvelopeFill className="transform transition-transform hover:scale-125" />,
    },
  ];

  return (
    <Card className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-9/12 sm:w-9/12">
      <CardContent className="flex flex-col">
        <Typography variant="h5" align="center" gutterBottom>
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

        <List>
          <Typography align="center" className="text-indigo-600">
            {useLanguage('responsibilities', lang)}:
          </Typography>
          {arrOfRespon.map((respItem: string) => (
            <ListItem disablePadding key={respItem}>
              <ListItemButton>
                <BsRecordFill className="text-indigo-400 mr-2 h-2" />
                <Typography variant="body1">{respItem}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default DeveloperCard;
