import { Card } from '../ui/card';

type SkillsType = {
  id: string;
  name: string;
  skills: {
    id: string;
    name: string;
    level: string;
  }[];
};

type SkillsTypeProps = {
  skill: SkillsType;
};

export default function SkillsCard({ skill }: SkillsTypeProps) {
  const { name, skills } = skill;
  return (
    <Card className='overflow-hidden transition-colors hover:bg-muted/50'>
      <div className='p-6 space-y-2'>
        <h1 className='font-semibold tracking-tight hover:text-primary'>
          {name}
        </h1>
        <div>
          {skills.map((skill, index) => (
            <p key={index}>{skill.name}</p>
          ))}
        </div>
      </div>
    </Card>
  );
}
