import { Button } from '@/components/ui/button';
import publicationsData from '@/lib/json/publications.json';
import { Download } from 'lucide-react';

type SinglePublicationProps = {
  params: {
    id: string;
  };
};

export default function SinglePublication({ params }: SinglePublicationProps) {
  const publication = publicationsData.find(
    (publication) => publication.id === params.id
  );

  return (
    <div className='space-y-4 max-w-screen-xl mx-auto'>
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
        <Button variant='outline' size='sm'>
          <Download className='mr-2 h-4 w-4' />
          Download Paper
        </Button>
        <p className='text-sm text-muted-foreground'>DOI: {publication?.doi}</p>
      </div>
    </div>
  );
}
