import PublicationCard from './publication-card';
import publicationsData from '@/lib/json/publications.json';
import PendingPublicationData from '@/lib/json/pending-published.json';
import PendingPublicationCard from './pending-publication-card';

export default function Publications() {
  // Extract year (e.g. from "Year: 2025 ,Scopus : Q1, Impact factor: 2.9 ,H-index: 435")
  const extractYear = (entry: any) => {
    const match = entry.year.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };

  // Filter & sort by paper type
  const journalPapers = publicationsData
    .filter((paper) => paper.type === 'journal')
    .sort((a, b) => extractYear(b) - extractYear(a));

  const conferencePapers = publicationsData
    .filter((paper) => paper.type === 'conference')
    .sort((a, b) => extractYear(b) - extractYear(a));

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold tracking-tight">Publications</h2>

      {/* Journal Papers Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Journal Papers</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {journalPapers.map((paper) => (
            <PublicationCard key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Conference Papers Section */}
      <section>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Conference Papers</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {conferencePapers.map((paper) => (
            <PublicationCard key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Pending / Under Review Section */}
      <h2 className="text-3xl font-bold tracking-tight mt-10">Publications Under Review</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PendingPublicationData.map((paper) => (
          <PendingPublicationCard key={paper.id} paper={paper} />
        ))}
      </div>
    </div>
  );
}
