import Link from 'next/link';
import { Card } from '../ui/card';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

type PaperType = {
  id: string;
  title: string;
  conference: string;
  year: string;
  doi: string;
  citation: string;
};

type PaperProps = {
  paper: PaperType;
};

export default function PublicationCard({ paper }: PaperProps) {
  const { title, conference, year, doi, citation, id } = paper;
  return (
    <Card className='overflow-hidden transition-colors hover:bg-muted/50'>
      <div className='p-6'>
        <h3 className='font-semibold tracking-tight hover:text-primary'>
          <Link
            href={`/publications/${id}`}
            className='inline-flex items-center gap-2'
          >
            {title}
            <ExternalLink className='h-4 w-4' />
          </Link>
        </h3>
        <div className='space-y-2'>
          <p className='mt-2 text-sm text-muted-foreground'>
            Published in {conference}, {year}
          </p>
          <p className='text-gray-600'>
            <span className='font-medium text-gray-700'>
              Recommended citation:
            </span>{' '}
            {citation}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-4 items-center'>
          <Button variant='outline' size='sm'>
            <Download className='mr-2 h-4 w-4' />
            Download Paper
          </Button>
          <p className='text-sm text-muted-foreground'>DOI: {doi}</p>
        </div>
      </div>
    </Card>
  );
}
