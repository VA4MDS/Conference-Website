import skillsData from '@/lib/json/skills.json';
import SkillsCard from './skills-card';

export default function Skills() {
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Skills</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {skillsData.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
