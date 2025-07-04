import { Button } from '@/components/ui/button';
import publicationsData from '@/lib/json/publications.json';
import { Download } from 'lucide-react';
import Link from 'next/link';

type SinglePublicationProps = {
  params: {
    id: string;
  };
};

export default function SinglePublication({ params }: SinglePublicationProps) {
  const publication:
    | {
        id: string;
        title: string;
        conference: string;
        year: string;
        metadata: string;
        doi: string;
        citation: string;
        download_paper: string;
        type: string;
        abstract?: string;
      }
    | undefined = publicationsData.find(
    (publication) => publication.id === params.id
  );

  return (
    <div className='space-y-4 max-w-screen-xl mx-auto bg-red-500'>
      <h1 className='text-2xl font-bold'>{publication?.title || ''}</h1>
      <p className='text-gray-800'>{publication?.abstract}</p>
      <p className='text-muted-foreground'>
        Published in <span className='italic'>{publication?.conference}</span>,{' '}
        {publication?.year}
      </p>
      <p className='text-gray-800'>
        <span className='font-medium'>Recommended citation:</span>{' '}
        {publication?.citation}
      </p>
      <p>{publication?.abstract}</p>

      <div className='mt-4 flex flex-wrap gap-4 items-center'>
        {publication?.download_paper && (
          <Link href={publication?.download_paper || ''} target='_blank'>
            <Button
              variant='outline'
              size='sm'
              className='text-blue-700 underline'
            >
              <Download className='mr-2 h-4 w-4' />
              Download Paper
            </Button>
          </Link>
        )}

        <p className='text-sm text-muted-foreground'>DOI: {publication?.doi}</p>
      </div>
    </div>
  );
}
