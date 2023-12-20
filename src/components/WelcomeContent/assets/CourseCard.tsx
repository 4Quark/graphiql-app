import { Card, CardHeader, Avatar, CardContent, Typography } from '@mui/material';
// import reactlogo from '../../../assets/reactlogo.png';
import { grey } from '@mui/material/colors';
import { useLanguage } from '../../../localization/useLanguage';
import { useContext } from 'react';
import { AppContext } from '../../../context/ContextProvider';
import { Link } from 'react-router-dom';

const CourseCard = () => {
  const { lang } = useContext(AppContext);

  const title = useLanguage('reactTitle', lang);
  const subheader = 'RS School';
  const paragraph1 = useLanguage('reactParagraph_01', lang);
  const paragraph2 = useLanguage('reactParagraph_02', lang);
  const link = useLanguage('reactLink', lang);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 56, height: 56, bgcolor: grey[800] }}>
            {/* <img src={reactlogo} alt="react-logo" /> */}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography paragraph>{paragraph1}</Typography>
        <Typography paragraph>{paragraph2}</Typography>

        <Link to="https://rs.school/react/">{link}</Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
