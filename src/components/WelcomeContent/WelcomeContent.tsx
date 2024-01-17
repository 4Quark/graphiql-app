import { DEV_NAMES } from '../../types/interface';
import Description from './assets/Description';
import DeveloperCard from './assets/DeveloperCard';
import graphqllogo from '../../assets/graphql-logo.png';
import reactlogo from '../../assets/react-logo.png';
import { useLanguage } from '../../services/localization/useLanguage';
import { Typography } from '@mui/material';

const WelcomeContent = () => {
  const developers = [DEV_NAMES.ANTON, DEV_NAMES.MARIA, DEV_NAMES.IRYNA];
  return (
    <>
      <Description
        title={useLanguage('projectTitle')}
        subheader={useLanguage('projectSubtitle')}
        paragraphs={[useLanguage('projectParagraph_01')]}
        linkTitle={useLanguage('projectLink')}
        linkTo="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
        logo={graphqllogo}
      />

      <Typography variant="h5">{useLanguage('team')}</Typography>

      <div className="flex justify-between items-center w-9/12 flex-col gap-4 lg:flex-row lg:items-start my-10">
        {developers.map((dev) => (
          <DeveloperCard title={dev} key={dev} />
        ))}
      </div>

      <Description
        title={useLanguage('reactTitle')}
        subheader="The Rolling Scopes"
        paragraphs={[
          useLanguage('reactParagraph_01'),
          useLanguage('reactParagraph_02'),
          useLanguage('reactParagraph_03'),
        ]}
        linkTitle={useLanguage('reactLink')}
        linkTo="https://rs.school/react/"
        logo={reactlogo}
      />
    </>
  );
};

export default WelcomeContent;
