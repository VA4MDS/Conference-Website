import PublicationCard from './publication-card';
import publicationsData from '@/lib/json/publications.json';
import PendingPublicationData from '@/lib/json/pending-published.json';
import PendingPublicationCard from './pending-publication-card';

export default function Publications() {
  // Extract year from string like "Year: 2025 ,Scopus : Q1, Impact factor: 2.9 ,H-index: 435"
  const extractYear = (entry: any) => {
    const match = entry.year.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };

  // Separate and sort by year (descending)
  const journalPapers = publicationsData
    .filter((paper) => paper.conference?.toLowerCase().includes('journal') || paper.conference?.toLowerCase().includes('plos') || paper.conference?.toLowerCase().includes('ieee') || paper.conference?.toLowerCase().includes('springer'))
    .sort((a, b) => extractYear(b) - extractYear(a));

  const conferencePapers = publicationsData
    .filter((paper) => !journalPapers.includes(paper))
    .sort((a, b) => extractYear(b) - extractYear(a));

  return (
    <div className='space-y-10'>
      <h2 className='text-3xl font-bold tracking-tight'>Publications</h2>

      {/* Journals */}
      <div>
        <h3 className='text-2xl font-semibold mb-4'>Journal Papers</h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {journalPapers.map((paper, index) => (
            <PublicationCard key={index} paper={paper} />
          ))}
        </div>
      </div>

      {/* Conferences */}
      <div>
        <h3 className='text-2xl font-semibold mt-6 mb-4'>Conference Papers</h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {conferencePapers.map((paper, index) => (
            <PublicationCard key={index} paper={paper} />
          ))}
        </div>
      </div>

      {/* Pending / Under Review */}
      <h2 className='text-3xl font-bold tracking-tight mt-8'>Publications Under Review</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {PendingPublicationData.map((paper, index) => (
          <PendingPublicationCard key={index} paper={paper} />
        ))}
      </div>
    </div>
  );
}
