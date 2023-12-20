import { DEV_NAMES } from '../../types/interface';
import CourseCard from './assets/CourseCard';
import DeveloperCard from './assets/DeveloperCard';
import ProjectCard from './assets/ProjectCard';

const WelcomeContent = () => {
  const developers = [DEV_NAMES.MARIA, DEV_NAMES.ANTON, DEV_NAMES.IRYNA];
  return (
    <>
      <div className="flex justify-center items-center w-9/12">
        <ProjectCard />
      </div>
      <div className="flex justify-between items-center w-9/12 flex-col gap-4 lg:flex-row lg:items-start my-10">
        {developers.map((dev) => (
          <DeveloperCard title={dev} key={dev} />
        ))}
      </div>
      <div className="flex justify-center items-center w-9/12 mb-10">
        <CourseCard />
      </div>
    </>
  );
};

export default WelcomeContent;
