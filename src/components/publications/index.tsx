'use client';

import { useState } from 'react';
import publicationsData from '@/lib/json/publications.json';
import PendingPublicationData from '@/lib/json/pending-published.json';

export default function Publications() {
  const extractYear = (entry: any) => {
    const match = entry.year.trim().match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };

  const [journalAsc, setJournalAsc] = useState(false);
  const [conferenceAsc, setConferenceAsc] = useState(false);

  const sortedJournals = [...publicationsData]
    .filter((paper) => paper.type === 'journal')
    .sort((a, b) =>
      journalAsc ? extractYear(a) - extractYear(b) : extractYear(b) - extractYear(a)
    );

  const sortedConferences = [...publicationsData]
    .filter((paper) => paper.type === 'conference')
    .sort((a, b) =>
      conferenceAsc ? extractYear(a) - extractYear(b) : extractYear(b) - extractYear(a)
    );

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold tracking-tight">Publications</h2>

      {/* Journal Papers Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Journal Papers</h3>
          <button
            onClick={() => setJournalAsc(!journalAsc)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
          >
            Sort Year: {journalAsc ? 'Ascending ↑' : 'Descending ↓'}
          </button>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          {sortedJournals.map((paper) => (
            <li key={paper.id} className="text-base">
              <strong>{paper.title}</strong> — {paper.year}
              {paper.doi && (
                <>
                  {' '}
                  [<a href={paper.doi} target="_blank" className="text-blue-600 underline">
                    DOI
                  </a>]
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Conference Papers Section */}
      <section>
        <div className="flex justify-between items-center mb-4 mt-10">
          <h3 className="text-2xl font-semibold">Conference Papers</h3>
          <button
            onClick={() => setConferenceAsc(!conferenceAsc)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
          >
            Sort Year: {conferenceAsc ? 'Ascending ↑' : 'Descending ↓'}
          </button>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          {sortedConferences.map((paper) => (
            <li key={paper.id} className="text-base">
              <strong>{paper.title}</strong> — {paper.year}
              {paper.doi && (
                <>
                  {' '}
                  [<a href={paper.doi} target="_blank" className="text-blue-600 underline">
                    DOI
                  </a>]
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Pending Publications Section */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight mt-10">Publications Under Review</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          {PendingPublicationData.map((paper) => (
            <li key={paper.id} className="text-base">
              <strong>{paper.title}</strong> — {paper.year}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
