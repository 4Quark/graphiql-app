import { Link } from 'react-router-dom';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IDescriptionProps } from '../../../types/interface';

const Description = (props: IDescriptionProps) => {
  return (
    <div className="flex justify-center items-center w-9/12 mb-10">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ width: 56, height: 56, bgcolor: grey[800] }}>
              <img src={props.logo} alt="logo" />
            </Avatar>
          }
          title={props.title}
          subheader={props.subheader}
        />
        <CardContent>
          {props.paragraphs.map((par, index) => (
            <Typography paragraph key={`${props.title}_${index}`}>
              {par}
            </Typography>
          ))}
          <Link to={props.linkTo}>{props.linkTitle}</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Description;
