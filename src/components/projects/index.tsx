import projectsData from '@/lib/json/projects.json';
import ProjectCard from './project-card';

export default function Projects() {
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Projects</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
