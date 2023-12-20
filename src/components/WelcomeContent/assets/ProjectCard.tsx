import { Card, CardHeader, Avatar, CardContent, Typography } from '@mui/material';
// import graphqllogo from '../../../assets/graphql.webp';
import { grey } from '@mui/material/colors';
import { useContext } from 'react';
import { AppContext } from '../../../context/ContextProvider';
import { useLanguage } from '../../../localization/useLanguage';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  const { lang } = useContext(AppContext);
  const title = useLanguage('projectTitle', lang);
  const subheader = useLanguage('projectSubtitle', lang);

  const paragraph1 = useLanguage('projectParagraph_01', lang);
  const paragraph2 = useLanguage('projectParagraph_02', lang);
  const link = useLanguage('projectLink', lang);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 56, height: 56, bgcolor: grey[200] }}>
            {/* <img src={graphqllogo} alt="graphql-logo" /> */}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography paragraph>{paragraph1}</Typography>
        <Typography paragraph>{paragraph2}</Typography>
        <Typography paragraph>
          Welcome to the final project of React course made by our team. Here you could find our
          verison of the GraphiQL app.
        </Typography>
        <Link to="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md">
          {link}
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
