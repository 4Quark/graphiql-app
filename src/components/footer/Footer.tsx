import rsslogo from '../../assets/rsslogo.png';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Developer from '../Developer/Developer';
import { DEV_NAMES } from '../../types/interface';

const Footer = () => {
  const developers = [DEV_NAMES.ANTON, DEV_NAMES.MARIA, DEV_NAMES.IRYNA];

  return (
    <footer className="flex flex-col justify-between items-center mt-20 py-8 px-20 h-54 text-white bg-gray-900 gap-y-4 sm:flex-row">
      <Grid item xs={4}>
        <Link to="https://rs.school/" target="_blank">
          <img alt="rss school logo" src={rsslogo} className="h-12 mx-auto" />
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Grid container spacing={2} direction="column" className="items-center">
          {developers.map((name) => (
            <Developer title={name} key={name} />
          ))}
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Typography className="text-center">© 2023-24</Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
