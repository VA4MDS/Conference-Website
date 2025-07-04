"use client";

import { useState } from "react";
import publicationsData from "@/lib/json/publications.json";
import PendingPublicationData from "@/lib/json/pending-published.json";
import PublicationCard from "./publication-card";


export default function Publications() {
  // parse year as number or return 0 if invalid or missing
  const extractYear = (entry: any) => {
    if (!entry.year) return 0;
    const y = parseInt(entry.year);
    return isNaN(y) ? 0 : y;
  };

  const [journalAsc, setJournalAsc] = useState(false);
  const [conferenceAsc, setConferenceAsc] = useState(false);

  const journalsWithYear = publicationsData
    .filter((paper) => paper.type === "journal" && extractYear(paper) > 0)
    .sort((a, b) =>
      journalAsc ? extractYear(a) - extractYear(b) : extractYear(b) - extractYear(a)
    );

  const journalsWithoutYear = publicationsData.filter(
    (paper) => paper.type === "journal" && extractYear(paper) === 0
  );

  const conferencesWithYear = publicationsData
    .filter((paper) => paper.type === "conference" && extractYear(paper) > 0)
    .sort((a, b) =>
      conferenceAsc
        ? extractYear(a) - extractYear(b)
        : extractYear(b) - extractYear(a)
    );

  const conferencesWithoutYear = publicationsData.filter(
    (paper) => paper.type === "conference" && extractYear(paper) === 0
  );

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold tracking-tight">Publications</h2>

      {/* Journal Papers */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Journal Papers</h3>
          <button
            onClick={() => setJournalAsc(!journalAsc)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
          >
            Sort Year: {journalAsc ? "Ascending ↑" : "Descending ↓"}
          </button>
        </div>
        {journalsWithYear.map((paper) => (
          <PublicationCard key={paper.id} paper={paper} />
        ))}
        {journalsWithoutYear.length > 0 && (
          <>
            <h4 className="text-xl font-semibold mt-6">
              Journal Papers Without Year
            </h4>
            {journalsWithoutYear.map((paper) => (
              <PublicationCard key={paper.id} paper={paper} />
            ))}
          </>
        )}
      </section>

      {/* Conference Papers */}
      <section>
        <div className="flex justify-between items-center mb-4 mt-10">
          <h3 className="text-2xl font-semibold">Conference Papers</h3>
          <button
            onClick={() => setConferenceAsc(!conferenceAsc)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
          >
            Sort Year: {conferenceAsc ? "Ascending ↑" : "Descending ↓"}
          </button>
        </div>
        {conferencesWithYear.map((paper) => (
          <PublicationCard key={paper.id} paper={paper} />
        ))}
        {conferencesWithoutYear.length > 0 && (
          <>
            <h4 className="text-xl font-semibold mt-6">
              Conference Papers Without Year
            </h4>
            {conferencesWithoutYear.map((paper) => (
              <PublicationCard key={paper.id} paper={paper} />
            ))}
          </>
        )}
      </section>

      {/* Pending Publications */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight mt-10">
          Publications Under Review
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          {PendingPublicationData.map((paper) => (
            <li key={paper.id} className="text-base">
              <strong>{paper.title}</strong>
              {paper.journal && <> — <em>{paper.journal}</em></>}
              {paper.status && (
                <>
                  {' '}
                  [<span className="italic">{paper.status}</span>]
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
