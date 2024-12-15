import { ExternalLink } from 'lucide-react';
import { Card } from '../ui/card';

interface TalkProps {
  talk: {
    id: string;
    title: string;
    description: string;
  };
}

export default function TalksCard({ talk }: TalkProps) {
  const { title, description } = talk;
  return (
    <Card className='overflow-hidden transition-colors hover:bg-muted/50'>
      <div className='p-6 space-y-2'>
        <h1 className='font-semibold tracking-tight hover:text-primary'>
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </Card>
  );
}
