import rsslogo from '../../assets/rsslogo.png';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Developer from '../Developer/Developer';

const Footer = () => {
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
            <Developer title="developerMaria" />
            <Developer title="developerAnton" />
            <Developer title="developerIryna" />
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
