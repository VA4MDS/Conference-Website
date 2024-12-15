import { Card } from '../ui/card';

type ExperienceCardProps = {
  experience: {
    id: string;
    company: string;
    position: string;
    date: string;
    description: string;
    location: string;
  };
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, position, date, description, location } = experience;
  return (
    <Card className='overflow-hidden transition-colors hover:bg-muted/50'>
      <div className='p-6'>
        <h3 className='text-lg font-semibold tracking-tight hover:text-primary'>
          {position}
        </h3>
        <div className='flex items-end gap-2'>
          <p>{company},</p>
          <p className='mt-2 text-sm text-muted-foreground'>{location}</p>
        </div>
        <p className='mt-2 text-sm'>Duration: {date}</p>
        <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
      </div>
    </Card>
  );
}
