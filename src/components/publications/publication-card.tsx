import Link from "next/link";
import { Card } from "../ui/card";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

type PaperType = {
  id: string;
  title: string;
  conference: string;
  type: "journal" | "conference";
  year: string;
  doi: string;
  citation: string;
  download_paper: string;
  metadata?: string;
};

type PaperProps = {
  paper: PaperType;
};

export default function PublicationCard({ paper }: PaperProps) {
  const { title, conference, year, doi, citation, download_paper, type, metadata } = paper;

  const highlightKeywords = (text: string) =>
    text
      .replace(
        /(Maruf,\s*A\.A|A\.?\s*Al\s*Maruf|A\.?\s*A\.?\s*Maruf|A\.?\s*Al\.?Maruf|Maruf,\s*Abdullah\s*Al|Al\s*Maruf,\s*Abdullah|Al\s*Maruf,\s*A)/gi,
        `<strong>$1</strong>`
      )
      .replace(/(Scopus\s*:\s*Q[1-3])/gi, `<strong class="text-green-600">$1</strong>`)
      .replace(/(Conference\s*Rank\s*:\s*(Core\s+)?[ABC])/gi, `<strong class="text-green-600">$1</strong>`)
      .replace(/(Impact factor\s*:\s*\d+(\.\d+)?)/gi, `<strong class="text-green-600">$1</strong>`)
      .replace(/(H-index\s*:\s*\d+)/gi, `<strong class="text-green-600">$1</strong>`);

  return (
    <Card className="overflow-hidden transition-colors hover:bg-muted/50">
      <div className="p-6">
        <h3
          className="font-semibold tracking-tight hover:text-primary"
          dangerouslySetInnerHTML={{ __html: highlightKeywords(title) }}
        />
        <div className="space-y-2 mt-2">
          <p className="text-sm text-muted-foreground">
            <strong className="text-blue-700 mr-1">
              {type === "journal" ? "Journal Paper" : "Conference Paper"}
            </strong>
            <span
              dangerouslySetInnerHTML={{
                __html: `Published in ${highlightKeywords(conference)}, ${highlightKeywords(year)}`,
              }}
            />
          </p>
          {metadata && (
            <p
              className="italic text-sm text-gray-600 mt-1"
              dangerouslySetInnerHTML={{ __html: highlightKeywords(metadata) }}
            />
          )}
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{
              __html: `<span class='font-medium text-blue-600'>Recommended citation:</span> ${highlightKeywords(
                citation
              )}`,
            }}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-4 items-center">
          {download_paper && download_paper !== "Not yet" && (
            <Link href={download_paper} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-blue-700 underline">
                <Download className="mr-2 h-4 w-4" />
                Download Paper
              </Button>
            </Link>
          )}
          {doi && doi !== "Not available" && (
            <p className="text-sm text-blue-600">
              DOI:{" "}
              <Link href={doi} target="_blank" rel="noopener noreferrer" className="underline">
                <span dangerouslySetInnerHTML={{ __html: highlightKeywords(doi) }} />
              </Link>
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
