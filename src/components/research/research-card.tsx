import Link from 'next/link';
import { Card } from '../ui/card';
import { ExternalLink } from 'lucide-react';

type ResearchCard = {
  id: string;
  title: string;
  description: string;
};

type ResearchCardProps = {
  research: ResearchCard;
};

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Card className='overflow-hidden transition-colors hover:bg-muted/50'>
      <div className='p-6 space-y-2'>
        <h1 className='font-semibold tracking-tight hover:text-primary'>
          <Link
            href={`/research/${research.id}`}
            className='inline-flex items-center gap-2'
          >
            {research?.title}
            <ExternalLink className='h-4 w-4' />
          </Link>
        </h1>
        <p>{research?.description}</p>
      </div>
    </Card>
  );
}
