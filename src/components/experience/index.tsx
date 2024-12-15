import experienceData from '@/lib/json/experience.json';
import ExperienceCard from './experience-card';

export default function Experience() {
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Experiences</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
