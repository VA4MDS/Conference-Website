import PublicationCard from './publication-card';
import PendingPublicationData from '@/lib/json/pending-published.json';
import publicationsData from '@/lib/json/publications.json';
import PendingPublicationCard from './pending-publication-card';

export default async function Publications() {
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Publications</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {publicationsData.map((paper, index) => (
          <PublicationCard key={index} paper={paper} />
        ))}
      </div>
      <h2 className='text-3xl font-bold tracking-tight'>
        Pending Publications
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {PendingPublicationData.map((paper, index) => (
          <PendingPublicationCard key={index} paper={paper} />
        ))}
      </div>
    </div>
  );
}
