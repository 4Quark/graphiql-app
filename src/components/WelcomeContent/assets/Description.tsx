import { Link } from 'react-router-dom';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

interface IDescriptionProps {
  title: string;
  subheader: string;
  paragraphs: string[];
  linkTitle: string;
  linkTo: string;
  logo: string;
}

const Description = ({
  title,
  subheader,
  paragraphs,
  linkTitle,
  linkTo,
  logo,
}: IDescriptionProps) => {
  return (
    <div className="flex justify-center items-center w-9/12 mb-10">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ width: 56, height: 56, bgcolor: grey[800] }}>
              <img src={logo} alt="logo" />
            </Avatar>
          }
          title={title}
          subheader={subheader}
        />
        <CardContent>
          {paragraphs.map((par, index) => (
            <Typography paragraph key={`${title}_${index}`}>
              {par}
            </Typography>
          ))}
          <Link to={linkTo}>{linkTitle}</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Description;
