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
  download_paper: string;
};

type PaperProps = {
  paper: PaperType;
};

export default function PublicationCard({ paper }: PaperProps) {
  const { title, conference, year, doi, citation, id, download_paper } = paper;

  // Highlight all variations of your name
  const highlightKeywords = (text: string) =>
    text
      // Regex for variations of your name
      .replace(
        /(Maruf,\s*A\.A|A\.?\s*Al\s*Maruf|A\.?\s*A\.?\s*Maruf|A\.?\s*Al\.?Maruf|Maruf,\s*Abdullah\s*Al|Al\s*Maruf,\s*Abdullah|Al\s*Maruf,\s*A)/gi,
        `<strong>$1</strong>`
      )
      // Highlight Scopus rankings
      .replace(/(Scopus\s*:\s*Q[1-3])/gi, `<strong class="text-green-600">$1</strong>`)
      // Highlight Conference Ranks
      .replace(/(Confereence\s*Rank\s*:\s*(Core\s+)?[ABC])/gi, `<strong class="text-green-600">$1</strong>`)
      // Highlight Impact Factor values
      .replace(/(Impact factor\s*:\s*\d+(\.\d+)?)/gi, `<strong class="text-green-600">$1</strong>`)
      // Highlight H-Index values
      .replace(/(H-index\s*:\s*\d+)/gi, `<strong class="text-green-600">$1</strong>`);

  return (
    <Card className="overflow-hidden transition-colors hover:bg-muted/50">
      <div className="p-6">
        {/* Title with highlights */}
        <h3
          className="font-semibold tracking-tight hover:text-primary"
          dangerouslySetInnerHTML={{ __html: highlightKeywords(title) }}
        ></h3>
        <div className="space-y-2">
          {/* Conference and Year with highlights */}
          <p
            className="mt-2 text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: `Published in ${highlightKeywords(conference)}, ${highlightKeywords(
                year
              )}`,
            }}
          ></p>
          {/* Citation with highlights */}
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{
              __html: `<span class='font-medium text-blue-600'>Recommended citation:</span> ${highlightKeywords(
                citation
              )}`,
            }}
          ></p>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 items-center">
          {/* Download button */}
          {download_paper && (
            <Link href={download_paper} target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-blue-700 underline"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Paper
              </Button>
            </Link>
          )}
          {/* DOI with highlights */}
          <p
            className="text-sm text-blue-600"
            dangerouslySetInnerHTML={{
              __html: `DOI: ${highlightKeywords(doi)}`,
            }}
          ></p>
        </div>
      </div>
    </Card>
  );
}
