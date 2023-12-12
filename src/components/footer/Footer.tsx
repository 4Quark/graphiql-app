import rsslogo from '../../assets/rsslogo.png';
import ghlogo from '../../assets/github-mark-white.png';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const DevList = [
  { nameEN: 'Maria Samoilova', nameRU: 'Maria Samoilova', github: 'https://github.com/4Quark' },
  { nameEN: 'Anton Gulko', nameRU: 'Антон Гулько', github: 'https://github.com/johngaalt' },
  { nameEN: 'Iryna Zhebryk', nameRU: 'Ирина Жебрик', github: 'https://github.com/iradzh' },
];

const Footer = () => {
  const { lang } = useContext(AppContext);

  return (
    <footer>
      <Grid
        container
        className="justify-between items-center py-8 px-20 h-54 text-white bg-gray-900"
      >
        <Grid item xs={4}>
          <Link to="https://rs.school/" target="_blank">
            <img alt="rss school logo" src={rsslogo} className="h-12 mx-auto" />
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Grid container spacing={2} direction="column" className="items-center">
            {DevList.map((person, index) => (
              <Link
                to={person.github}
                target="_blank"
                key={index}
                className="flex justify-center items-center"
              >
                <img alt="github logo" src={ghlogo} className="h-4 px-2" />
                <Typography variant="subtitle1">
                  {lang === 'EN' ? person.nameEN : person.nameRU}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Typography className="text-center">© 2023-24</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
